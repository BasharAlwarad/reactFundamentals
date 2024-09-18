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

  const handelChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handelChange} />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handelChange} />
        </div>

        <div>
          <label>Telephone:</label>
          <input type="tel" name="telephone" onChange={handelChange} />
        </div>

        <div>
          <label>Message:</label>
          <textarea name="message" onChange={handelChange} />
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
