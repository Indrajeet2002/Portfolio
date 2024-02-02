import "./product.css";
import React from "react";
import IMG1 from "../../img/PortfolioWebsite.png"
import IMG2 from "../../img/ProgramGenerator.png"
import IMG3 from "../../img/Movify.jpg"
// import IMG4 from "../../img/JobHunter.png"
import IMG5 from "../../img/CaveEscape.png"
import IMG6 from "../../img/SnakeGame.png"
import IMG7 from "../../img/ExpenseTracker.jpg"
import IMG8 from "../../img/WorldTrotter.jpg"
import IMG9 from "../../img/SimpleCalculator.jpg"
import IMG10 from "../../img/SpaceInvaders.jpg"
import IMG11 from "../../img/Python.png"
import IMG12 from "../../img/Swift.png"
import IMG13 from "../../img/Kotlin.png"
import IMG14 from "../../img/React.jpg"
import IMG15 from "../../img/Java.png"
import IMG16 from "../../img/C++.png"


//import { NavLink } from "react-router-dom";
import { useContext } from "react";
//import { useState } from "react";
import { ThemeContext } from "../../context";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Website",
    icon: IMG14,
    description: "Personal website displaying technical skills and projects. Get to know me and feel free to contact me for collaboration on projects!",
    github: "https://github.com/Indrajeet2002/Portfolio"
  },
    
  {
    id: 2,
    image: IMG2,
    title: "Program Generator",
    icon: IMG14,
    description: "The website uses personal information and fitness goals to generate a fitness program for the user.",
    github: "https://github.com/Indrajeet2002/Program-Generator-React"
  },

  {
    id: 3,
    image: IMG3,
    title: "Movify",
    icon: IMG14,
    description: "The website allows users to make an account and create personalized playlists of their favorite movies.",
    github: "https://github.com/Indrajeet2002/my-app"
  },

  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Job Hunter",
  //   icon: <img src= "https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" alt="React logo" width="50" height="50" />,
  //   description: "The website allows employers and employees to make an account, as well as post jobs and apply for jobs, respectively.",
  //   github: "https://github.com/Indrajeet2002/Job-Hunter"
  // },

  {
    id: 4,
    image: IMG10,
    title: "Space Invaders",
    icon: IMG11,
    description: "A remake of the old arcade game where you have to defend Earth from alien ships. Use the barriers for protection, and destroy all aliens!",
    github: "https://github.com/Indrajeet2002/Space-Invaders-master-main"
  },

  {
    id: 5,
    image: IMG5,
    title: "Cave Escape",
    icon: IMG15,
    description: "This is a text based game in which the player has to move through several rooms collecting items and escape.",
    github: "https://github.com/Indrajeet2002/CaveEscape"
  },

  {
    id: 6,
    image: IMG6,
    title: "Snake Game",
    icon: IMG16,
    description: "The good old snake game; eat the fruit to become longer and get the high score, but don't hit the wall or yourself!",
    github: "https://github.com/Indrajeet2002/SnakeGame"
  },

  {
    id: 7,
    image: IMG7,
    title: "Expense Tracker",
    icon: IMG12,
    description: "An IOS app that allows users to create accounts and manage their finances based on categories of expenses.",
    github: "https://github.com/Indrajeet2002/Expense-Tracker"
  },

  {
    id: 8,
    image: IMG8,
    title: "World Trotter",
    icon: IMG12,
    description: "An IOS app that allows for conversion between Fahrenheit and Celsius as well as translation between English and Spanish.",
    github: "https://github.com/Indrajeet2002/World-Trotter"
  },

  {
    id: 9,
    image: IMG9,
    title: "Basic Calculator",
    icon: IMG13,
    description: "A mobile calculator to use for basic arithmetic operations and quick calculations. More functionality to be added.",
    github: ""
  }
]



const Product = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Split the data array into three sections
  const dataSection1 = data.slice(0, 3);
  const dataSection2 = data.slice(3, 6);
  const dataSection3 = data.slice(6, 9);

  return (
    <section id="product">
      <h1 className="portfolio__section-title">Projects</h1>
      <h2 className="portfolio__category-title">Web Development</h2>
      {/* Map for items 1-3 */}
      <div className="container portfolio__container">
        {dataSection1.map(({ id, image, title, icon, description, github }) => {
          const cardClass = "project-card"; // Assuming all are project cards

          return (
            <div
              key={id}
              style={{ backgroundColor: darkMode && "#333" }}
              className={cardClass}
            >
              <img src={image} alt={title} />
              
              <div className="pro-details">
                <h2>{title}</h2>
                <div className="icon">
                  <img src={icon} alt={title} />
                </div>
                <p>{description}</p>
                <div className="pro-btns">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="portfolio__category-title">Game Development</h2>
      {/* Map for items 4-6 */}
      <div className="container portfolio__container">
        {dataSection2.map(({ id, image, title, icon, description, github }) => {
          const cardClass = "project-card"; // Assuming all are project cards

          return (
            <div
              key={id}
              style={{ backgroundColor: darkMode && "#333" }}
              className={cardClass}
            >
              <img src={image} alt={title} />
              
              <div className="pro-details">
                <h2>{title}</h2> 
                <div className="icon">
                  <img src={icon} alt={title} />
                </div>
                <p>{description}</p>
                <div className="pro-btns">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="portfolio__category-title">Mobile Development</h2>
      {/* Map for items 7-9 */}
      <div className="container portfolio__container">
        {dataSection3.map(({ id, image, title, icon, description, github }) => {
          const cardClass = "mobile-card"; // Assuming all are project cards

          return (
            <div
              key={id}
              style={{ backgroundColor: darkMode && "#333" }}
              className={cardClass}
            >
              <img src={image} alt={title} />
              
              <div className="pro-details">
                <h2>{title}</h2>
                <div className="mobile-icon">
                  <img className="mobile-icon" src={icon} alt={title} />
                </div>
                <p>{description}</p>
                <div className="pro-btns">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Product;