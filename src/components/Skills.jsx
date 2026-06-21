const skills = [
  "Python",
  "Django",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "REST APIs",
  "Git",
  "GitHub",
  "Bootstrap",
  "Machine Learning"
];

export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}