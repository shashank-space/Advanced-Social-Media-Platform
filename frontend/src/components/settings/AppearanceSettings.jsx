import { useTheme } from "../../context/ThemeContext";

export default function AppearanceSettings() {
  const {
    darkMode,
    toggleTheme,
  } = useTheme();

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-4">
        Appearance
      </h2>

      <button
        onClick={toggleTheme}
        className="
          bg-violet-600
          px-4
          py-2
          rounded-lg
        "
      >
        {darkMode
          ? "Light Mode"
          : "Dark Mode"}
      </button>
    </div>
  );
}