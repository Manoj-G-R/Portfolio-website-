# 🚀 Portfolio Backend - Spring Boot

Comprehensive backend API for the Manoj G R Portfolio website built with **Spring Boot 3.1.5** and **Java 11+**.

## 📋 Overview

This backend provides RESTful APIs for managing:
- ✅ Contact form submissions
- ✅ Portfolio projects
- ✅ Blog articles
- ✅ Admin operations

## 🛠️ Tech Stack

- **Java**: 11+
- **Spring Boot**: 3.1.5
- **Spring Data JPA**: Data persistence
- **Spring Validation**: Input validation
- **Database**: H2 (Dev/Test), MySQL (Production)
- **Build Tool**: Maven 3.6+
- **REST API**: RESTful design

## 📁 Project Structure

```
backend/
├── pom.xml                          # Maven configuration
├── src/
│   ├── main/
│   │   ├── java/com/manojgr/portfolio/
│   │   │   ├── PortfolioApplication.java    # Main application
│   │   │   ├── controller/
│   │   │   │   ├── ContactController.java   # Contact APIs
│   │   │   │   └── ProjectController.java   # Project APIs
│   │   │   ├── model/
│   │   │   │   ├── ContactMessage.java      # Contact entity
│   │   │   │   └── Project.java             # Project entity
│   │   │   └── repository/
│   │   │       ├── ContactMessageRepository.java
│   │   │       └── ProjectRepository.java
│   │   └── resources/
│   │       └── application.properties       # Configuration
│   └── test/java/                   # Unit tests
└── README.md
```

## 🚀 Getting Started

### Prerequisites

```bash
# Check Java version
java -version  # Should be 11 or higher

# Check Maven version
mvn -version   # Should be 3.6 or higher
```

### Installation

1. **Navigate to Backend Directory**
   ```bash
   cd backend
   ```

2. **Build the Project**
   ```bash
   mvn clean install
   ```

3. **Run the Application**
   ```bash
   mvn spring-boot:run
   ```

4. **Access the Application**
   - API Base URL: `http://localhost:8080`
   - H2 Console: `http://localhost:8080/h2-console`
   - Health Check: `http://localhost:8080/api/contact/health`

## 📚 API Endpoints

### Contact APIs

#### Submit Contact Form
```http
POST /api/contact/submit
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a potential project."
}
```

**Response (Success - 200)**
```json
{
    "success": true,
    "message": "Thank you for your message! I'll get back to you soon.",
    "id": 1
}
```

#### Get All Contact Messages
```http
GET /api/contact/all?page=0&size=10
```

**Response**
```json
{
    "success": true,
    "messages": [...],
    "totalPages": 5,
    "totalMessages": 45,
    "currentPage": 0
}
```

#### Get Unread Message Count
```http
GET /api/contact/unread-count
```

**Response**
```json
{
    "success": true,
    "unreadCount": 12
}
```

#### Get Message by ID
```http
GET /api/contact/{id}
```

#### Delete Message
```http
DELETE /api/contact/{id}
```

#### Search Messages
```http
GET /api/contact/search?keyword=hello
```

---

### Project APIs

#### Get Featured Projects
```http
GET /api/projects/featured
```

**Response**
```json
{
    "success": true,
    "projects": [
        {
            "id": 1,
            "title": "E-Commerce Platform",
            "description": "...",
            "technologies": "React, Node.js, MongoDB",
            "projectUrl": "https://...",
            "githubUrl": "https://...",
            "isFeatured": true
        }
    ],
    "count": 3
}
```

#### Get All Projects
```http
GET /api/projects?page=0&size=10
```

#### Get Project by ID
```http
GET /api/projects/{id}
```

#### Create Project
```http
POST /api/projects
Content-Type: application/json

{
    "title": "New Project",
    "description": "Project description here",
    "imageUrl": "url-to-image",
    "projectUrl": "https://project-url.com",
    "githubUrl": "https://github.com/project",
    "technologies": "React, Spring Boot, MySQL",
    "isFeatured": true
}
```

#### Update Project
```http
PUT /api/projects/{id}
Content-Type: application/json

{
    "title": "Updated Project",
    ...
}
```

#### Delete Project
```http
DELETE /api/projects/{id}
```

#### Search by Technology
```http
GET /api/projects/search/tech?tech=React
```

#### Get Project Count
```http
GET /api/projects/stats/count
```

---

## 🔧 Configuration

### Environment Variables

Edit `application.properties`:

```properties
# Server Port
server.port=8080

# Database Configuration
spring.datasource.url=jdbc:h2:mem:portfoliodb
spring.datasource.username=sa

# Hibernate Configuration
spring.jpa.hibernate.ddl-auto=create-drop
```

### Production Database (MySQL)

Uncomment MySQL configuration in `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update
```

## 📊 Database Schema

### contact_messages Table
```sql
CREATE TABLE contact_messages (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    ip_address VARCHAR(45)
);
```

### projects Table
```sql
CREATE TABLE projects (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(500),
    project_url VARCHAR(500),
    github_url VARCHAR(500),
    technologies TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);
```

## 🔐 Security Best Practices

1. **Input Validation**
   - All inputs are validated using `@Valid` annotations
   - Custom validation rules in entity classes

2. **CORS Configuration**
   - Configured to allow frontend requests
   - Edit `PortfolioApplication.java` to restrict origins

3. **Exception Handling**
   - Global exception handler for error responses
   - Proper HTTP status codes

4. **Environment Variables**
   - Store sensitive data in environment variables
   - Never commit credentials to version control

## 🧪 Testing

```bash
# Run all tests
mvn test

# Run specific test
mvn test -Dtest=ContactControllerTest

# Run tests with coverage
mvn test jacoco:report
```

## 📝 Logging

Enable debug logging in `application.properties`:

```properties
logging.level.com.manojgr.portfolio=DEBUG
logging.level.org.hibernate.SQL=DEBUG
```

View logs:
```bash
# In the console where Spring Boot is running
tail -f logs/application.log
```

## 🚀 Deployment

### Build WAR for Deployment
```bash
# Modify pom.xml packaging to <packaging>war</packaging>
mvn clean package

# Deploy to application server (Tomcat, JBoss, etc.)
```

### Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM openjdk:11-jre-slim
COPY target/portfolio-backend-1.0.0.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

Build and run:
```bash
docker build -t portfolio-backend .
docker run -p 8080:8080 portfolio-backend
```

## 🤝 Connecting Frontend

Update frontend API base URL in `js/script.js`:

```javascript
const API_BASE_URL = 'http://localhost:8080/api';

// Example: Submit contact form
fetch(`${API_BASE_URL}/contact/submit`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📖 Additional Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA Guide](https://spring.io/projects/spring-data-jpa)
- [RESTful Web Services](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## 🐛 Troubleshooting

### Port 8080 Already in Use
```bash
# Linux/Mac: Find process and kill
lsof -i :8080
kill -9 <PID>

# Windows: Find and kill process
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

### Database Connection Issues
- Verify database is running
- Check credentials in `application.properties`
- Ensure database driver is in classpath (in pom.xml)

### CORS Issues
- Check CORS configuration in `PortfolioApplication.java`
- Verify frontend URL is in allowed origins

## 📞 Support

For issues and questions:
- Create GitHub issue
- Email: manoj.gr@example.com
- Check logs: `mvn spring-boot:run`

## 📄 License

Open source and available for personal and commercial use.

---

**Created by**: Manoj G R  
**Version**: 1.0.0  
**Last Updated**: May 5, 2026

### 🌟 Don't forget to star this project if you find it helpful!
