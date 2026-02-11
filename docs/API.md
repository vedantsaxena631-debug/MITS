# MITS College Management System - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## Authentication Endpoints

### 1. Register
**POST** `/auth/register`

Request:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@mits.ac.in",
  "phone": "+91 9876543210",
  "password": "password123",
  "role": "student"
}
```

Response:
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@mits.ac.in",
    "role": "student"
  }
}
```

### 2. Login
**POST** `/auth/login`

Request:
```json
{
  "email": "john@mits.ac.in",
  "password": "password123"
}
```

Response:
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@mits.ac.in",
    "role": "student",
    "profilePhoto": "https://..."
  }
}
```

### 3. Verify Token
**GET** `/auth/verify`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "valid": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@mits.ac.in",
    "role": "student"
  }
}
```

### 4. Forgot Password
**POST** `/auth/forgot-password`

Request:
```json
{
  "email": "john@mits.ac.in"
}
```

Response:
```json
{
  "message": "Password reset link sent to email"
}
```

### 5. Reset Password
**POST** `/auth/reset-password`

Request:
```json
{
  "token": "reset_token_from_email",
  "newPassword": "newpassword123"
}
```

Response:
```json
{
  "message": "Password reset successfully"
}
```

---

## User Endpoints

### 1. Get User Profile
**GET** `/users/profile/:id`

Response:
```json
{
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@mits.ac.in",
    "phone": "+91 9876543210",
    "role": "student",
    "profilePhoto": "https://...",
    "dateOfBirth": "2003-01-15",
    "gender": "Male",
    "address": {
      "street": "123 Main St",
      "city": "Gwalior",
      "state": "MP",
      "zipCode": "474001",
      "country": "India"
    }
  },
  "profile": {
    "_id": "507f1f77bcf86cd799439012",
    "userId": "507f1f77bcf86cd799439011",
    "rollNumber": "CSE2021001",
    "branch": "CSE",
    "semester": 4,
    "section": "A",
    "cgpa": 8.5,
    "sgpa": 8.7
  }
}
```

### 2. Update User Profile
**PUT** `/users/profile/:id`

Request:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+91 9876543210",
  "dateOfBirth": "2003-01-15",
  "gender": "Male",
  "address": {
    "street": "123 Main St",
    "city": "Gwalior",
    "state": "MP",
    "zipCode": "474001",
    "country": "India"
  }
}
```

Response:
```json
{
  "message": "Profile updated successfully",
  "user": { ... }
}
```

### 3. Get All Faculty
**GET** `/users/faculty`

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439013",
    "userId": {
      "_id": "507f1f77bcf86cd799439014",
      "firstName": "Dr.",
      "lastName": "Sharma",
      "email": "sharma@mits.ac.in",
      "phone": "+91 9876543210",
      "profilePhoto": "https://..."
    },
    "employeeId": "FAC001",
    "department": "CSE",
    "designation": "Associate Professor",
    "specialization": "Data Science",
    "experience": 10,
    "subjects": [...]
  }
]
```

### 4. Get Faculty by Department
**GET** `/users/faculty/department/:department`

Response: Same as above, filtered by department

### 5. Get All Students
**GET** `/users/students`

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "userId": {
      "_id": "507f1f77bcf86cd799439011",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@mits.ac.in",
      "phone": "+91 9876543210",
      "profilePhoto": "https://..."
    },
    "rollNumber": "CSE2021001",
    "branch": "CSE",
    "semester": 4,
    "section": "A",
    "cgpa": 8.5
  }
]
```

### 6. Get Students by Branch and Semester
**GET** `/users/students/:branch/:semester`

Response: Same as above, filtered by branch and semester

---

## Academics Endpoints

### 1. Get All Subjects
**GET** `/academics/subjects`

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439015",
    "code": "CS201",
    "name": "Data Structures",
    "branch": "CSE",
    "semester": 3,
    "credits": 4,
    "faculty": {
      "_id": "507f1f77bcf86cd799439014",
      "firstName": "Dr.",
      "lastName": "Sharma",
      "email": "sharma@mits.ac.in"
    },
    "description": "Study of data structures and algorithms",
    "studyMaterials": [...]
  }
]
```

### 2. Get Subjects by Branch and Semester
**GET** `/academics/subjects/:branch/:semester`

Response: Same as above, filtered

### 3. Get Subject Details
**GET** `/academics/subjects/:id`

Response: Single subject with all details

### 4. Create Subject (Admin)
**POST** `/academics/subjects`

Request:
```json
{
  "code": "CS201",
  "name": "Data Structures",
  "branch": "CSE",
  "semester": 3,
  "credits": 4,
  "faculty": "507f1f77bcf86cd799439014",
  "description": "Study of data structures and algorithms"
}
```

### 5. Get Timetable
**GET** `/academics/timetable/:branch/:semester/:section`

