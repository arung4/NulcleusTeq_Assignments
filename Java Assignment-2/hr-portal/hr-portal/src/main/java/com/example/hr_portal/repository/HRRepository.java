package com.example.hr_portal.repository;

import com.example.hr_portal.models.HR;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HRRepository extends JpaRepository<HR, Long> {
    Optional<HR> findByEmail(String email);
}
