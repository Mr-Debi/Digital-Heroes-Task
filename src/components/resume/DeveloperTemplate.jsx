export default function DeveloperTemplate({ data }) {
  return (
    <div className="resume developer-template">

      <div className="left-panel">

        <h1>{data.name || "Developer Name"}</h1>

        <div className="contact-box">
          <h3>Contact</h3>

          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.location}</p>
        </div>

        <div className="contact-box">
          <h3>Links</h3>

          <p>{data.github}</p>
          <p>{data.linkedin}</p>
        </div>

        <div className="contact-box">
          <h3>Skills</h3>

          <p>{data.skills}</p>
        </div>

      </div>

      <div className="right-panel">

        <section>
          <h2>Summary</h2>
          <p>{data.summary}</p>
        </section>

        <section>
          <h2>Experience</h2>
          <p>{data.experience}</p>
        </section>

        <section>
          <h2>Projects</h2>
          <p>{data.projects}</p>
        </section>

        <section>
          <h2>Education</h2>
          <p>{data.education}</p>
        </section>

      </div>

    </div>
  );
}