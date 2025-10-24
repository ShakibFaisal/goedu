GoEdu – Online Learning Platform
🌐 Live Demo

(https://goedu-61dbb.web.app/)

📌 Project Overview

GoEdu is an interactive learning platform where students can explore courses, view detailed course information, and book sessions with instructors. Students can create accounts, log in, view and update their profile, and securely book sessions. The platform leverages Firebase for authentication and real-time data management.

🛠 Features

Home Page

Browse popular courses with images, ratings, and prices.

“View Details” button to see full course information.

Interactive hero slider for featured courses.

Course Details Page

Shows full course information.

Students can book sessions using a simple booking form.

Accessible only to logged-in users.

Authentication

Student registration and login using email/password.

Google social login integration.

Password validation with proper error messages.

Profile Page

Students can view their personal details.

Update profile information including name and photo.

Extras

Responsive design for desktop, tablet, and mobile.

Subtle animations for better user experience.

Toast notifications for success/error feedback.

💻 Technology Stack

Frontend: React, Tailwind CSS, DaisyUI

Routing & State: React Router, React Context API

Authentication & Database: Firebase

UI/UX Enhancements:

Swiper.js (slider/carousel)

React Icons & Lucide React Icons

Animate.css for animations

React Hot Toast for notifications

📝 Project Structure
GoEdu/
├─ public/
├─ src/
│  ├─ components/       # Reusable UI components
│  ├─ pages/            # Home, Login, Register, Profile, Course Details
│  ├─ Provider/         # AuthProvider for Firebase auth
│  ├─ assets/           # Images & icons
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
├─ tailwind.config.js
└─ README.md

⚡ How to Run Locally

Clone the repository:

git clone <your-repo-url>


Install dependencies:

npm install


Configure Firebase in .env file with your project keys.

Start the development server:

npm start

📦 NPM Packages Used

react – Frontend library

tailwindcss – Utility-first CSS framework

daisyui – Tailwind CSS component library

swiper – Slider/carousel functionality

react-icons – Icon library

lucide-react – Additional SVG icons

react-hot-toast – Toast notifications

animate.css – CSS animations

🔑 Key Learning Outcomes

Building a responsive single-page application (SPA) using React and Tailwind.

Implementing authentication and session management with Firebase.

Integrating third-party UI libraries like Swiper.js and Animate.css.

Handling state management using React Context.

Designing an interactive and user-friendly course booking platform.