# MITS College Management System - Database Schema

## Collections

### 1. Users
```javascript
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String (unique),
  phone: String,
  password: String (hashed),
  role: String (student/faculty/admin),
  profilePhoto: String,
  dateOfBirth: Date,
  gender: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  isActive: Boolean,
  isVerified: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Students
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  rollNumber: String (unique),
  branch: String (CSE/ECE/ME/CE/EE/IT),
  semester: Number (1-8),
  section: String,
  admissionYear: Number,
  cgpa: Number,
  sgpa: Number,
  creditsEarned: Number,
  creditsPending: Number,
  fatherName: String,
  motherName: String,
  parentPhone: String,
  hostelName: String,
  roomNumber: String,
  emergencyContact: String,
  bloodGroup: String,
  aadharNumber: String,
  digitalIdCard: {
    qrCode: String,
    issuedDate: Date,
    expiryDate: Date
  },
  documents: [{
    name: String,
    url: String,
    uploadedAt: Date
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### 3. Faculty
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  employeeId: String (unique),
  department: String,
  designation: String,
  qualification: [String],
  specialization: String,
  experience: Number,
  officeLocation: String,
  officePhone: String,
  consultationHours: [{
    day: String,
    startTime: String,
    endTime: String
  }],
  subjects: [ObjectId] (ref: Subject),
  bio: String,
  researchInterests: [String],
  publications: [{
    title: String,
    journal: String,
    year: Number,
    url: String
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### 4. Subjects
```javascript
{
  _id: ObjectId,
  code: String (unique),
  name: String,
  branch: String,
  semester: Number,
  credits: Number,
  faculty: ObjectId (ref: Faculty),
  description: String,
  syllabus: {
    url: String,
    uploadedAt: Date
  },
  studyMaterials: [{
    title: String,
    type: String (notes/ppt/pdf/lab_manual/previous_papers),
    url: String,
    uploadedAt: Date,
    uploadedBy: ObjectId (ref: Faculty)
  }],
  practicalHours: Number,
  theoryHours: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### 5. Attendance
```javascript
{
  _id: ObjectId,
  student: ObjectId (ref: Student),
  subject: ObjectId (ref: Subject),
  date: Date,
  status: String (present/absent/leave),
  markedBy: ObjectId (ref: Faculty),
  remarks: String,
  createdAt: Date
}
```

### 6. Assignments
```javascript
{
  _id: ObjectId,
  subject: ObjectId (ref: Subject),
  faculty: ObjectId (ref: Faculty),
  title: String,
  description: String,
  instructions: String,
  attachments: [{
    name: String,
    url: String,
    uploadedAt: Date
  }],
  dueDate: Date,
  totalMarks: Number,
  createdAt: Date
}
```

### 7. AssignmentSubmissions
```javascript
{
  _id: ObjectId,
  assignment: ObjectId (ref: Assignment),
  student: ObjectId (ref: Student),
  submissionFile: {
    name: String,
    url: String,
    uploadedAt: Date
  },
  submittedAt: Date,
  isLate: Boolean,
  marks: Number,
  feedback: String,
  gradedAt: Date,
  gradedBy: ObjectId (ref: Faculty),
  createdAt: Date
}
```

### 8. Results
```javascript
{
  _id: ObjectId,
  student: ObjectId (ref: Student),
  subject: ObjectId (ref: Subject),
  semester: Number,
  internalMarks: Number,
  externalMarks: Number,
  totalMarks: Number,
  grade: String (A+/A/B+/B/C+/C/D/F),
  gradePoint: Number,
  credits: Number,
  creditEarned: Number,
  resultDate: Date,
  publishedAt: Date,
  createdAt: Date
}
```

### 9. Events
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  eventDate: Date,
  startTime: String,
  endTime: String,
  location: String,
  category: String (academic/cultural/sports/technical/placement/other),
  organizer: ObjectId (ref: User),
  image: String,
  capacity: Number,
  registrations: [{
    student: ObjectId (ref: Student),
    registeredAt: Date
  }],
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 10. Notices
```javascript
{
  _id: ObjectId,
  title: String,
  content: String,
  category: String (academic/administrative/placement/hostel/general),
  priority: String (low/medium/high/urgent),
  attachments: [{
    name: String,
    url: String,
    uploadedAt: Date
  }],
  postedBy: ObjectId (ref: User),
  targetAudience: String (all/students/faculty/admin),
  expiryDate: Date,
  isActive: Boolean,
  views: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### 11. LibraryBooks
```javascript
{
  _id: ObjectId,
  title: String,
  author: String,
  isbn: String (unique),
  publisher: String,
  publicationYear: Number,
  category: String,
  subject: ObjectId (ref: Subject),
  totalCopies: Number,
  availableCopies: Number,
  location: String,
  shelfNumber: String,
  description: String,
  coverImage: String,
  createdAt: Date
}
```

### 12. BookIssues
```javascript
{
  _id: ObjectId,
  student: ObjectId (ref: Student),
  book: ObjectId (ref: LibraryBook),
  issueDate: Date,
  dueDate: Date,
  returnDate: Date,
  status: String (issued/returned/overdue),
  fine: Number,
  finePaid: Boolean,
  remarks: String,
  createdAt: Date
}
```

### 13. Messages
```javascript
{
  _id: ObjectId,
  sender: ObjectId (ref: User),
  receiver: ObjectId (ref: User),
  content: String,
  attachments: [{
    name: String,
    url: String,
    type: String
  }],
  isRead: Boolean,
  readAt: Date,
  createdAt: Date
}
```

### 14. Grievances
```javascript
{
  _id: ObjectId,
  student: ObjectId (ref: Student),
  title: String,
  description: String,
  category: String (academic/hostel/placement/harassment/other),
  priority: String (low/medium/high/urgent),
  attachments: [{
    name: String,
    url: String
  }],
  status: String (open/in_progress/resolved/closed),
  assignedTo: ObjectId (ref: User),
  resolution: String,
  resolvedAt: Date,
  feedback: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 15. Payments
```javascript
{
  _id: ObjectId,
  student: ObjectId (ref: Student),
  amount: Number,
  paymentType: String (tuition/hostel/library/lab/other),
  description: String,
  semester: Number,
  academicYear: String,
  paymentMethod: String (credit_card/debit_card/net_banking/upi/cheque),
  transactionId: String,
  status: String (pending/completed/failed/refunded),
  dueDate: Date,
  paidDate: Date,
  receipt: String,
  remarks: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 16. Timetable
```javascript
{
  _id: ObjectId,
  branch: String,
  semester: Number,
  section: String,
  schedule: [{
    day: String,
    period: Number,
    startTime: String,
    endTime: String,
    subject: ObjectId (ref: Subject),
    faculty: ObjectId (ref: Faculty),
    classroom: String,
    type: String (lecture/practical/lab)
  }],
  academicYear: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Indexes

```javascript
// Users
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ role: 1 })

// Students
db.students.createIndex({ rollNumber: 1 }, { unique: true })
db.students.createIndex({ branch: 1, semester: 1 })

// Faculty
db.faculty.createIndex({ employeeId: 1 }, { unique: true })
db.faculty.createIndex({ department: 1 })

// Subjects
db.subjects.createIndex({ code: 1 }, { unique: true })
db.subjects.createIndex({ branch: 1, semester: 1 })

// Attendance
db.attendance.createIndex({ student: 1, subject: 1, date: 1 })

// Results
db.results.createIndex({ student: 1, semester: 1 })

// LibraryBooks
db.librarybooks.createIndex({ isbn: 1 }, { unique: true })

// Messages
db.messages.createIndex({ sender: 1, receiver: 1 })
db.messages.createIndex({ receiver: 1, isRead: 1 })
```

## Relationships

- User → Student (1:1)
- User → Faculty (1:1)
- Faculty → Subject (1:N)
- Subject → Attendance (1:N)
- Subject → Assignment (1:N)
- Subject → Result (1:N)
- Student → Attendance (1:N)
- Student → Result (1:N)
- Student → AssignmentSubmission (1:N)
- Student → Event (N:N)
- Student → BookIssue (1:N)
- Student → Grievance (1:N)
- Student → Payment (1:N)
- User → Message (1:N)
- User → Grievance (1:N)
