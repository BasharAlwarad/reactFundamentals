// You can work here or download the template
const studentData = {
  firstName: 'Testy',
  lastName: 'McTest',
  age: 42,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
  gpa: 100,
  graduate: false,
};

// Your components go here
const Grade = () => {
  const gpa = studentData.gpa;
  if (gpa >= 97) {
    return 'A+';
  } else if (gpa >= 93) {
    return 'A';
  } else if (gpa >= 90) {
    return 'A-';
  } else if (gpa >= 87) {
    return 'B+';
  } else if (gpa >= 83) {
    return 'B';
  } else if (gpa >= 80) {
    return 'B-';
  } else if (gpa >= 77) {
    return 'C+';
  } else if (gpa >= 73) {
    return 'C';
  } else if (gpa >= 70) {
    return 'C-';
  } else if (gpa >= 67) {
    return 'D+';
  } else if (gpa >= 63) {
    return 'D';
  } else if (gpa >= 60) {
    return 'D-';
  } else {
    return 'F';
  }
};

const Student = () => {
  return (
    <div className="student-card">
      <img
        src={studentData.picture}
        alt={`${studentData.firstName} ${studentData.lastName}`}
        className="student-picture"
      />
      <h2>
        {studentData.firstName} {studentData.lastName}
      </h2>
      <p>
        <strong>Age:</strong> {studentData.age}
      </p>
      <p>
        <strong>Course:</strong> {studentData.course}
      </p>
      <p>
        <strong>City:</strong> {studentData.city}
      </p>
      <p>
        <strong>Grade:</strong> <Grade />
      </p>
      <p>
        <strong>Status:</strong> {studentData.graduate ? 'Graduate' : 'Student'}
      </p>
    </div>
  );
};

const App = () => {
  return <Student />;
};

export default App;
