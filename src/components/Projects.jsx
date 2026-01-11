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
          <h3>CodeHive</h3>

          <p>
            Built a full-stack web app for coding assessments and interviews with role-based access, integrated code
            editor, multi-language compiler (5 languages), and video call support. Developed admin dashboard for managing questions, 
            editing test cases, and running plagiarism checks across student submissions. Created interview module with live video 
            calls and collaborative coding to streamline technical interviews.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Spring Boot</span>
            <span>Docker</span>
            <span>MySQL</span>
          </div>

          <a
            href="https://github.com/siddeshwar-kagatikar/codeHive.git"
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
          <img src="/images/project2.png" alt="EmergiGo – Intelligent Ambulance Allocation System" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="project-info">
          <span className="year">2025</span>
          <h3>EmergiGo – Intelligent Ambulance Allocation System</h3>

          <p>
            Built EmergiGo, a microservices-based emergency ambulance dispatch platform 
            with dynamic ML-driven pricing. Deployed containerized services on Kubernetes 
            with CI/CD using Jenkins and managed ML lifecycle using MLflow.
          </p>

          <div className="tech-stack">
            <span>Spring Boot</span>
            <span>Microservices</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>Jenkins</span>
            <span>MLflow</span>
          </div>

          <a
            href="https://github.com/siddeshwar-kagatikar/EmergiGo.git"
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
          <img src="/images/project3.png" alt="Tomato Segmentation and Classification" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="project-info">
          <span className="year">2025</span>
          <h3>Tomato Segmentation and Classification</h3>

          <p>
            Built an automated pipeline to segment and classify tomatoes using SAM2 and CLIP under the guidance of
            Professor Uttam Kumar, leveraging ISRO field datasets from 30, 40, and 50 DAP stages. Used cosine similarity on 
            CLIP embeddings for classification, achieving 95%+ accuracy in yield estimation cross 500+ field images.
          </p>

          <div className="tech-stack">
            <span>Computer Vision</span>
            <span>PyTorch</span>
            <span>OpenCV</span>
            <span>Python</span>
          </div>

          <a
            href="https://github.com/siddeshwar-kagatikar/SRIP.git"
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
          <img src="/images/project4.png" alt="Job Portal" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="project-info">
          <span className="year">2025</span>
          <h3>Job Portal</h3>

          <p>
            Built a job portal with job postings, applications, and recruiter dashboards;
            migrated the system from a monolith to a microservices architecture for improved 
            scalability and independent deployments. Implemented circuit breaker–based fault 
            isolation and asynchronous communication, achieving ∼99.8% service availability during failure testing.
          </p>

          <div className="tech-stack">
            <span>Spring Boot</span>
            <span>React,</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>RabbitMQ</span>
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

      {/* PROJECT5*/}
      <div className="project-card">
        {/* LEFT: IMAGE */}
        <div className="project-media">
          <img src="/images/project5.png" alt="TerraGaurd" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="project-info">
          <span className="year">2024</span>
          <h3>TerraGaurd</h3>

          <p>
            Engineered a geospatial pipeline using GEE, Landsat 8 to classify land cover (2015–2020) in the Amazon
            using Random Forest and SVM, achieving up to 89% accuracy. Optimized data preprocessing by implementing cloud 
            masking, boosting model accuracy to 92%. Automated extraction of NDVI, CHIRPS, and SRTM, to generate erosion 
            risk and land use maps, revealing deforestation and urban expansion as major erosion drivers.
          </p>

          <div className="tech-stack">
            <span>Google Earth Engine</span>
            <span>JavaScript</span>
            <span>Machine Learning</span>
          </div>

          <a
            href="https://github.com/siddeshwar-kagatikar/-TerraGaurd.git"
            target="_blank"
            className="project-link"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>

      {/* PROJECT6*/}
      <div className="project-card">
        {/* LEFT: IMAGE */}
        <div className="project-media">
          <img src="/images/project6.png" alt="LibroSphere" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="project-info">
          <span className="year">2024</span>
          <h3>LibroSphere</h3>

          <p>
            Built a secure client-server Library System in C using socket programming for real-time, concurrent access.
            Implemented multithreading, system calls, file locking, and semaphores to ensure data consistency and
            robust concurrency control during simultaneous user operations. Created admin/user interfaces with secure authentication 
            for inventory, borrowing, and return management.
          </p>

          <div className="tech-stack">
            <span>C</span>
            <span>Socket Programming</span>
            <span>Multithreading</span>
            <span>File Locking</span>
          </div>

          <a
            href="https://github.com/siddeshwar-kagatikar/Library_Management.git"
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
