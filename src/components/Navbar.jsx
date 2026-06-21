import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Digital Heroes Task</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <a
          href="https://github.com/Mr-Debi/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/debidutta-behera-164642275/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://portfolio-delta-three-wtvzpb5j1p.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Portfolio
        </a>
      </div>
    </nav>
  );
}