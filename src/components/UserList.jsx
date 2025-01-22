const UserList = ({ users, onDelete, onUpdate }) => {
  return (
    <div>
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
                onClick={() => onDelete(user.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
              <button
                onClick={() => onUpdate(user)}
                className="text-blue-600 hover:underline"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