Response:
```json
{
  "_id": "507f1f77bcf86cd799439016",
  "branch": "CSE",
  "semester": 3,
  "section": "A",
  "schedule": [
    {
      "day": "Monday",
      "period": 1,
      "startTime": "09:00",
      "endTime": "10:00",
      "subject": {
        "_id": "507f1f77bcf86cd799439015",
        "name": "Data Structures",
        "code": "CS201"
      },
      "faculty": {
        "_id": "507f1f77bcf86cd799439014",
        "firstName": "Dr.",
        "lastName": "Sharma"
      },
      "classroom": "A101",
      "type": "lecture"
    }
  ],
  "academicYear": "2023-24"
}
```

### 6. Upload Study Material
**POST** `/academics/subjects/:id/study-material`

Request:
```json
{
  "title": "Lecture Notes - Chapter 1",
  "type": "notes",
  "url": "https://..."
}
```

---

## Attendance Endpoints

### 1. Mark Attendance
**POST** `/attendance/mark`

Request:
```json
{
  "studentId": "507f1f77bcf86cd799439011",
  "subjectId": "507f1f77bcf86cd799439015",
  "date": "2024-01-15",
  "status": "present"
}
```

### 2. Get Attendance for Student
**GET** `/attendance/student/:studentId`

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439017",
    "student": "507f1f77bcf86cd799439011",
    "subject": {
      "_id": "507f1f77bcf86cd799439015",
      "name": "Data Structures",
      "code": "CS201"
    },
    "date": "2024-01-15",
    "status": "present",
    "markedBy": {
      "_id": "507f1f77bcf86cd799439014",
      "firstName": "Dr.",
      "lastName": "Sharma"
    }
  }
]
```

### 3. Get Attendance Percentage
**GET** `/attendance/percentage/:studentId/:subjectId`

Response:
```json
{
  "totalClasses": 40,
  "presentClasses": 34,
  "absentClasses": 6,
  "percentage": "85.00",
  "shortage": false
}
```

### 4. Bulk Mark Attendance
**POST** `/attendance/bulk-mark`

Request:
```json
{
  "attendanceData": [
    {
      "student": "507f1f77bcf86cd799439011",
      "subject": "507f1f77bcf86cd799439015",
      "date": "2024-01-15",
      "status": "present"
    }
  ]
}
```

---

## Assignment Endpoints

### 1. Create Assignment
**POST** `/assignments`

Request:
```json
{
  "subject": "507f1f77bcf86cd799439015",
  "faculty": "507f1f77bcf86cd799439014",
  "title": "Assignment 1: Sorting Algorithms",
  "description": "Implement and analyze sorting algorithms",
  "instructions": "Submit as PDF",
  "dueDate": "2024-01-20",
  "totalMarks": 10
}
```

### 2. Get Assignments for Subject
**GET** `/assignments/subject/:subjectId`

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439018",
    "subject": "507f1f77bcf86cd799439015",
    "faculty": {
      "_id": "507f1f77bcf86cd799439014",
      "firstName": "Dr.",
      "lastName": "Sharma",
      "email": "sharma@mits.ac.in"
    },
    "title": "Assignment 1: Sorting Algorithms",
    "description": "Implement and analyze sorting algorithms",
    "dueDate": "2024-01-20",
    "totalMarks": 10
  }
]
```

### 3. Submit Assignment
**POST** `/assignments/:assignmentId/submit`

Request:
```json
{
  "studentId": "507f1f77bcf86cd799439011",
  "submissionFile": {
    "name": "assignment1.pdf",
    "url": "https://..."
  }
}
```

### 4. Get Submissions
**GET** `/assignments/:assignmentId/submissions`

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439019",
    "assignment": "507f1f77bcf86cd799439018",
    "student": {
      "_id": "507f1f77bcf86cd799439011",
      "firstName": "John",
      "lastName": "Doe"
    },
    "submittedAt": "2024-01-18",
    "isLate": false,
    "marks": 9,
    "feedback": "Good work!"
  }
]
```

### 5. Grade Submission
**PUT** `/assignments/submission/:submissionId/grade`

Request:
```json
{
  "marks": 9,
  "feedback": "Good work!",
  "gradedBy": "507f1f77bcf86cd799439014"
}
```

---

## Results Endpoints

### 1. Get Results for Student
**GET** `/results/student/:studentId`

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439020",
    "student": "507f1f77bcf86cd799439011",
    "subject": {
      "_id": "507f1f77bcf86cd799439015",
      "name": "Data Structures",
      "code": "CS201",
      "credits": 4
    },
    "semester": 3,
    "internalMarks": 28,
    "externalMarks": 65,
    "totalMarks": 93,
    "grade": "A+",
    "gradePoint": 4.0,
    "creditEarned": 4
  }
]
```

### 2. Calculate SGPA
**GET** `/results/sgpa/:studentId/:semester`

Response:
```json
{
  "sgpa": "8.70",
  "totalCredits": 20
}
```

### 3. Calculate CGPA
**GET** `/results/cgpa/:studentId`

