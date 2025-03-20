package com.example.hr_portal.repository;

import com.example.hr_portal.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    
} 