// You can work here or download the template
const studentData = {
  firstName: 'Testy',
  lastName: 'McTest',
  age: 42,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
};

// Your components go here

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
    </div>
  );
};

const App = () => {
  return <Student />;
};

export default App;
