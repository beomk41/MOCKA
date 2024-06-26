package com.mozart.mocka.repository;

import com.mozart.mocka.domain.ApiRequest;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ApiRequestRepository extends JpaRepository<ApiRequest, Long> {

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO api_request (api_id, key, type, data, faker_locale, faker_major, faker_sub, array_list) " +
            " VALUES (:id, :key, :type, CAST(:value AS jsonb), :locale, :major, :sub, :array)", nativeQuery = true)
    void create(Long id, String key, String type, String value, String locale, String major, String sub, boolean array);


    void deleteByApiProject_ApiId(Long apiId);

    List<ApiRequest> findByApiProject_ApiId(Long apiId);
}
