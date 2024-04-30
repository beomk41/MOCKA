package com.mozart.mocka.service;

import com.mozart.mocka.domain.*;
import com.mozart.mocka.dto.response.ApiListResponseDto;
import com.mozart.mocka.dto.response.ProjectsListResponseDto;
import com.mozart.mocka.repository.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final ProjectHistoryRepository projectHistoryRepository;
    private final BaseUriRepository baseUriRepository;
    private final ApiProjectRepository apiProjectRepository;

    public void create(Long memberId, String projectName, String commonUri, String visibility) {
        Projects projects = Projects.builder()
                .projectName(projectName)
                .projectVisibility(visibility)
                .commonUri(commonUri)
                .build();

        projectRepository.save(projects);

        ProjectHistoryPK projectHistoryPK = makePK(projects.getProjectId(), memberId);
        ProjectHistories projectHistories = ProjectHistories.builder()
                .projectHistoryPK(projectHistoryPK)
                .projectRole("OWNER")
                .build();
        projectHistoryRepository.save(projectHistories);
    }

    public Boolean delete(Long memberId, Long projectId) {
        //is owner?
        if(checkAuthority(projectId,memberId) > 8)
            return false;

        projectRepository.deleteById(projectId);
        projectHistoryRepository.softDeleteByProjectId(projectId);
        baseUriRepository.deleteByProjectId(projectId);
        return true;
    }

    public boolean update(Long projectId, Long memberId, String projectName, String commonUri, String visibility) {
        if(checkAuthority(projectId,memberId) > 8)
            return false;
        Projects projects = Projects.builder()
                .projectId(projectId)
                .projectName(projectName)
                .projectVisibility(visibility)
                .commonUri(commonUri)
                .build();

        projectRepository.save(projects);
        return true;
    }

    /*
    *  0 : owner
    *  1 : editor
    *  2 : viewer
    *  10 : none
    * */
    public int checkAuthority(Long projectId, Long memberId){
        ProjectHistoryPK pk = makePK(projectId,memberId);
        Optional<ProjectHistories> projects = projectHistoryRepository.findById(pk);
        int value = 10;
        if(projects.isEmpty())
            return value;
        String authority = projects.get().getProjectRole();

        value = switch (authority) {
            case "OWNER" -> 0;
            case "EDITOR" -> 1;
            case "VIEWER" -> 2;
            default -> value;
        };
        return value;
    }

    public ProjectHistoryPK makePK(Long projectId, Long memberId){
        return  ProjectHistoryPK.builder()
                .projectId(projectId).memberId(memberId)
                .build();
    }

    public List<ProjectsListResponseDto> getProjectList(Long memberId) {
        List<ProjectsListResponseDto> projectsList = projectRepository.findMyList(memberId);
        return projectsList;
    }

    public List<?> getProjectAPIList(Long projectId) {
        return apiProjectRepository.findByProjectId(projectId);
//        List<ApiListResponseDto> resultDto = new ArrayList<>();

//        for (ApiProjects apiProject : apiProjectsList) {
//            List<ApiPath> paths = apiPathRepository.findByApiId
//            ApiListResponseDto responseDto = ApiListResponseDto.builder()
//                    .apiMethod(apiProject.getApiMethod())
//                    .apiUri(apiProject.getApiUriStr())
//                    .apiPathVariable()
//                    .apiRequest()
//                    .apiResponseIsArray(apiProject.isApiResponseIsArray())
//                    .apiResponseSize(apiProject.getApiResponseSize())
//                    .apiResponse()
//                    .build();
//            resultDto.add(responseDto);
//        }

//        return apiProjectsList;
    }
}