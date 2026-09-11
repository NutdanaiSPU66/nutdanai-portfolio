import './App.css'

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          POR
        </a>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#education">EDUCATION</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <section className="hero">
  <div className="hero-content">

    <div className="hero-text">
      <p className="hero-label">
        FRONTEND DEVELOPER & UX/UI DESIGNER
      </p>

      <h1>
        NUTDANAI
        <br />
        RODMUI
      </h1>

      <p className="hero-description">
        I design interfaces and build web experiences
        that are simple, useful, and easy to understand.
      </p>

      <a href="#work" className="hero-button">
        VIEW MY WORK ↗
      </a>
    </div>

   <div className="hero-photo">
  <img
    src="/images/profile.jpeg"
    alt="Nutdanai Rodmui"
  />
</div>

  </div>
</section>
            <section className="about" id="about">
        <div className="about-header">
          <p className="section-label">ABOUT ME</p>
          <h2>
            I design and build
            <br />
            useful digital experiences.
          </h2>
        </div>

        <div className="about-content">
          <p>
            I'm Nutdanai, a Computer Science and Software Development
            Innovation student at Sripatum University with an interest
            in Frontend Development and UX/UI Design.
          </p>

          <p>
            I enjoy turning ideas and user needs into web applications
            that are simple, practical, and easy to use.
          </p>

          <p>
            My experience includes building web applications with React,
            Node.js, Express, MongoDB, and REST APIs, while also focusing
            on interface design and user experience.
          </p>
        </div>
      </section>
            <section className="work" id="work">
        <div className="work-header">
          <p className="section-label">SELECTED WORK</p>

          <h2>
            Projects I've
            <br />
            built.
          </h2>
        </div>

        <div className="projects">

          {/* Project 01 */}
          <article className="project">
            <div className="project-image">
            <img
              src="/images/pha-thai.jpeg"
              alt="PHA-THAI AI"
            />
            </div>

            <div className="project-number">01</div>

          <div className="project-info">
              <p className="project-year">
                YEAR 3 — SEMESTER 2
              </p>

              <h3>PHA-THAI AI</h3>

              <p className="project-category">
                AI / SOFTWARE DEVELOPER
              </p>

              <p className="project-description">
                An AI-powered cultural heritage knowledge platform
                for preserving and sharing Thai textile knowledge
                across 76 provinces.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>LangChain</span>
                <span>FastAPI</span>
                <span>RAG</span>
                <span>Pinecone</span>
                <span>Llama</span>
              </div>
            </div>
          </article>

          {/* Project 02 */}
          <article className="project">
            <div className="project-image">
              <img
                src="/images/thamsod.jpeg"
                alt="THAMSOD"
              />
            </div>
            <div className="project-number">02</div>

            <div className="project-info">
              <p className="project-year">
                YEAR 3 — SEMESTER 1
              </p>

              <h3>THAMSOD</h3>

              <p className="project-category">
                FULL-STACK DEVELOPER
              </p>

              <p className="project-description">
                A real-time Q&A platform designed for seminars
                and conferences, allowing audiences to ask questions
                and interact with presentations in real time.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Socket.IO</span>
                <span>JWT</span>
              </div>
            </div>
          </article>

          {/* Project 03 */}
          <article className="project">
            <div className="project-number">03</div>

            <div className="project-info">
              <p className="project-year">
                YEAR 2 — SEMESTER 2
              </p>

              <h3>FIRE EXTINGUISHER SYSTEM</h3>

              <p className="project-category">
                WEB APPLICATION / UX/UI
              </p>

              <p className="project-description">
                A responsive web application for inspecting and
                managing fire extinguishers, helping teams track
                inspection status and maintenance information.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Vite</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </article>
        </div>
      </section>
        <section className="education" id="education">
          <div className="education-header">
            <p className="section-label">EDUCATION</p>
            <h2>My academic<br />background.</h2>
          </div>

          <div className="education-item">
            <div className="education-year">
              2023 — PRESENT
            </div>

            <div className="education-info">
              <h3>SRIPATUM UNIVERSITY</h3>
              <span>
                BACHELOR OF SCIENCE
              </span>
              <p>
                Computer Science / Software Development Innovation
              </p>
              
            </div>
          </div>
        </section>
            <section className="skills" id="skills">
        <div className="skills-header">
          <p className="section-label">SKILLS</p>

          <h2>
            Tools I use
            <br />
            to build.
          </h2>
        </div>

        <div className="skills-list">

          <div className="skill-group">
            <p className="skill-group-title">
              DEVELOPMENT
            </p>

            <div className="skill-items">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>REST API</span>
              <span>MongoDB</span>
              <span>SQL</span>
              <span>Socket.IO</span>
              <span>JWT</span>
              <span>Python</span>
              <span>FastAPI</span>
            </div>
          </div>

          <div className="skill-group">
            <p className="skill-group-title">
              AI / DATA
            </p>

            <div className="skill-items">
              <span>LangChain</span>
              <span>RAG</span>
              <span>Pinecone</span>
              <span>FAISS</span>
              <span>PyThaiNLP</span>
              <span>EDA</span>
              <span>Llama</span>
              <span>Multilingual Embedding</span>
            </div>
          </div>

          <div className="skill-group">
            <p className="skill-group-title">
              DESIGN & TOOLS
            </p>

            <div className="skill-items">
              <span>Figma</span>
              <span>Git / GitHub</span>
              <span>Postman</span>
              <span>Tailwind CSS</span>
              <span>Vite</span>
            </div>
          </div>

        </div>
      </section>
            <section className="contact" id="contact">
        <div className="contact-header">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's build
            <br />
            something useful.
          </h2>
        </div>

        <div className="contact-content">
          <p>
            Have a project, an idea, or just want to say hello?
          </p>

          <a
            href="mailto:nutdanai.rodmui@gmail.com"
            className="contact-email"
          >
            nutdanai.rodmui@gmail.com
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/NutdanaiSPU66"
              target="_blank"
              rel="noreferrer"
              >
            GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/nutdanai-rodmui/"
              target="_blank"
              rel="noreferrer"
              >
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 NUTDANAI RODMUI</p>
        <p>FRONTEND DEVELOPER / UX/UI</p>
      </footer>
    </main>
  )
}

export default App