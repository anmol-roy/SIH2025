# STEMifyX - Gamified Learning Platform

A comprehensive educational platform that makes STEM education engaging and accessible through gamification, role-based dashboards, and interactive learning experiences.

## 🚀 Features

### Core Functionality
- **Multi-role Authentication System** - Support for Students, Teachers, Parents, and Administrators
- **Firebase Integration** - Secure authentication and real-time data management
- **Gamified Learning Experience** - XP points, levels, badges, and learning streaks
- **Responsive Design** - Mobile-first approach with optimized UI/UX
- **Multi-language Support** - English, Hindi, and Odia language options

### Educational Content
- **Primary Education** (Classes 6-8) - Foundation building with interactive content
- **Secondary Education** (Classes 9-10) - Advanced concepts and exam preparation
- **Senior Secondary** (Classes 11-12) - Comprehensive preparation for higher studies
- **Career Guidance** - AI-powered career assessment and pathway exploration
- **Parent Guidance** - Resources and tools for parent involvement
- **NGO Integration** - Community outreach and support programs

### Dashboard Features
- **Student Dashboard** - Progress tracking, quest management, skill development
- **Teacher Dashboard** - Class management, student progress monitoring, content creation
- **Parent Dashboard** - Child progress monitoring, communication tools
- **Admin Dashboard** - Platform management, analytics, user administration

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS with Glass Morphism effects
- **Backend**: Firebase (Authentication, Firestore Database)
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Poppins, Inter, Noto Sans Devanagari)

## 📁 Project Structure

```
├── assets/                     # Static assets
│   ├── images/                # Image resources
│   └── illustration/          # SVG illustrations
├── carrierGuidance/           # Career guidance module
├── dashboard/                 # Role-based dashboards
│   ├── admindashboard/       # Administrator interface
│   ├── parentdashboard/      # Parent interface
│   ├── studentdashboard/     # Student interface
│   └── teacherdashboard/     # Teacher interface
├── NGO/                      # NGO integration module
├── parentGuidance/           # Parent guidance resources
├── primary/                  # Primary education (Classes 6-8)
│   ├── class6/
│   ├── class7/
│   └── class8/
├── secondary/                # Secondary education (Classes 9-10)
│   ├── class8/
│   └── class9/
├── seniorSecondary/          # Senior secondary (Classes 10-12)
│   ├── class10/
│   └── class11/
├── firebase-config.js        # Firebase configuration
├── header.html              # Reusable header component
├── index.html               # Main landing page
├── login.html               # Authentication page
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Firebase services
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stemifyx-platform
   ```

2. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password and Google Sign-in)
   - Create a Firestore database
   - Update `firebase-config.js` with your Firebase configuration

3. **Local Development**
   ```bash
   # Using Python (if available)
   python -m http.server 8000
   
   # Using Node.js (if available)
   npx serve .
   
   # Or simply open index.html in your browser
   ```

4. **Access the Application**
   - Open `http://localhost:8000` in your browser
   - Or directly open `index.html` for basic functionality

## 🎯 Usage

### For Students
1. Register/Login with student role
2. Access age-appropriate learning content
3. Complete quests and earn XP points
4. Track learning progress and achievements
5. Explore career guidance resources

### For Teachers
1. Register/Login with teacher role
2. Manage classes and student progress
3. Create and assign learning content
4. Monitor student performance analytics
5. Communicate with parents and students

### For Parents
1. Register/Login with parent role
2. Monitor child's learning progress
3. Access parenting guidance resources
4. Communicate with teachers
5. Support child's educational journey

### For Administrators
1. Login with admin credentials
2. Manage platform users and content
3. View comprehensive analytics
4. Configure platform settings
5. Oversee NGO partnerships

## 🌟 Key Features Explained

### Gamification System
- **XP Points**: Earned through completing lessons and activities
- **Levels**: Progressive advancement based on accumulated XP
- **Badges**: Achievement recognition for specific milestones
- **Streaks**: Daily learning consistency rewards
- **Leaderboards**: Friendly competition among peers

### Career Guidance
- AI-powered career assessment quiz
- 500+ career pathway exploration
- Salary prediction tools
- Skill gap analysis
- Industry trend insights
- Higher education guidance

### Multi-language Support
- English (Primary)
- Hindi (हिंदी)
- Odia (ଓଡ଼ିଆ)
- Easy language switching interface

## 🔧 Configuration

### Firebase Configuration
Update `firebase-config.js` with your Firebase project details:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### Authentication Setup
- Enable Email/Password authentication
- Enable Google Sign-in provider
- Configure authorized domains
- Set up Firestore security rules

## 📱 Mobile Responsiveness

The platform is designed with a mobile-first approach:
- Responsive grid layouts
- Touch-friendly interface elements
- Mobile carousel components
- Bottom navigation for mobile devices
- Optimized typography and spacing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Firebase for backend services
- Tailwind CSS for styling framework
- Font Awesome for icons
- Google Fonts for typography
- All contributors and educators who made this project possible

## 📞 Support

For support, email royanmol112@gmail.com or create an issue in the repository.

---

**STEMifyX** - Empowering the next generation through gamified STEM education 🚀
