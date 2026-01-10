function ProjectCard({ year, title, desc }) {
  return (
    <div className="project-card">
      <span className="year">{year}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default ProjectCard;
