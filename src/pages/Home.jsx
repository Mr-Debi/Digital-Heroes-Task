import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "GST Calculator",
    description: "Calculate GST amounts instantly.",
    path: "/gst",
  },
  {
    title: "EMI Calculator",
    description: "Calculate monthly EMI payments.",
    path: "/emi",
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes from text or URLs.",
    path: "/qr",
  },
  {
    title: "Password Generator",
    description: "Generate strong secure passwords.",
    path: "/password",
  },
  {
    title: "Resume Builder",
    description: "Create and download resumes as PDF.",
    path: "/resume",
  },
  {
    title: "PDF Merger",
    description: "Merge multiple PDF files into one.",
    path: "/pdf",
  },
  {
    title: "Age Calculator",
    description: "Calculate age from date of birth.",
    path: "/age",
  },
  {
    title: "JSON Formatter",
    description: "Format and validate JSON data.",
    path: "/json",
  },
  {
    title: "Currency Converter",
    description: "Convert currencies instantly.",
    path: "/currency",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* <About /> */}

      {/* <Skills /> */}


      <section className="projects-section">
        <h2 className="section-title">Utility Tools</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              path={project.path}
            />
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Information</h2>

        <p>
          <strong>Name:</strong> Debidutta Behera
        </p>

        <p>
          <strong>Mobile:</strong> +91 7978213833
        </p>

        <p>
          <strong>Email:</strong> debidutta.db@gmail.com
        </p>

        <div className="social-links">
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
      </section>

      <section className="digital-heroes">
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="dh-btn">
            Built for Digital Heroes
          </button>
        </a>
      </section>
    </>
  );
}