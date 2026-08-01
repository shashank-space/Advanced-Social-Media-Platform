import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          text-center
          max-w-4xl
        "
      >
        <h1
          className="
            text-6xl
            md:text-7xl
            font-black
            gradient-text
          "
        >
          Build. Connect. Share.
        </h1>

        <p
          className="
            mt-8
            text-lg
            md:text-xl
            text-gray-400
            leading-relaxed
          "
        >
          A next-generation social platform
          featuring real-time chat,
          secure authentication,
          cloud media uploads,
          notifications, and seamless user interaction.
        </p>

        <div
          className="
            mt-10
            flex
            justify-center
            gap-5
            flex-wrap
          "
        >
          <Link to="/register">
            <Button>
              Get Started
            </Button>
          </Link>

          <Link to="/login">
            <Button
              className="
                from-slate-700
                to-slate-800
              "
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}