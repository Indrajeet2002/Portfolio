import React, { useEffect } from 'react';
import "./about.css";
//import Award from "../../img/award.png";

const About = () => {

  useEffect(() => {
    // Select all elements with the class '.card__inner'
    const cards = document.querySelectorAll(".card__inner");
  
    // Define the click event handler function
    const handleCardClick = function (e) {
      // Toggle the 'is-flipped' class for the clicked card
      this.classList.toggle('is-flipped');
    };
  
    // Add click event listener to each card
    cards.forEach(card => {
      card.addEventListener("click", handleCardClick);
    });
  
    // Cleanup the event listeners on component unmount
    return () => {
      // Remove click event listener from each card
      cards.forEach(card => {
        card.removeEventListener("click", handleCardClick);
      });
    };
  }, []);
  

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
        <div className="a-right-wrapper a-card-container">
          
          <h1 className="a-title">About Me</h1>

            <div class="card">
              <div class="card__inner">
                <div class="card__face card__face--front">
                  <h2>Education</h2>
                </div>
                <div class="card__face card__face--back">
                  <div class="card__content">
                    <div class="card__body">
                      <ul>
                        <li>Bachelor's Degree in Computer Science at CSUF</li>
                        <li><a href="https://drive.google.com/file/d/1INKSLM9CxSArLdIrU5rUczb1JzXcbd9b/view?usp=sharing" class="i-desc" target="_blank" rel="noreferrer">Resume</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__inner">
                <div class="card__face card__face--front">
                  <h2>Experience</h2>
                </div>
                <div class="card__face card__face--back">
                  <div class="card__content">
                    <div class="card__body">
                      <ul><li>Project Intern at LTIMindtree</li>
                        <li>Summer Research Intern with ASSURE-US</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__inner">
                <div class="card__face card__face--front">
                  <h2>Technical Writing</h2>
                </div>
                <div class="card__face card__face--back">
                  <div class="card__content">
                    <div class="card__body">
                      <ul>
                        <li><a href="https://drive.google.com/file/d/1hOSVO2mKmXuDOW753yE6F-P4XLR44gpX/view" class="i-desc" target="_blank" rel="noreferrer">Buffer Overflow Attacks</a></li>
                        <li><a href="https://drive.google.com/file/d/1MuUlPsbO4mStJ8teKEWyYoF55rWHf1VI/view?usp=sharing" class="i-desc" target="_blank" rel="noreferrer">CRC Cards Paper</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>

      </div>
    </div>
  );
};

export default About;
