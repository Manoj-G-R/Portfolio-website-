package com.manojgr.portfolio.controller;

import com.manojgr.portfolio.model.Project;
import com.manojgr.portfolio.repository.ProjectRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Project REST Controller
 * Handles portfolio projects operations
 */
@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8000", "*"})
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    /**
     * Get all featured projects
     * GET /api/projects/featured
     */
    @GetMapping("/featured")
    public ResponseEntity<?> getFeaturedProjects() {
        try {
            List<Project> projects = projectRepository.findByIsFeaturedTrue();

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("projects", projects);
            response.put("count", projects.size());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error retrieving featured projects");
        }
    }

    /**
     * Get all projects with pagination
     * GET /api/projects?page=0&size=10
     */
    @GetMapping
    public ResponseEntity<?> getAllProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        try {
            Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
            Page<Project> projects = projectRepository.findAll(pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("projects", projects.getContent());
            response.put("totalPages", projects.getTotalPages());
            response.put("totalProjects", projects.getTotalElements());
            response.put("currentPage", page);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error retrieving projects");
        }
    }

    /**
     * Get project by ID
     * GET /api/projects/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getProjectById(@PathVariable Long id) {
        try {
            return projectRepository.findById(id)
                    .map(ResponseEntity::ok)
                    .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                            .body("Project not found"));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error retrieving project");
        }
    }

    /**
     * Create a new project
     * POST /api/projects
     */
    @PostMapping
    public ResponseEntity<?> createProject(@Valid @RequestBody Project project) {
        try {
            project.setCreatedAt(LocalDateTime.now());
            project.setUpdatedAt(LocalDateTime.now());

            Project savedProject = projectRepository.save(project);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Project created successfully");
            response.put("project", savedProject);

            return ResponseEntity.status(HttpStatus.CREATED).body(response);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error creating project: " + e.getMessage());
        }
    }

    /**
     * Update project
     * PUT /api/projects/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProject(@PathVariable Long id, @Valid @RequestBody Project projectDetails) {
        try {
            return projectRepository.findById(id)
                    .map(project -> {
                        project.setTitle(projectDetails.getTitle());
                        project.setDescription(projectDetails.getDescription());
                        project.setImageUrl(projectDetails.getImageUrl());
                        project.setProjectUrl(projectDetails.getProjectUrl());
                        project.setGithubUrl(projectDetails.getGithubUrl());
                        project.setTechnologies(projectDetails.getTechnologies());
                        project.setFeatured(projectDetails.isFeatured());
                        project.setUpdatedAt(LocalDateTime.now());

                        Project updatedProject = projectRepository.save(project);

                        Map<String, Object> response = new HashMap<>();
                        response.put("success", true);
                        response.put("message", "Project updated successfully");
                        response.put("project", updatedProject);

                        return ResponseEntity.ok(response);
                    })
                    .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                            .body("Project not found"));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error updating project");
        }
    }

    /**
     * Delete project
     * DELETE /api/projects/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable Long id) {
        try {
            if (projectRepository.existsById(id)) {
                projectRepository.deleteById(id);

                Map<String, Object> response = new HashMap<>();
                response.put("success", true);
                response.put("message", "Project deleted successfully");

                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Project not found");
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting project");
        }
    }

    /**
     * Search projects by technology
     * GET /api/projects/search/tech?tech=React
     */
    @GetMapping("/search/tech")
    public ResponseEntity<?> searchByTechnology(@RequestParam String tech) {
        try {
            List<Project> projects = projectRepository.findByTechnologiesContainingIgnoreCase(tech);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("projects", projects);
            response.put("count", projects.size());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error searching projects");
        }
    }

    /**
     * Get total project count
     * GET /api/projects/count
     */
    @GetMapping("/stats/count")
    public ResponseEntity<?> getProjectCount() {
        try {
            long count = projectRepository.count();

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("totalProjects", count);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error retrieving count");
        }
    }

    /**
     * Health check endpoint
     * GET /api/projects/health
     */
    @GetMapping("/health")
    public ResponseEntity<?> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "OK");
        response.put("service", "Project Service");
        response.put("timestamp", LocalDateTime.now().toString());
        return ResponseEntity.ok(response);
    }
}
