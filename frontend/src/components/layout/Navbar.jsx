import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <NavLink
          to="/"
          className="text-2xl font-bold gradient-text"
        >
          SocialSphere
        </NavLink>

        <nav className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-violet-400"
                : "hover:text-violet-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive
                ? "text-violet-400"
                : "hover:text-violet-400"
            }
          >
            Chat
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-violet-400"
                : "hover:text-violet-400"
            }
          >
            Profile
          </NavLink>

          {user && (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 transition"
            >
              Logout
            </button>
          )}

        </nav>
      </div>
    </header>
  );
}