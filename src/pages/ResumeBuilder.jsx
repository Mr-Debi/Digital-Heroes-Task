import { useState } from "react";
import jsPDF from "jspdf";

import ModernTemplate from "../components/resume/ModernTemplate";
import DeveloperTemplate from "../components/resume/DeveloperTemplate";
import FresherTemplate from "../components/resume/FresherTemplate";

export default function ResumeBuilder() {
  const [template, setTemplate] = useState("modern");

  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
  });

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(22);
    doc.text(resume.name || "Your Name", 20, y);

    y += 10;

    doc.setFontSize(11);
    doc.text(
      `${resume.email} | ${resume.phone}`,
      20,
      y
    );

    y += 8;
    doc.text(resume.location, 20, y);

    y += 10;
    doc.text(`LinkedIn: ${resume.linkedin}`, 20, y);

    y += 8;
    doc.text(`GitHub: ${resume.github}`, 20, y);

    y += 15;

    doc.setFontSize(16);
    doc.text("Professional Summary", 20, y);

    y += 8;
    doc.setFontSize(11);

    doc.text(
      doc.splitTextToSize(resume.summary, 170),
      20,
      y
    );

    y += 25;

    doc.setFontSize(16);
    doc.text("Skills", 20, y);

    y += 8;

    doc.setFontSize(11);
    doc.text(
      doc.splitTextToSize(resume.skills, 170),
      20,
      y
    );

    y += 15;

    doc.setFontSize(16);
    doc.text("Education", 20, y);

    y += 8;

    doc.setFontSize(11);
    doc.text(
      doc.splitTextToSize(resume.education, 170),
      20,
      y
    );

    y += 20;

    doc.setFontSize(16);
    doc.text("Experience", 20, y);

    y += 8;

    doc.setFontSize(11);
    doc.text(
      doc.splitTextToSize(resume.experience, 170),
      20,
      y
    );

    y += 25;

    doc.setFontSize(16);
    doc.text("Projects", 20, y);

    y += 8;

    doc.setFontSize(11);
    doc.text(
      doc.splitTextToSize(resume.projects, 170),
      20,
      y
    );

    doc.save("Resume.pdf");
  };

  return (
    <div className="tool-page">
      <div className="tool-container">

        <h2>Resume Builder</h2>

        <select
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
        >
          <option value="modern">
            Modern Professional
          </option>

          <option value="developer">
            Software Developer
          </option>

          <option value="fresher">
            Fresher
          </option>
        </select>

        <h3>Contact Information</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn URL"
          onChange={handleChange}
        />

        <input
          type="text"
          name="github"
          placeholder="GitHub URL"
          onChange={handleChange}
        />

        <h3>Professional Summary</h3>

        <textarea
          name="summary"
          placeholder="Write your professional summary..."
          onChange={handleChange}
        />

        <h3>Skills</h3>

        <textarea
          name="skills"
          placeholder="React, Python, Django, SQL..."
          onChange={handleChange}
        />

        <h3>Education</h3>

        <textarea
          name="education"
          placeholder="Degree, College, Passing Year..."
          onChange={handleChange}
        />

        <h3>Experience</h3>

        <textarea
          name="experience"
          placeholder="Company, Role, Duration..."
          onChange={handleChange}
        />

        <h3>Projects</h3>

        <textarea
          name="projects"
          placeholder="Project Name and Description..."
          onChange={handleChange}
        />

        <button
          className="download-btn"
          onClick={downloadPDF}
        >
          Download Resume PDF
        </button>

        <div className="result-box">
          <h2>Resume Preview</h2>

          {template === "modern" && (
            <ModernTemplate data={resume} />
          )}

          {template === "developer" && (
            <DeveloperTemplate data={resume} />
          )}

          {template === "fresher" && (
            <FresherTemplate data={resume} />
          )}
        </div>

      </div>
    </div>
  );
}