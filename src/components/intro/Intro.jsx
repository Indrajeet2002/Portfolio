import "./intro.css";
// import Navbar from "../navbar";
//import Me from "../../img/me.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="i">
        {/* <Navbar/> */}
        <div className="i-left">
          <div className="i-left-wrapper">
            {/* <h2 className="i-intro">Hello, My name is</h2> */}
            <h1 className="i-name">Indrajeet Patwardhan</h1>
            <p>
              Hello, I am a Graduate student at UCI working towards my Master's degree in Data Science. I have a passion for
              artificial intelligence/machine learning, and have industry experience in Web Development. I have contributed to projects in Python, Java and C++,
              and also have knowledge of Javascript as well as front end frameworks such as React, Angular and Streamlit. I am looking
              forward to using my skills to contribute to future projects and develop new solutions.
            </p>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">Intern</div>
                <div className="i-title-item">Tutor</div>
                <div className="i-title-item">Martial Artist</div>
              </div>
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          {/* <img src={Me} alt="" className="i-img" /> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
