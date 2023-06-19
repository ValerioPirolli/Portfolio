import "./scss/About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about_header">About</div>
      <p className="text">
        I am a 22-year-old guy, born in Rome. I have considered becoming a
        front-end developer after creating and managing a website using
        WordPress. This website sparked my passion for web app development.
      </p>
      <div className="about_header">Experience</div>
      <div>
        <h2 className="subtitle">Graduation</h2>
        <p className="text">
          Diploma in Automation obtained from Enrico Fermi Technical Institute
          in Rome.
        </p>
      </div>
      <div>
        <h2 className="subtitle">Professional course</h2>
        <p className="text">
          I attended a six-month course where I learned the fundamentals of
          Front-End and Back-End development. The last month of the course was
          dedicated to creating a website.
        </p>
      </div>
      <div>
        <h2 className="subtitle">Working</h2>
        <p className="text">
          I developed an e-commerce website using WordPress and a hosting
          platform for approximately six months. I also studied the basics of
          UX/UI and connected two companies through the website.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