Response:
```json
{
  "cgpa": "8.50",
  "totalCredits": 60
}
```

### 4. Add Result
**POST** `/results`

Request:
```json
{
  "student": "507f1f77bcf86cd799439011",
  "subject": "507f1f77bcf86cd799439015",
  "semester": 3,
  "internalMarks": 28,
  "externalMarks": 65,
  "credits": 4
}
```

---

## Events Endpoints

### 1. Get All Events
**GET** `/events`

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439021",
    "title": "Tech Fest 2024",
    "description": "Annual technology festival",
    "eventDate": "2024-01-20",
    "startTime": "09:00",
    "endTime": "17:00",
    "location": "Main Campus",
    "category": "technical",
    "organizer": {
      "_id": "507f1f77bcf86cd799439014",
      "firstName": "Dr.",
      "lastName": "Sharma"
    },
    "capacity": 500,
    "registrations": [...]
  }
]
```

### 2. Register for Event
**POST** `/events/:eventId/register`

Request:
```json
{
  "studentId": "507f1f77bcf86cd799439011"
}
```

---

## Notices Endpoints

### 1. Get All Notices
**GET** `/notices`

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439022",
    "title": "Semester Exam Schedule",
    "content": "Exams will commence from 15 January 2024",
    "category": "academic",
    "priority": "urgent",
    "postedBy": {
      "_id": "507f1f77bcf86cd799439014",
      "firstName": "Dr.",
      "lastName": "Sharma"
    },
    "targetAudience": "all",
    "views": 150,
    "createdAt": "2024-01-10"
  }
]
```

---

## Library Endpoints

### 1. Get All Books
**GET** `/library/books`

### 2. Search Books
**GET** `/library/books/search/:query`

### 3. Issue Book
**POST** `/library/issue`

Request:
```json
{
  "studentId": "507f1f77bcf86cd799439011",
  "bookId": "507f1f77bcf86cd799439023",
  "dueDate": "2024-02-15"
}
```

### 4. Return Book
**POST** `/library/return/:issueId`

---

## Chat Endpoints

### 1. Send Message
**POST** `/chat/send`

Request:
```json
{
  "senderId": "507f1f77bcf86cd799439011",
  "receiverId": "507f1f77bcf86cd799439014",
  "content": "Hi, I have a doubt in the assignment"
}
```

### 2. Get Conversation
**GET** `/chat/conversation/:userId1/:userId2`

### 3. Get Inbox
**GET** `/chat/inbox/:userId`

### 4. Mark Message as Read
**PUT** `/chat/:messageId/read`

---

## Grievance Endpoints

### 1. File Grievance
**POST** `/grievance`

Request:
```json
{
  "studentId": "507f1f77bcf86cd799439011",
  "title": "Attendance Issue",
  "description": "Attendance not updated correctly",
  "category": "academic",
  "priority": "high"
}
```

### 2. Get My Grievances
**GET** `/grievance/student/:studentId`

### 3. Update Grievance Status
**PUT** `/grievance/:id/status`

Request:
```json
{
  "status": "in_progress",
  "resolution": "Being investigated",
  "assignedTo": "507f1f77bcf86cd799439024"
}
```

---

## Payment Endpoints

### 1. Create Payment
**POST** `/payments`

Request:
```json
{
  "studentId": "507f1f77bcf86cd799439011",
  "amount": 50000,
  "paymentType": "tuition",
  "semester": 3,
  "academicYear": "2023-24",
  "dueDate": "2024-01-31"
}
```

### 2. Get My Payments
**GET** `/payments/student/:studentId`

### 3. Process Payment
**POST** `/payments/:paymentId/process`

Request:
```json
{
  "transactionId": "TXN123456",
  "paymentMethod": "credit_card",
  "receipt": "https://..."
}
```

---

## Admin Endpoints

### 1. Dashboard Statistics
**GET** `/admin/dashboard`

Response:
```json
{
  "totalStudents": 500,
  "totalFaculty": 50,
  "totalUsers": 551,
  "totalPayments": 500,
  "completedPayments": 450,
  "pendingPayments": 50,
  "paymentPercentage": "90.00"
}
```

### 2. Get All Users
**GET** `/admin/users`

### 3. Deactivate User
**PUT** `/admin/users/:userId/deactivate`

### 4. Get Analytics
**GET** `/admin/analytics`

---

## Error Responses

All error responses follow this format:

```json
{
  "error": "Error message describing what went wrong"
}
```

Common HTTP Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

---

## Rate Limiting

API requests are limited to 100 requests per minute per IP address.

---

## Pagination

For endpoints that return lists, use query parameters:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

Example:
```
GET /users/students?page=2&limit=20
```

---

## Sorting

Use `sort` query parameter:
```
GET /results/student/:studentId?sort=-createdAt
```

---

## Filtering

Use query parameters for filtering:
```
GET /events?category=technical&status=active
```
