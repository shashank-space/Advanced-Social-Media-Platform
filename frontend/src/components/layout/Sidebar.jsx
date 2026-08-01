import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="glass w-64 min-h-screen p-6">
      <ul className="space-y-6">
        <li>
          <Link to="/">
            🏠 Home
          </Link>
        </li>

        <li>
          <Link to="/profile">
            👤 Profile
          </Link>
        </li>

        <li>
          <Link to="/chat">
            💬 Chat
          </Link>
        </li>

        <li>
          <Link to="/settings">
            ⚙ Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}