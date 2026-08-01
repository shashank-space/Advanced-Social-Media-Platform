import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        glass
        mt-10
        border-t
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >
        <div>
          <h2
            className="
              text-2xl
              font-bold
              gradient-text
            "
          >
            SocialSphere
          </h2>

          <p
            className="
              text-sm
              text-gray-400
              mt-2
            "
          >
            Connect, Share and Grow
            with the next generation
            social platform.
          </p>
        </div>

        <div
          className="
            flex
            gap-5
            text-xl
          "
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-violet-400
              transition
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-cyan-400
              transition
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-sky-400
              transition
            "
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div
        className="
          text-center
          py-4
          text-sm
          text-gray-500
          border-t
          border-white/10
        "
      >
        © {new Date().getFullYear()}
        {" "}
        SocialSphere.
        All rights reserved.
      </div>
    </footer>
  );
}