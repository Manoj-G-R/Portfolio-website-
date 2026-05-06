# 🎯 QUICK START GUIDE - Portfolio Website

Complete setup guide for Manoj G R's animation-rich portfolio website with optional Java Spring Boot backend.

## 🚀 Quick Setup (5 Minutes)

### Step 1: Frontend Setup
```bash
# Navigate to project directory
cd portfolio-website

# Open in your browser
# Option A: Direct file (no server needed for basic features)
open index.html

# Option B: Using Python (recommended)
python -m http.server 8000
# Access: http://localhost:8000

# Option C: Using Node.js
npx http-server
# Access: http://localhost:8080
```

### Step 2: Backend Setup (Optional)
```bash
# Navigate to backend
cd backend

# Install dependencies and build
mvn clean install

# Run the application
mvn spring-boot:run

# Access API: http://localhost:8080
# Health Check: http://localhost:8080/api/contact/health
```

---

## 📋 What You Get

### ✨ Frontend Features (50+ Animations)
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Dark Mode Toggle
- ✅ Smooth Animations & Transitions
- ✅ Contact Form with Validation
- ✅ Project Showcase
- ✅ Blog Section
- ✅ Social Media Links
- ✅ Keyboard Shortcuts
- ✅ Parallax Effects
- ✅ Local Storage Integration

### 🔧 Backend Features (Optional)
- ✅ REST APIs for Contact Submissions
- ✅ Project Management
- ✅ Database Persistence
- ✅ Input Validation
- ✅ Error Handling
- ✅ CORS Configuration
- ✅ H2/MySQL Database Support

---

## 🎨 Customization

### 1. Update Your Information
Edit `index.html`:
- Change hero text from "Manoj G R" to your name
- Update profile picture
- Add your projects
- Update contact information
- Add social media links

### 2. Change Colors
Edit `css/styles.css`:
```css
:root {
    --primary-color: #6366f1;      /* Your primary color */
    --secondary-color: #ec4899;    /* Your secondary color */
    --accent-color: #f59e0b;       /* Your accent color */
}
```

### 3. Add Your Projects
Add to projects section in `index.html`:
```html
<div class="project-card">
    <div class="project-image">
        <div class="placeholder-img">
            <i class="fas fa-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Your project description</p>
        <div class="project-tags">
            <span>Technology1</span>
            <span>Technology2</span>
        </div>
    </div>
</div>
```

### 4. Connect Backend API
In `js/script.js`, update API endpoints:
```javascript
const API_URL = 'http://localhost:8080/api';

// When form is submitted
fetch(`${API_URL}/contact/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

---

## 📂 File Structure

```
portfolio-website/
├── index.html                    # Main page
├── css/
│   └── styles.css               # All styles & animations
├── js/
│   └── script.js                # Interactivity & animations
├── assets/
│   ├── images/                  # Your images
│   └── projects/                # Project screenshots
├── backend/                     # Optional Java backend
│   ├── pom.xml
│   ├── src/main/java/...
│   └── README.md
├── README.md                    # Documentation
└── QUICK_START.md              # This file
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Ctrl/Cmd + K` | Jump to contact form |
| `Home` | Scroll to top |
| `End` | Scroll to bottom |

---

## 🌙 Dark Mode

Click the moon/sun icon in the navbar to toggle dark/light mode. Your preference is saved automatically.

---

## ✅ Features Checklist

- [x] Responsive Design
- [x] 50+ Animations
- [x] Dark Mode
- [x] Form Validation
- [x] Contact Form
- [x] Project Showcase (6 projects)
- [x] Blog Section (3 articles)
- [x] Social Links
- [x] Smooth Navigation
- [x] Parallax Effects
- [x] Scroll-to-Top Button
- [x] Keyboard Shortcuts
- [x] Local Storage
- [x] Backend API (Optional)
- [x] MySQL Support (Optional)

---

## 🎬 50+ Animations Included

1. Fade-In
2. Slide (Left, Right, Up, Down)
3. Scale & Pop-In
4. Rotate & Spin
5. Pulse & Breathing
6. Float & Bounce
7. Wave Motion
8. Shimmer & Glow
9. Gradient Animation
10. Typewriter Effect
11. Parallax Scrolling
12. Hover Effects
13. And 38+ more...

---

## 🛠️ Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE 11 | ⚠️ Limited |

---

## 📝 Form Validation Rules

```
Name: Minimum 2 characters
Email: Valid email format
Subject: Minimum 5 characters
Message: Minimum 10 characters
```

---

## 🚀 Deployment

### Frontend - GitHub Pages
```bash
# 1. Create GitHub repository
# 2. Push your code
# 3. Go to Settings > Pages
# 4. Select branch and save
# Access your site at: yourusername.github.io/portfolio-website
```

### Backend - Heroku (Free)
```bash
# 1. Install Heroku CLI
# 2. Create Heroku app
heroku create your-portfolio-backend

# 3. Deploy
git push heroku main

# 4. Access API at https://your-portfolio-backend.herokuapp.com
```

### Self-Hosted
```bash
# 1. VPS with Linux/Windows
# 2. Install Java & Maven
# 3. Run: mvn spring-boot:run
# 4. Configure domain/SSL
```

---

## 🔧 Troubleshooting

### Animations Not Playing?
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure CSS is loaded (check browser console)
- Try different browser

### Contact Form Not Working?
- Ensure JavaScript is enabled
- Check browser console for errors
- Validate all fields are filled

### Dark Mode Not Saving?
- Check if localStorage is enabled
- Try incognito/private window
- Clear browser data

### Backend API Connection Failed?
- Verify backend is running: `mvn spring-boot:run`
- Check port 8080 is not in use
- Verify CORS configuration
- Check API URL in JavaScript

---

## 📚 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Spring Boot Docs](https://spring.io/projects/spring-boot)
- [REST API Best Practices](https://restfulapi.net/)

---

## 💡 Tips & Tricks

1. **Customize Animation Speeds**
   - Edit CSS: `@keyframes` duration
   - Default is 0.6s, try 0.3s for faster

2. **Add More Projects**
   - Copy project-card div
   - Update content and image
   - Animations apply automatically

3. **Change Theme Colors**
   - Update CSS variables in `:root`
   - All elements will auto-update

4. **Add New Sections**
   - Copy existing section HTML
   - Update class names and content
   - Add corresponding CSS

5. **Connect Database**
   - Use MySQL in production
   - Update `application.properties`
   - Run `mvn clean install`

---

## 🎓 Learning Outcomes

After completing this project, you'll understand:

✅ HTML5 Semantic Markup  
✅ CSS3 Flexbox & Grid  
✅ Advanced CSS Animations  
✅ Responsive Web Design  
✅ JavaScript ES6+ Features  
✅ DOM Manipulation  
✅ Form Validation  
✅ Event Handling  
✅ Local Storage API  
✅ Intersection Observer  
✅ REST APIs  
✅ Spring Boot Development  
✅ Database Design  
✅ Web Server Configuration  

---

## 📞 Support & Contact

- **Email**: manoj.gr@example.com
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]
- **Portfolio**: [Your Portfolio URL]

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🙏 Credits

- **Developer**: Manoj G R
- **Last Updated**: May 5, 2026
- **Version**: 1.0.0
- **Status**: ✅ Production Ready

---

## 🌟 Next Steps

1. ✅ Customize with your information
2. ✅ Add your projects
3. ✅ Test on mobile devices
4. ✅ Deploy to production
5. ✅ Share with others
6. ✅ Keep updating your projects

---

**Made with ❤️ and lots of animations by Manoj G R**

### 🚀 You're all set! Happy coding! 🚀
