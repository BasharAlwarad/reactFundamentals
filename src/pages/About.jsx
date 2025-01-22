import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className="p-5 font-sans">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <p className="text-lg leading-relaxed mb-4">
        Learn more about this app and the team behind it.
      </p>

      {/* Navigation for nested routes */}
      <nav className="space-x-4 mb-5">
        <NavLink
          to="app"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 underline'
              : 'text-gray-700 hover:underline'
          }
        >
          About the App
        </NavLink>
        <NavLink
          to="team"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 underline'
              : 'text-gray-700 hover:underline'
          }
        >
          About the Team
        </NavLink>
      </nav>

      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default About;
