package com.mozart.mocka.service;

import com.mozart.mocka.domain.Members;
import com.mozart.mocka.domain.ProjectInvitations;
import com.mozart.mocka.domain.Projects;
import com.mozart.mocka.dto.TeamMemberDto;
import com.mozart.mocka.dto.response.InvitationResponseDto;
import com.mozart.mocka.repository.MembersRepository;
import com.mozart.mocka.repository.ProjectHistoryRepository;
import com.mozart.mocka.repository.ProjectInvitationRepository;
import com.mozart.mocka.repository.ProjectRepository;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

import static org.hibernate.query.sqm.tree.SqmNode.log;

@Service
@RequiredArgsConstructor
public class InviteService {

    private final ProjectHistoryRepository historyRepository;
    private final ProjectRepository projectRepository;
    private final MembersRepository membersRepository;
    private final ProjectInvitationRepository invitationRepository;
    private final EmailService emailService;

    public void createInvitation(String ownerName, Long projectId, List<TeamMemberDto> members) throws MessagingException {
        //프로젝트 소유주인지 확인
        Long ownerId = membersRepository.findByMemberNickname(ownerName).getMemberId();
        if (historyRepository.findOwnerByMemberIdAndProjectId(ownerId, projectId).isEmpty()) {
            log.info("프로젝트의 소유주와 일치하지 않습니다.");
            return;
        }

        String[] emails = new String[members.size()];

        // 1. Project_invitations 테이블에 데이터 추가됨
        for (int i = 0; i < members.size(); i++) {
            TeamMemberDto mem = members.get(i);
            emails[i] = mem.getEmail();

            Members newMem = membersRepository.findByMemberEmail(mem.getEmail());

            ProjectInvitations invitations = ProjectInvitations.builder()
                    .members(newMem)
                    .projects(projectRepository.findByProjectId(projectId))
                    .accepted(null)
                    .build();

            log.info(invitations);
            invitationRepository.save(invitations);
            log.debug("========= save invitation info ============");
        }

        // 메일 수신
        emailService.sendEmail(emails);
    }

    public InvitationResponseDto checkInvitation(String name, Long projectId) {
        Members member = membersRepository.findByMemberNickname(name);
        Projects project = projectRepository.findByProjectId(projectId);
        Optional<ProjectInvitations> invitation = invitationRepository.findByMembersAndProjects(member, project);
        int isResponse = 0;

        if (invitation.isPresent()) {
            if (invitation.get().getAccepted() != null) {
                log.debug("Invitation is pending.");
                isResponse = 1;
            } else {
                log.debug("Invitation accepted or declined.");
            }
        } else {
            log.debug("No invitation found for the given member and project.");
            isResponse = 10;
        }

        return InvitationResponseDto.builder()
                .invite(isResponse)
                .projectId(projectId)
                .projectName(project.getProjectName())
                .build();
    }
}
