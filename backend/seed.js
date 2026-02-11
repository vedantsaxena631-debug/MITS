const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Student = require('./models/Student');
const Faculty = require('./models/Faculty');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mits_college', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => {
  console.log('MongoDB connection error:', err);
  process.exit(1);
});

const seedDatabase = async () => {
  try {
    console.log('Starting database seeding...');

    // Clear existing users (optional - comment out if you want to keep existing data)
    // await User.deleteMany({});
    // await Student.deleteMany({});
    // await Faculty.deleteMany({});
    // console.log('Cleared existing data');

    // Check if demo users already exist
    const existingStudent = await User.findOne({ email: 'student@mits.ac.in' });
    const existingFaculty = await User.findOne({ email: 'faculty@mits.ac.in' });
    const existingAdmin = await User.findOne({ email: 'admin@mits.ac.in' });

    // Create Student User
    if (!existingStudent) {
      const studentUser = new User({
        firstName: 'Demo',
        lastName: 'Student',
        email: 'student@mits.ac.in',
        phone: '1234567890',
        password: 'password123',
        role: 'student',
        isVerified: true,
        gender: 'Male',
      });
      await studentUser.save();
      console.log('✓ Student user created');

      // Create Student Profile
      const student = new Student({
        userId: studentUser._id,
        rollNumber: 'STU2024001',
        branch: 'CSE',
        semester: 3,
        section: 'A',
        admissionYear: 2024,
      });
      await student.save();
      console.log('✓ Student profile created');
    } else {
      console.log('⊘ Student user already exists');
    }

    // Create Faculty User
    if (!existingFaculty) {
      const facultyUser = new User({
        firstName: 'Demo',
        lastName: 'Faculty',
        email: 'faculty@mits.ac.in',
        phone: '0987654321',
        password: 'password123',
        role: 'faculty',
        isVerified: true,
        gender: 'Female',
      });
      await facultyUser.save();
      console.log('✓ Faculty user created');

      // Create Faculty Profile
      const faculty = new Faculty({
        userId: facultyUser._id,
        employeeId: 'FAC2024001',
        department: 'CSE',
        designation: 'Assistant Professor',
      });
      await faculty.save();
      console.log('✓ Faculty profile created');
    } else {
      console.log('⊘ Faculty user already exists');
    }

    // Create Admin User
    if (!existingAdmin) {
      const adminUser = new User({
        firstName: 'System',
        lastName: 'Admin',
        email: 'admin@mits.ac.in',
        phone: '1122334455',
        password: 'password123',
        role: 'admin',
        isVerified: true,
        gender: 'Male',
      });
      await adminUser.save();
      console.log('✓ Admin user created');
    } else {
      console.log('⊘ Admin user already exists');
    }

    console.log('\n✅ Database seeding completed successfully!');
    console.log('\nDemo Credentials:');
    console.log('─────────────────────────────────────');
    console.log('Student: student@mits.ac.in / password123');
    console.log('Faculty: faculty@mits.ac.in / password123');
    console.log('Admin:   admin@mits.ac.in / password123');
    console.log('─────────────────────────────────────\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
