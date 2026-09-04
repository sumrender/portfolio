export default function Experience({ exp }) {
  return (
    <div className="experience-container">
      <div className="experience">
        <p className="exp-date">{exp.date}</p>
        <p className="exp-name">{exp.name}</p>
        <p className="exp-desc">{exp.desc}</p>
      </div>
    </div>
  );
}
