import "./intro.css";
// import Navbar from "../navbar";
//import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      {/* <Navbar/> */}
      <div className="i-left">
        <div className="i-left-wrapper">
          {/* <h2 className="i-intro">Hello, My name is</h2> */}
          <h1 className="i-name">Indrajeet Patwardhan</h1>
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
  );
};

export default Intro;
