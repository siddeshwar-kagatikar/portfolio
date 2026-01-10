function Projects() {
  return (
    <section>
      <h2 className="projects-title">Selected Projects</h2>

      <div className="projects-grid reveal-stagger">

        <div className="project-card">
          <img src="/images/codehive.png" alt="CodeHive" />
          <h3>CodeHive</h3>
          <p className="tech">Spring Boot • React • Microservices</p>
          <p>
            Online code evaluation platform with plagiarism detection and
            fault-tolerant backend architecture.
          </p>
          <a href="https://github.com/your-github/codehive" target="_blank">
            View Project →
          </a>
        </div>

        <div className="project-card">
          <h3>Job Portal (Microservices)</h3>
          <p className="tech">Spring Boot • Docker • REST APIs</p>
          <p>
            Designed a distributed job portal using independent services
            and resilient communication patterns.
          </p>
          <a href="https://github.com/your-github/job-portal" target="_blank">
            View Project →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
