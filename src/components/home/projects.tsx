import Image from "next/image"

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Projects</p>
      <h1 className="title">项目</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <Image width={400} height={400}
                src="/assets/project-1.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href = 'https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href = 'https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <Image width={400} height={400}
                src="/assets/project-2.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href = 'https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href = 'https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <Image width={400} height={400}
                src="/assets/project-3.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href = 'https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href = 'https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <Image width={400} height={400}
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => location.href = './#contact'}
      />
    </section>

  )
}


export default Projects;