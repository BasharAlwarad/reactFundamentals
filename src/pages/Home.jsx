import { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const Home = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    age: '',
    id: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${VITE_BASE_URL}/api/v1/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle create user
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${VITE_BASE_URL}/api/v1/users`, {
        first_name: form.first_name,
        last_name: form.last_name,
        age: form.age,
      });
      setForm({ first_name: '', last_name: '', age: '', id: '' });
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Handle update user
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${VITE_BASE_URL}/api/v1/users/${form.id}`, {
        first_name: form.first_name,
        last_name: form.last_name,
        age: form.age,
      });
      setForm({ first_name: '', last_name: '', age: '', id: '' });
      setIsUpdating(false);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Handle delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${VITE_BASE_URL}/api/v1/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Set form for update
  const setUpdateForm = (user) => {
    setForm(user);
    setIsUpdating(true);
  };

  return (
    <div className="p-5 font-sans">
      <UserList
        users={users}
        onDelete={handleDelete}
        onUpdate={setUpdateForm}
      />
      <UserForm
        form={form}
        onChange={handleChange}
        onSubmit={isUpdating ? handleUpdate : handleCreate}
        isUpdating={isUpdating}
        onCancel={() => {
          setForm({ first_name: '', last_name: '', age: '', id: '' });
          setIsUpdating(false);
        }}
      />
    </div>
  );
};

export default Home;
