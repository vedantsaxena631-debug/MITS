# MITS College Management System - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Option 1: Using Docker (Recommended)

```bash
# 1. Navigate to project directory
cd mits-college-system

# 2. Start all services
docker-compose up -d

# 3. Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000/api
# MongoDB: localhost:27017
```

### Option 2: Manual Setup

#### Backend Setup
```bash
cd backend

# Copy environment file
cp .env.example .env

# Install dependencies
npm install

# Start server
npm run dev
# Server runs on http://localhost:5000
```

#### Frontend Setup (New Terminal)
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
# App opens at http://localhost:3000
```

#### Mobile Setup (New Terminal)
```bash
cd mobile

# Install dependencies
npm install

# Start Expo
expo start

# Press 'a' for Android or 'i' for iOS
```

## 📱 Login with Demo Credentials

### Student Account
- **Email**: student@mits.ac.in
- **Password**: password123

### Faculty Account
- **Email**: faculty@mits.ac.in
- **Password**: password123

### Admin Account
- **Email**: admin@mits.ac.in
- **Password**: password123

## 📁 Project Structure

```
mits-college-system/
├── backend/          # Node.js + Express API
├── frontend/         # React web app
├── mobile/           # React Native app
├── database/         # MongoDB schemas
├── docs/             # Documentation
└── docker-compose.yml
```

## 🔧 Environment Setup

### Backend .env
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mits_college
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### Frontend .env
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📚 Key Features

### Student Dashboard
- View attendance and grades
- Submit assignments
- Check timetable
- Browse library books
- Register for events
- File grievances

### Faculty Dashboard
- Mark attendance
- Create assignments
- Upload results
- Manage subjects
- View student submissions

### Admin Dashboard
- User management
- Analytics and reports
- System monitoring
- Payment tracking
- Event management

## 🌐 API Endpoints

### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/verify
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
```

### Academics
```
GET    /api/academics/subjects
GET    /api/academics/subjects/:branch/:semester
GET    /api/academics/timetable/:branch/:semester/:section
POST   /api/academics/subjects/:id/study-material
```

### Attendance
```
POST   /api/attendance/mark
GET    /api/attendance/student/:studentId
GET    /api/attendance/percentage/:studentId/:subjectId
```

### Results
```
GET    /api/results/student/:studentId
GET    /api/results/sgpa/:studentId/:semester
GET    /api/results/cgpa/:studentId
POST   /api/results
```

### Assignments
```
POST   /api/assignments
GET    /api/assignments/subject/:subjectId
POST   /api/assignments/:assignmentId/submit
GET    /api/assignments/:assignmentId/submissions
```

### Events
```
GET    /api/events
POST   /api/events/:eventId/register
GET    /api/events/category/:category
```

### Library
```
GET    /api/library/books
GET    /api/library/books/search/:query
POST   /api/library/issue
POST   /api/library/return/:issueId
```

### Chat
```
POST   /api/chat/send
GET    /api/chat/conversation/:userId1/:userId2
GET    /api/chat/inbox/:userId
```

### Grievance
```
POST   /api/grievance
GET    /api/grievance/student/:studentId
PUT    /api/grievance/:id/status
```

### Payments
```
POST   /api/payments
GET    /api/payments/student/:studentId
POST   /api/payments/:paymentId/process
```

### Admin
```
GET    /api/admin/dashboard
GET    /api/admin/users
GET    /api/admin/analytics
```

## 🛠️ Common Commands

### Backend
```bash
cd backend

# Development
npm run dev

# Production
npm start

# Run tests
npm test

# Seed database
npm run seed
```

### Frontend
```bash
cd frontend

# Development
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject (one-way operation)
npm run eject
```

### Mobile
```bash
cd mobile

# Start Expo
expo start

# Build Android APK
expo build:android

# Build iOS IPA
expo build:ios

# Eject to bare React Native
expo eject
```

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check if MongoDB is running
mongod --version

# Start MongoDB
mongod

# Or use Docker
docker run -d -p 27017:27017 mongo
```

### Port Already in Use
```bash
# Find process on port 5000
lsof -i :5000

# Kill process
kill -9 <PID>
```

### Dependencies Issue
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS Error
- Check `FRONTEND_URL` in backend `.env`
- Ensure it matches your frontend URL

## 📖 Documentation

- **API Documentation**: See `docs/API.md`
- **Setup Guide**: See `docs/SETUP.md`
- **Database Schema**: See `database/schema.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`

## 🚀 Deployment

### Deploy to Heroku
```bash
heroku login
heroku create mits-college-system
git push heroku main
```

### Deploy with Docker
```bash
docker build -t mits-backend ./backend
docker run -p 5000:5000 mits-backend
```

## 📊 Features Overview

| Feature | Status | Details |
|---------|--------|---------|
| User Authentication | ✅ | JWT-based with email verification |
| Role-Based Access | ✅ | Student, Faculty, Admin roles |
| Attendance Tracking | ✅ | Subject-wise with percentage |
| Assignment Management | ✅ | Upload, submit, grade |
| Results & Grades | ✅ | SGPA, CGPA calculation |
| Timetable | ✅ | Class schedule display |
| Library Management | ✅ | Book issue/return tracking |
| Events Management | ✅ | Event registration |
| Chat System | ✅ | Real-time messaging |
| Grievance Portal | ✅ | Complaint tracking |
| Payment Gateway | ✅ | Stripe integration |
| Admin Dashboard | ✅ | Analytics & reports |
| Dark Mode | ✅ | Theme toggle |
| Mobile App | ✅ | React Native + PWA |
| Responsive Design | ✅ | Mobile-first approach |

## 🔐 Security Features

- ✅ JWT Authentication
- ✅ Password Hashing (bcryptjs)
- ✅ Role-Based Access Control
- ✅ Input Validation
- ✅ CORS Protection
- ✅ Rate Limiting Ready
- ✅ Environment Variables
- ✅ Secure Headers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 💾 Database

- **MongoDB** for data storage
- **16 Collections** with proper indexing
- **Relationships** between entities
- **Backup & Recovery** support

## 🎯 Next Steps

1. **Clone/Download** the project
2. **Install Dependencies** (npm install)
3. **Configure Environment** (.env files)
4. **Start Services** (npm run dev or docker-compose up)
5. **Login** with demo credentials
6. **Explore** the application
7. **Customize** for your institution

## 📞 Support

- **Email**: support@mits.ac.in
- **GitHub**: Report issues
- **Documentation**: Check docs folder

## 📄 License

MIT License - Free to use and modify

## ✨ Features Checklist

- [x] Complete authentication system
- [x] Student dashboard
- [x] Faculty dashboard
- [x] Admin dashboard
- [x] Attendance management
- [x] Assignment system
- [x] Results & grades
- [x] Timetable display
- [x] Library management
- [x] Event management
- [x] Chat system
- [x] Grievance portal
- [x] Payment gateway
- [x] Dark mode
- [x] Mobile app
- [x] Responsive design
- [x] API documentation
- [x] Docker support
- [x] Database schema
- [x] Setup guide

## 🎉 Ready to Go!

Your MITS College Management System is ready to use. Start exploring and customizing it for your institution!

---

**Version**: 1.0.0  
**Status**: Production Ready  
**Last Updated**: January 2024
