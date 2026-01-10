function TechMarquee() {
  return (
    <div className="tech-marquee">
      <div className="tech-track">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>React</span>
        <span>Node.js</span>
        <span>REST APIs</span>
        <span>Microservices</span>
        <span>Docker</span>
        <span>MySQL</span>
        <span>MongoDB</span>
        <span>Git</span>
        <span>System Design</span>
        <span>Distributed Systems</span>

        {/* duplicate for seamless loop */}
        <span>Java</span>
        <span>Spring Boot</span>
        <span>React</span>
        <span>Node.js</span>
        <span>REST APIs</span>
        <span>Microservices</span>
        <span>Docker</span>
        <span>MySQL</span>
        <span>MongoDB</span>
        <span>Git</span>
        <span>System Design</span>
        <span>Distributed Systems</span>
      </div>
    </div>
  );
}

export default TechMarquee;
