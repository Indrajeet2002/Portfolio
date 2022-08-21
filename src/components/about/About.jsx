import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
      <div className="a-bg"></div>
        {/* <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div> */}
      </div>
      <div className="a-right">
        <div className="a-right-wrapper">
          
          <h1 className="a-title">About Me</h1>
          <div>
            <p>
              Computer Science major at <a href="http://www.fullerton.edu/" className="i-desc" target="_blank">CSUF</a>
            </p>
            <p>
              <a href="https://drive.google.com/file/d/1CPqUU96kMNw5wN-8wVw0zpTZGO6ZpNFQ/view" className="i-desc" target="_blank">Resume</a>
            </p>
            <p>
              Technical Writing:
              <ul>
                <li>
                  <a href="https://drive.google.com/file/d/1hOSVO2mKmXuDOW753yE6F-P4XLR44gpX/view" className="i-desc" target="_blank">Buffer Overflow Attacks</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1MuUlPsbO4mStJ8teKEWyYoF55rWHf1VI/view?usp=sharing" className="i-desc" target="_blank">CRC Cards Paper</a>
                </li>
              </ul>
              
            </p>
          </div>
          {/* <p className="a-sub">
            It is a long established fact that a reader will be distracted by the
            readable content.
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
          <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">International Design Awards 2021</h4>
              <p className="a-award-desc">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                and fugit.
              </p>
            </div>
          </div> */}          
        </div>

      </div>
    </div>
  );
};

export default About;
