import Image from "next/image"

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center text-center min-h-screen py-16">
      <div>
        <p className="text-md">Contact Me</p>
        <h1 className="text-3xl tracking-widest mt-4 font-bold">联系我</h1>
      </div>
      <div className="flex">
        <div className="contact-info-container">
          <Image width={400} height={400}
            src="/assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">hualafun@foxmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <Image width={400} height={400}
            src="/assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contact;