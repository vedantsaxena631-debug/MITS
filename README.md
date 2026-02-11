# MITS College Management System

A complete, modern, responsive College Management Website and Mobile App (PWA + Android) for Madhav Institute of Technology and Science (MITS), Gwalior.

## Features

### User Management
- Student/Faculty/Admin login & signup
- Role-based dashboards
- Profile management
- Digital ID card
- OTP/email authentication
- Password reset

### Academic System
- Branch and department listings
- Faculty profiles with photos
- Course and semester structure
- Subject-wise syllabus downloads
- Study materials (notes, PPTs, PDFs, lab manuals, previous year papers)
- Assignment upload & submission
- Daily timetable display
- Lab schedule
- Attendance tracker (subject-wise)
- Exam schedules
- Internal/external marks
- Results & grade reports
- SGPA/CGPA calculator
- Certificates management

### Events & Campus Life
- Notice board updates
- Upcoming events calendar
- Event registration
- Club list & memberships
- College photo gallery
- Hostel/mess menu planner
- Library catalogue search
- Book issue/return status
- Campus interactive map
- Contact directory
- Lost & found section

### Career & Growth
- Placement cell dashboard
- Internship listings
- Resume builder
- Alumni network & success stories
- Scholarship information portal

### Communication & Support
- AI chatbot for help
- Faculty-student chat/messaging
- Grievance/complaint portal
- Feedback & suggestion form
- Push notifications & alerts

### Payments & Services
- Online fee payment gateway
- Document upload & storage
- Leave application system

### Smart Features
- Dark mode
- Mobile App (PWA + Android build)
- QR-based attendance
- Transport/bus tracking
- Discussion forum
- Achievements/badges system
- Multi-language support
- Admin analytics dashboard

## Tech Stack

### Frontend
- React.js with TypeScript
- Tailwind CSS
- Redux for state management
- Axios for API calls
- PWA capabilities

### Backend
- Node.js with Express.js
- MongoDB for database
- JWT for authentication
- Multer for file uploads
- Socket.io for real-time chat

### Mobile
- React Native (for Android build)
- Expo for development

### DevOps
- Docker for containerization
- GitHub for version control

## Project Structure

```
mits-college-system/
├── frontend/                 # React web application
├── backend/                  # Node.js API server
├── mobile/                   # React Native mobile app
├── database/                 # MongoDB schemas
├── docs/                     # Documentation
└── docker-compose.yml        # Docker configuration
```

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Mobile Setup
```bash
cd mobile
npm install
expo start
```

## Environment Variables

Create `.env` files in backend and frontend directories with required configurations.

## API Documentation

See `docs/API.md` for complete API documentation.

## Database Schema

See `database/schema.md` for MongoDB schema details.

## Contributing

Please follow the coding standards and create feature branches for new features.

## License

MIT License - MITS Gwalior

## Support

For support, contact: support@mits.ac.in
