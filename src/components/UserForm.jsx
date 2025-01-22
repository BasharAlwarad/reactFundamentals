const UserForm = ({ form, onChange, onSubmit, isUpdating, onCancel }) => {
  return (
    <form onSubmit={onSubmit} className="mt-5 space-y-3">
      <h2 className="text-xl font-semibold">
        {isUpdating ? 'Update User' : 'Create User'}
      </h2>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={form.first_name}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={form.last_name}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <div className="space-x-2">
        <button
          type="submit"
          className={`${
            isUpdating ? 'bg-blue-500' : 'bg-green-500'
          } text-white px-4 py-2 rounded hover:bg-opacity-80`}
        >
          {isUpdating ? 'Update' : 'Create'}
        </button>
        {isUpdating && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
