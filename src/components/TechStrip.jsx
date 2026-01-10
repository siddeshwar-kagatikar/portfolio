function TechStrip() {
  return (
    <div className="tech-strip">
      <div className="tech-track">
        <span className="tech-item">Java</span>
        <span className="tech-item">Spring Boot</span>
        <span className="tech-item">React</span>
        <span className="tech-item">Node.js</span>
        <span className="tech-item">Docker</span>
        <span className="tech-item">Microservices</span>
        <span className="tech-item">REST APIs</span>
        <span className="tech-item">MySQL</span>
        <span className="tech-item">MongoDB</span>
        <span className="tech-item">Git</span>

        {/* duplicate for smooth loop */}
        <span className="tech-item">Java</span>
        <span className="tech-item">Spring Boot</span>
        <span className="tech-item">React</span>
        <span className="tech-item">Node.js</span>
        <span className="tech-item">Docker</span>
        <span className="tech-item">Microservices</span>
        <span className="tech-item">REST APIs</span>
        <span className="tech-item">MySQL</span>
        <span className="tech-item">MongoDB</span>
        <span className="tech-item">Git</span>
      </div>
    </div>
  );
}

export default TechStrip;
