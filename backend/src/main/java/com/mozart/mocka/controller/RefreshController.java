package com.mozart.mocka.controller;

import com.mozart.mocka.dto.OauthDto;
import com.mozart.mocka.jwt.JWTUtil;
import com.mozart.mocka.service.RefreshService;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/refresh")
public class RefreshController {

    private final JWTUtil jwtUtil;
    private final RefreshService refreshService;

    @PostMapping
    public ResponseEntity<?> refresh(HttpServletRequest request, HttpServletResponse response) {
        String refresh = null;
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("refreshToken")) {
                refresh = cookie.getValue();
            }
        }

        if (refresh == null) {
            //response status code
            return new ResponseEntity<>("refresh token null", HttpStatus.BAD_REQUEST);
        }

        //expired check
        try {
            jwtUtil.isExpired(refresh);
        } catch (ExpiredJwtException e) {
            //response status code
            return new ResponseEntity<>("refresh token expired", HttpStatus.BAD_REQUEST);
        }

        // 토큰이 refresh인지 확인 (발급시 페이로드에 명시)
        String category = jwtUtil.getCategory(refresh);
        if (!category.equals("refresh")) {
            //response status code
            return new ResponseEntity<>("invalid refresh token", HttpStatus.BAD_REQUEST);
        }

        // db에 저장된 refresh 와 같은 토큰인지 확인
        String username = jwtUtil.getUsername(refresh);
        if (!refresh.equals(refreshService.getRefreshToken(username))) {
            //response status code
            return new ResponseEntity<>("invalid refresh token", HttpStatus.BAD_REQUEST);
        }

        OauthDto oauthDto = refreshService.createAccessToken(username);

        refreshService.deleteRefreshToken(username);

        //response
        response.addCookie(refreshService.createCookie("refreshToken", oauthDto.getRefresh()));
        refreshService.storeRefreshToken(username, oauthDto.getRefresh(), 604800000L);

        return new ResponseEntity<>(oauthDto.getLoginResponseDto(), HttpStatus.OK);
    }

}