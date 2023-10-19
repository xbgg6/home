import Image from "next/image";
const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center text-center min-h-screen py-16">
      <div>
        <p className="text-md">Get To Know More</p>
        <h1 className="text-5xl mt-4 font-bold">About Me</h1>
      </div>
      
      <div className="flex-1 flex justify-between">
        <div className="section__pic-container">
          <Image
            width={400}
            height={400}
            src="/assets/about-pic.png"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <Image
                width={400}
                height={400}
                src="/assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <Image
                width={400}
                height={400}
                src="/assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>

      <Image
        width={400}
        height={400}
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => location.href = './#experience'}
      />
    </section>
  )
}

export default About;