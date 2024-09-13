// You can work here or download the template
import students from './data';

// Your components go here
const Grade = ({ gpa }) => {
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

const Student = ({ student }) => {
  return (
    <div className="student-card">
      <img
        src={student.picture}
        alt={`${student.firstName} ${student.lastName}`}
        className="student-picture"
      />
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <p>
        <strong>Age:</strong> {student.age}
      </p>
      <p>
        <strong>Course:</strong> {student.course}
      </p>
      <p>
        <strong>City:</strong> {student.city}
      </p>
      <p>
        <strong>Grade:</strong> <Grade gpa={student.gpa} />
      </p>
      <p>
        <strong>Status:</strong> {student.graduate ? 'Graduate' : 'Student'}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div className="students">
      {students.map((s) => (
        <Student key={s.id} student={s} />
      ))}
    </div>
  );
};

export default App;
