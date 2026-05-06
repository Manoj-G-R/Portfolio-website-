package com.manojgr.portfolio.controller;

import com.manojgr.portfolio.model.ContactMessage;
import com.manojgr.portfolio.repository.ContactMessageRepository;
import jakarta.servlet.http.HttpServletRequest;
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
import java.util.Map;

/**
 * Contact Message REST Controller
 * Handles contact form submissions and inquiries
 */
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8000", "*"})
public class ContactController {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    /**
     * Submit a new contact message
     * POST /api/contact/submit
     */
    @PostMapping("/submit")
    public ResponseEntity<?> submitContactForm(
            @Valid @RequestBody ContactMessage contactMessage,
            HttpServletRequest request) {
        try {
            // Get client IP address
            String ipAddress = request.getRemoteAddr();
            contactMessage.setIpAddress(ipAddress);
            contactMessage.setCreatedAt(LocalDateTime.now());

            // Save to database
            ContactMessage savedMessage = contactMessageRepository.save(contactMessage);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Thank you for your message! I'll get back to you soon.");
            response.put("id", savedMessage.getId());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("success", "false");
            errorResponse.put("error", "Failed to submit message: " + e.getMessage());

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    /**
     * Get all contact messages (paginated)
     * GET /api/contact/all?page=0&size=10
     */
    @GetMapping("/all")
    public ResponseEntity<?> getAllMessages(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        try {
            Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
            Page<ContactMessage> messages = contactMessageRepository.findAll(pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("messages", messages.getContent());
            response.put("totalPages", messages.getTotalPages());
            response.put("totalMessages", messages.getTotalElements());
            response.put("currentPage", page);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error retrieving messages: " + e.getMessage());
        }
    }

    /**
     * Get unread messages count
     * GET /api/contact/unread-count
     */
    @GetMapping("/unread-count")
    public ResponseEntity<?> getUnreadCount() {
        try {
            long unreadCount = contactMessageRepository.countByIsReadFalse();

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("unreadCount", unreadCount);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error counting unread messages");
        }
    }

    /**
     * Get message by ID
     * GET /api/contact/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getMessageById(@PathVariable Long id) {
        try {
            return contactMessageRepository.findById(id)
                    .map(message -> {
                        message.setRead(true);
                        contactMessageRepository.save(message);
                        return ResponseEntity.ok(message);
                    })
                    .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                            .body("Message not found"));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error retrieving message");
        }
    }

    /**
     * Delete message by ID
     * DELETE /api/contact/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMessage(@PathVariable Long id) {
        try {
            if (contactMessageRepository.existsById(id)) {
                contactMessageRepository.deleteById(id);

                Map<String, Object> response = new HashMap<>();
                response.put("success", true);
                response.put("message", "Message deleted successfully");

                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Message not found");
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting message");
        }
    }

    /**
     * Search messages by keyword
     * GET /api/contact/search?keyword=hello
     */
    @GetMapping("/search")
    public ResponseEntity<?> searchMessages(@RequestParam String keyword) {
        try {
            var results = contactMessageRepository.findBySubjectContainingIgnoreCase(keyword);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("results", results);
            response.put("count", results.size());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error searching messages");
        }
    }

    /**
     * Health check endpoint
     * GET /api/contact/health
     */
    @GetMapping("/health")
    public ResponseEntity<?> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "OK");
        response.put("service", "Contact Service");
        response.put("timestamp", LocalDateTime.now().toString());
        return ResponseEntity.ok(response);
    }
}
