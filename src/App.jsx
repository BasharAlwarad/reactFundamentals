import { useState, useEffect } from 'react';
import axios from 'axios';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    age: '',
    id: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);

  // Fetch all users
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

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle user creation
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

  // Handle user update
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

  // Handle user deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${VITE_BASE_URL}/api/v1/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Handle setting update form
  const setUpdateForm = (user) => {
    setForm(user);
    setIsUpdating(true);
  };

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-5">User Management</h1>

      {/* User List */}
      <h2 className="text-xl font-semibold mb-3">Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded"
          >
            <span>
              {user.first_name} {user.last_name} (Age: {user.age})
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
              <button
                onClick={() => setUpdateForm(user)}
                className="text-blue-600 hover:underline"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Create User Form */}
      {!isUpdating && (
        <form onSubmit={handleCreate} className="mt-5 space-y-3">
          <h2 className="text-xl font-semibold">Create User</h2>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={form.first_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={form.last_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create
          </button>
        </form>
      )}

      {/* Update User Form */}
      {isUpdating && (
        <form onSubmit={handleUpdate} className="mt-5 space-y-3">
          <h2 className="text-xl font-semibold">Update User</h2>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={form.first_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={form.last_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="space-x-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => {
                setForm({ first_name: '', last_name: '', age: '', id: '' });
                setIsUpdating(false);
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default App;
