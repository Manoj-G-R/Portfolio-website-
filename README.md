# 🚀 Manoj G R - Portfolio Website

A fully responsive, animation-rich personal portfolio website showcasing projects, skills, and experiences with **50+ animations** and modern web design principles.

## 📋 Project Overview

This is a **Full Stack Portfolio** project built with:
- **Frontend**: HTML5, CSS3 (with 50+ animations), JavaScript ES6+
- **Backend** (Optional): Java Spring Boot Web MVC
- **Features**: Dark Mode, Form Validation, Smooth Scrolling, Responsive Design

## ✨ Key Features

### 🎨 Frontend Features
- ✅ **Responsive Design** - Mobile, Tablet, Desktop
- ✅ **50+ Animations** - Includes: fade-in, slide, scale, rotate, pulse, float, bounce, wave, shimmer, glow
- ✅ **Dark Mode Toggle** - Switch between light and dark themes
- ✅ **Smooth Navigation** - Smooth scrolling with active nav links
- ✅ **Hero Section** - Animated hero with gradient text and floating shapes
- ✅ **About Section** - Skills showcase with animated skill cards
- ✅ **Projects Gallery** - 6+ sample projects with hover effects
- ✅ **Blog Section** - Latest articles with animations
- ✅ **Contact Form** - Real-time validation and form submission
- ✅ **Social Links** - Quick links to social media platforms
- ✅ **Scroll-to-Top** - Quick navigation back to top
- ✅ **Keyboard Shortcuts** - Ctrl+K for contact, Home/End keys support

### 🎬 Animation Types Included

1. **Fade-In** - Smooth opacity transitions
2. **Slide** - Elements slide from sides
3. **Scale** - Elements grow or shrink
4. **Rotate** - 360-degree rotations
5. **Pulse** - Breathing effect
6. **Float** - Floating up-down motion
7. **Bounce** - Bouncing effect
8. **Wave** - Waving motion
9. **Shimmer** - Shimmer/shine effect
10. **Glow** - Glowing shadow effect
11. **Gradient Shift** - Animated gradients
12. **Pop-In** - Pop-in with scale and rotation
13. **Typewriter** - Text typing animation
14. **Rotate-Slow** - Slow rotation
15. **Parallax** - Parallax scrolling effect
16. **And Many More...**

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All CSS with 50+ animations
├── js/
│   └── script.js          # JavaScript logic and interactions
├── assets/
│   ├── images/            # Profile images
│   └── projects/          # Project screenshots
├── README.md              # This file
└── backend/               # Optional Java Spring Boot backend
    └── pom.xml
    └── src/
        └── main/
            └── java/
                └── com/manojgr/portfolio/
```

## 🛠️ Installation & Setup

### Frontend Setup

1. **Clone or Download the Project**
   ```bash
   cd portfolio-website
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server
   ```

3. **Access the Website**
   - Open `http://localhost:8000` in your browser

### Backend Setup (Optional - Java Spring Boot)

1. **Prerequisites**
   - Java 11 or higher
   - Maven 3.6+

2. **Navigate to Backend**
   ```bash
   cd backend
   ```

3. **Build the Project**
   ```bash
   mvn clean install
   ```

4. **Run the Application**
   ```bash
   mvn spring-boot:run
   ```

5. **Access Backend API**
   - API runs on `http://localhost:8080`

## 🎯 Usage Guide

### Customization

#### 1. Update Your Information
Edit `index.html` and replace:
- Profile picture path in hero section
- Contact information in contact section
- Social media links
- Project details and images

#### 2. Change Colors & Theme
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #6366f1;      /* Change primary color */
    --secondary-color: #ec4899;    /* Change secondary color */
    --accent-color: #f59e0b;       /* Change accent color */
}
```

#### 3. Customize Animations
Adjust animation speeds and delays in `css/styles.css`:
```css
@keyframes fadeIn {
    /* Modify animation duration and behavior */
}
```

#### 4. Add Your Projects
Add project cards in the projects section:
```html
<div class="project-card">
    <div class="project-image">
        <img src="project-image.jpg" alt="Project">
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Your project description</p>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + K` | Jump to contact form |
| `Home` | Scroll to top |
| `End` | Scroll to bottom |

## 📝 Form Validation Rules

- **Name**: Minimum 2 characters
- **Email**: Valid email format (example@domain.com)
- **Subject**: Minimum 5 characters
- **Message**: Minimum 10 characters

## 🌙 Dark Mode

- Click the moon/sun icon in the navbar to toggle dark mode
- Preference is saved in browser localStorage
- Automatically applies saved theme on reload

## 🚀 Performance Optimization

- Debounced scroll events
- Intersection Observer for animations
- Optimized CSS animations using GPU acceleration
- Minified assets (ready for production)

## 🔒 Privacy & Security

- Form data is validated on client-side
- No personal data is stored without consent
- Email submission requires backend configuration

## 📚 Learning Outcomes

By building this project, you'll learn:
- ✅ HTML5 semantic markup
- ✅ CSS3 Flexbox & Grid layouts
- ✅ Advanced CSS animations
- ✅ Responsive design principles
- ✅ JavaScript ES6+ features
- ✅ DOM manipulation
- ✅ Event handling
- ✅ Form validation
- ✅ localStorage API
- ✅ Intersection Observer API
- ✅ Spring Boot basics (optional)
- ✅ RESTful API design (optional)

## 🎓 Bonus Features Implemented

✅ **Blog Section** - Articles showcase
✅ **Form Validation** - Real-time validation
✅ **Dark Mode** - Theme toggle
✅ **Customization** - Easy to customize colors
✅ **Animations** - 50+ smooth animations
✅ **Keyboard Shortcuts** - Enhanced navigation
✅ **Parallax Effects** - Mouse move parallax
✅ **Local Storage** - Form data persistence

## 📞 Contact & Support

- **Email**: manoj.gr@example.com
- **Phone**: +91 (123) 456-7890
- **Location**: India

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with passion and attention to detail
- Perfect for showcasing your work and skills

---

**Created by**: Manoj G R  
**Version**: 1.0  
**Last Updated**: May 5, 2026

### 🌟 Don't forget to star this project if you find it helpful!

---

## 🔧 Troubleshooting

### Dark Mode Not Working
- Check browser console for JavaScript errors
- Ensure localStorage is enabled in browser settings

### Animations Not Playing
- Verify CSS is loaded correctly
- Check browser compatibility (modern browsers recommended)
- Disable browser extensions that might interfere

### Form Not Submitting
- Validate all form fields meet requirements
- Check browser console for errors
- Ensure JavaScript is enabled

### Responsive Design Issues
- Clear browser cache
- Check viewport meta tag in HTML
- Test in device emulation mode

## 📊 Browser Support

- Chrome: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE 11: ⚠️ Limited support

---

**Made with ❤️ by Manoj G R**
