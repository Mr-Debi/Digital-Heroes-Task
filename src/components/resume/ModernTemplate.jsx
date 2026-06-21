export default function ModernTemplate({ data }) {
  return (
    <div className="resume modern-template">

      <div className="resume-header">
        <h1>{data.name || "Your Name"}</h1>

        <p>
          {data.email} • {data.phone}
        </p>

        <p>
          {data.location}
        </p>
      </div>

      <div className="resume-section">
        <h2>Professional Summary</h2>
        <p>{data.summary}</p>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <p>{data.skills}</p>
      </div>

      <div className="resume-section">
        <h2>Experience</h2>
        <p>{data.experience}</p>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <p>{data.education}</p>
      </div>

      <div className="resume-section">
        <h2>Projects</h2>
        <p>{data.projects}</p>
      </div>

    </div>
  );
}