import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, telephone, message } = e.target;
    setForm({
      ...form,
      name: name.value,
      email: email.value,
      telephone: telephone.value,
      message: message.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>

        <div>
          <label>Telephone:</label>
          <input type="tel" name="telephone" />
        </div>

        <div>
          <label>Message:</label>
          <textarea name="message" />
        </div>

        <button type="submit">Submit</button>
      </form>
      <p>{form.name} </p>
      <p>{form.email} </p>
      <p>{form.telephone} </p>
      <p>{form.message} </p>
    </div>
  );
}

export default App;
