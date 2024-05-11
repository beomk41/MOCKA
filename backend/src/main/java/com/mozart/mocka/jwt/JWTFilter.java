package com.mozart.mocka.jwt;

import com.mozart.mocka.domain.CustomUserDetails;
import com.mozart.mocka.domain.Members;
import com.mozart.mocka.exception.CustomException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Optional;


@Slf4j
public class JWTFilter extends OncePerRequestFilter {
    private final JWTUtil jwtUtil;
    public static final String AUTHORIZATION_HEADER="Authorization";
    public JWTFilter(JWTUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.debug("class:==================doFilterInternal=====================");
//        String authorization = request.getHeader("Authorization");
//
//        //Authorization 헤더 검증
//        if (authorization == null || !authorization.startsWith("Bearer ")) {
//            filterChain.doFilter(request, response);
//            //조건이 해당되면 메소드 종료 (필수)
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//            return;
//        }

        Optional<String> accessToken=resolveToken(request);
    if (accessToken.isPresent()){
        log.debug("ACCESSTOKEN VALID CHECK");
        try {
            jwtUtil.checkToken(accessToken.get());
            log.debug("ACCESSTOKEN 유효함");

            String name = jwtUtil.getUsername(accessToken.get());
            String role = jwtUtil.getRole(accessToken.get());
            String profile = jwtUtil.getProfile(accessToken.get());
            String providerId = jwtUtil.getProviderId(accessToken.get());

            //userEntity를 생성하여 값 set
            Members userEntity = Members.builder()
                    .memberNickname(name)
                    .memberProfile(profile)
                    .memberProviderId(providerId)
                    .memberRole(role)
                    .build();

            log.debug("Member from token:  "+userEntity);

            CustomUserDetails customUserDetails = new CustomUserDetails(userEntity);
            Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());
            SecurityContextHolder.clearContext();
            SecurityContextHolder.getContext().setAuthentication(authToken);
        }catch(CustomException ce) {
            log.debug("JWT가 유효하지 않음");
            log.debug(ce.getMsg());
            request.setAttribute("exception", ce);
        }
    }

//        logger.info("authorization now");
//        //Bearer 부분 제거 후 순수 토큰만 획득
//        String token = authorization.split(" ")[1];
//
//        //토큰 소멸 시간 검증
//        try {
//            jwtUtil.isExpired(token);
//        } catch (ExpiredJwtException e) {
//            //response body
//            PrintWriter writer = response.getWriter();
//            writer.print("access token expired");
//            //response status code
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//            return;
//        } catch (MalformedJwtException e) {
//            PrintWriter writer = response.getWriter();
//            writer.print("Invalid JWT format");
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//        } catch (Exception e) {
//            // 기타 예외 처리
//            PrintWriter writer = response.getWriter();
//            writer.print("Authentication error");
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//        }
//
//        // 토큰이 access인지 확인 (발급시 페이로드에 명시)
//        String category = jwtUtil.getCategory(token);
//
//        if (!category.equals("access")) {
//            //response body
//            PrintWriter writer = response.getWriter();
//            writer.print("invalid access token");
//
//            //response status code
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//            return;
//        }
//
//        //토큰에서 username, role 획득
//        String name = jwtUtil.getUsername(token);
////        System.out.println(name);
//        logger.info("token name : " + name);
//        String role = jwtUtil.getRole(token);
////        System.out.println(role);
//        String profile = jwtUtil.getProfile(token);
//        logger.info("token profile : " + profile);
//
//        String providerId = jwtUtil.getProviderId(token);
//
//        //userEntity를 생성하여 값 set
//        Members userEntity = Members.builder()
//                .memberNickname(name)
//                .memberProfile(profile)
//                .memberProviderId(providerId)
//                .memberRole(role)
//                .build();
//
//        CustomUserDetails customUserDetails = new CustomUserDetails(userEntity);
//
//        Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());
//        SecurityContextHolder.clearContext();
//        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);
    }
    private Optional<String> resolveToken(HttpServletRequest request){
        String authToken=request.getHeader(AUTHORIZATION_HEADER);
        if(StringUtils.hasText(authToken) && authToken.startsWith("Bearer ")) {
            return Optional.of(authToken.replace("Bearer ",""));
        }else {
            authToken=request.getParameter(AUTHORIZATION_HEADER);
            if(StringUtils.hasText(authToken) && authToken.startsWith("Bearer ")) {
                return Optional.of(authToken);
            }
        }
        return Optional.empty();
    }

}
