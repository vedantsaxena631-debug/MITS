# MITS College Management System - Setup Guide

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn
- Git
- Docker (optional, for containerization)

## Project Structure

```
mits-college-system/
├── backend/                    # Node.js Express API
│   ├── models/                # MongoDB schemas
│   ├── routes/                # API endpoints
│   ├── middleware/            # Custom middleware
│   ├── controllers/           # Business logic
│   ├── server.js              # Main server file
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
├── frontend/                   # React web application
│   ├── src/
│   │   ├── pages/            # Page components
│   │   ├── components/       # Reusable components
│   │   ├── redux/            # State management
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├─�� package.json
│   ├── tailwind.config.js
│   └── Dockerfile
├── mobile/                     # React Native mobile app
│   ├── screens/              # Mobile screens
│   ├── App.js
│   └── package.json
├── database/                   # Database schemas and migrations
│   └── schema.md
├── docs/                       # Documentation
│   └── API.md
├── docker-compose.yml         # Docker configuration
└── README.md
```

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mits-college-system.git
cd mits-college-system
```

### 2. Backend Setup

```bash
cd backend

# Copy environment variables
cp .env.example .env

# Install dependencies
npm install

# Start MongoDB (if not using Docker)
# Make sure MongoDB is running on localhost:27017

# Run migrations (if any)
npm run migrate

# Start the server
npm run dev
```

The backend will be available at `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will be available at `http://localhost:3000`

### 4. Mobile App Setup

```bash
cd mobile

# Install dependencies
npm install

# Start Expo
expo start

# For Android
expo start --android

# For iOS
expo start --ios
```

## Environment Variables

### Backend (.env)

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mits_college
JWT_SECRET=your_jwt_secret_key_change_in_production
JWT_EXPIRE=7d
BCRYPT_ROUNDS=10

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Cloudinary (for image uploads)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe (for payments)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Node Environment
NODE_ENV=development
```

### Frontend (.env)

```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
```

## Docker Setup

### Using Docker Compose

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Remove volumes
docker-compose down -v
```

Services will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MongoDB: localhost:27017

## Database Setup

### Initialize MongoDB

```bash
# Connect to MongoDB
mongo

# Create database
use mits_college

# Create collections and indexes
db.users.createIndex({ email: 1 }, { unique: true })
db.students.createIndex({ rollNumber: 1 }, { unique: true })
db.faculty.createIndex({ employeeId: 1 }, { unique: true })
db.subjects.createIndex({ code: 1 }, { unique: true })
```

### Seed Sample Data

```bash
cd backend
npm run seed
```

## Demo Credentials

### Student
- Email: `student@mits.ac.in`
- Password: `password123`

### Faculty
- Email: `faculty@mits.ac.in`
- Password: `password123`

### Admin
- Email: `admin@mits.ac.in`
- Password: `password123`

## API Testing

### Using Postman

1. Import the Postman collection from `docs/postman_collection.json`
2. Set the base URL to `http://localhost:5000/api`
3. Use the demo credentials to get a token
4. Add the token to the Authorization header

### Using cURL

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"student@mits.ac.in","password":"password123"}'

# Get dashboard
curl -X GET http://localhost:5000/api/admin/dashboard \
  -H "Authorization: Bearer <token>"
```

## Development Workflow

### Backend Development

1. Create a new route file in `backend/routes/`
2. Create corresponding model in `backend/models/`
3. Add business logic in controllers
4. Test using Postman or cURL
5. Update API documentation

### Frontend Development

1. Create new page in `src/pages/`
2. Create reusable components in `src/components/`
3. Use Redux for state management
4. Style with Tailwind CSS
5. Test in browser

### Mobile Development

1. Create new screen in `mobile/screens/`
2. Use React Navigation for routing
3. Test on Android/iOS emulator
4. Build APK/IPA for distribution

## Building for Production

### Frontend Build

```bash
cd frontend
npm run build
```

Output will be in `frontend/build/`

### Backend Production

```bash
cd backend
npm install --production
NODE_ENV=production npm start
```

### Mobile Build

```bash
cd mobile

# Android
expo build:android

# iOS
expo build:ios
```

## Deployment

### Using Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create mits-college-system

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret

# Deploy
git push heroku main
```

### Using AWS

1. Create EC2 instance
2. Install Node.js and MongoDB
3. Clone repository
4. Configure environment variables
5. Start services using PM2

### Using DigitalOcean

1. Create Droplet
2. Install Docker
3. Use docker-compose to deploy
4. Configure Nginx as reverse proxy

## Troubleshooting

### MongoDB Connection Error

```bash
# Check if MongoDB is running
mongod --version

# Start MongoDB
mongod

# Or using Docker
docker run -d -p 27017:27017 mongo
```

### Port Already in Use

```bash
# Find process using port 5000
lsof -i :5000

# Kill process
kill -9 <PID>
```

### CORS Error

Make sure `FRONTEND_URL` in backend `.env` matches your frontend URL.

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Performance Optimization

1. **Database Indexing**: Ensure all frequently queried fields are indexed
2. **Caching**: Implement Redis for caching
3. **CDN**: Use CDN for static assets
4. **Compression**: Enable gzip compression
5. **Lazy Loading**: Implement code splitting in React

## Security Best Practices

1. **Environment Variables**: Never commit `.env` files
2. **JWT Secret**: Use strong, random JWT secret
3. **HTTPS**: Always use HTTPS in production
4. **Input Validation**: Validate all user inputs
5. **SQL Injection**: Use parameterized queries (MongoDB prevents this)
6. **CORS**: Configure CORS properly
7. **Rate Limiting**: Implement rate limiting
8. **Password Hashing**: Use bcrypt for password hashing

## Monitoring and Logging

### Backend Logging

```javascript
// Use Winston or Morgan for logging
const logger = require('winston');
logger.info('Server started on port 5000');
```

### Error Tracking

Use Sentry for error tracking:

```javascript
const Sentry = require("@sentry/node");
Sentry.init({ dsn: "your_sentry_dsn" });
```

## Backup and Recovery

### MongoDB Backup

```bash
# Backup
mongodump --db mits_college --out ./backup

# Restore
mongorestore --db mits_college ./backup/mits_college
```

## Support and Documentation

- API Documentation: See `docs/API.md`
- Database Schema: See `database/schema.md`
- Issues: Report on GitHub Issues
- Email: support@mits.ac.in

## License

MIT License - See LICENSE file for details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Changelog

### Version 1.0.0 (Initial Release)
- User authentication and authorization
- Student dashboard
- Faculty dashboard
- Admin dashboard
- Academics management
- Attendance tracking
- Results management
- Assignment submission
- Events management
- Library management
- Chat system
- Grievance portal
- Payment gateway integration
