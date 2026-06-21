export default function FresherTemplate({ data }) {
  return (
    <div className="resume fresher-template">

      <div className="fresher-header">
        <h1>{data.name || "Student Name"}</h1>

        <p>
          {data.email} | {data.phone}
        </p>
      </div>

      <section>
        <h2>Career Objective</h2>
        <p>{data.summary}</p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <p>{data.skills}</p>
      </section>

      <section>
        <h2>Academic Projects</h2>
        <p>{data.projects}</p>
      </section>

      <section>
        <h2>Education</h2>
        <p>{data.education}</p>
      </section>

    </div>
  );
}