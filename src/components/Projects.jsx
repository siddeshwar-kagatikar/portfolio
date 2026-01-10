import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="work">
      <h2 className="section-title">Selected Projects</h2>

      {/* PROJECT1 */}
      <div className="project-card">
        {/* LEFT: IMAGE */}
        <div className="project-media">
          <img src="/images/project1.png" alt="Code Evaluation Platform" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="project-info">
          <span className="year">2025</span>
          <h3>Code Evaluation Platform</h3>

          <p>
            A web platform that allows users to submit code, run test cases,
            and detect plagiarism with a scalable backend architecture.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Spring Boot</span>
            <span>Docker</span>
            <span>MySQL</span>
          </div>

          <a
            href="https://github.com/your-username/code-evaluator"
            target="_blank"
            className="project-link"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
      {/* PROJECT2 */}
      <div className="project-card">
        {/* LEFT: IMAGE */}
        <div className="project-media">
          <img src="/images/project1.png" alt="Code Evaluation Platform" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="project-info">
          <span className="year">2025</span>
          <h3>Code Evaluation Platform</h3>

          <p>
            A web platform that allows users to submit code, run test cases,
            and detect plagiarism with a scalable backend architecture.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Spring Boot</span>
            <span>Docker</span>
            <span>MySQL</span>
          </div>

          <a
            href="https://github.com/your-username/code-evaluator"
            target="_blank"
            className="project-link"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>

      {/* PROJECT3 */}
      <div className="project-card">
        {/* LEFT: IMAGE */}
        <div className="project-media">
          <img src="/images/project1.png" alt="Code Evaluation Platform" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="project-info">
          <span className="year">2025</span>
          <h3>Code Evaluation Platform</h3>

          <p>
            A web platform that allows users to submit code, run test cases,
            and detect plagiarism with a scalable backend architecture.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Spring Boot</span>
            <span>Docker</span>
            <span>MySQL</span>
          </div>

          <a
            href="https://github.com/your-username/code-evaluator"
            target="_blank"
            className="project-link"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>

      {/* PROJECT4 */}
      <div className="project-card">
        {/* LEFT: IMAGE */}
        <div className="project-media">
          <img src="/images/project1.png" alt="Code Evaluation Platform" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="project-info">
          <span className="year">2025</span>
          <h3>Code Evaluation Platform</h3>

          <p>
            A web platform that allows users to submit code, run test cases,
            and detect plagiarism with a scalable backend architecture.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Spring Boot</span>
            <span>Docker</span>
            <span>MySQL</span>
          </div>

          <a
            href="https://github.com/your-username/code-evaluator"
            target="_blank"
            className="project-link"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>

    </section>
  );
}

export default Projects;
