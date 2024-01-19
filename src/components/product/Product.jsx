import "./product.css";
import React from "react";
//TODO: import 5 images
import IMG1 from "../../img/PortfolioWebsite.png"
import IMG2 from "../../img/ProgramGenerator.png"
import IMG3 from "../../img/Movify.jpg"
import IMG4 from "../../img/JobHunter.png"
import IMG5 from "../../img/CaveEscape.png"
import IMG6 from "../../img/SnakeGame.png"
//import { NavLink } from "react-router-dom";
import { useContext } from "react";
//import { useState } from "react";
import { ThemeContext } from "../../context";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Website",
    description: "Personal website displaying technical skills and projects.",
    github: "https://github.com/Indrajeet2002/Portfolio"
  },
    
  {
    id: 2,
    image: IMG2,
    title: "Program Generator",
    description: "The website uses personal information to generate a fitness program for the user.",
    github: "https://github.com/Indrajeet2002/Program-Generator-React"
  },

  {
    id: 3,
    image: IMG3,
    title: "Movify",
    description: "The website allows users to make an account and create personalized playlists of their favorite movies.",
    github: "https://github.com/Indrajeet2002/my-app"
  },

  {
    id: 4,
    image: IMG4,
    title: "Job Hunter",
    description: "The website allows employers and employees to make an account, as well as post jobs and apply for jobs, respectively.",
    github: "https://github.com/Indrajeet2002/Job-Hunter"
  },

  {
    id: 5,
    image: IMG5,
    title: "Cave Escape",
    description: "This is a text based game in which the player has to move through several rooms collecting items and escape.",
    github: "https://github.com/Indrajeet2002/CaveEscape"
  },

  {
    id: 6,
    image: IMG6,
    title: "Snake Game",
    description: "The good old snake game; eat the fruit to become longer and get the high score.",
    github: "https://github.com/Indrajeet2002/SnakeGame"
  },

  // {
  //   id: 7,
  //   image: IMG6,
  //   title: "Expense Tracker",
  //   description: "An IOS app that allows users to create accounts and manage their finances based on categories of expenses.",
  //   github: "https://github.com/Indrajeet2002/Expense-Tracker"
  // },

  // {
  //   id: 8,
  //   image: IMG6,
  //   title: "World Trotter",
  //   description: "An IOS app that allows for conversion between Fahrenheit and Celsius as well as translation between English and Spanish.",
  //   github: "https://github.com/Indrajeet2002/World-Trotter"
  // },

  // {
  //   id: 6,
  //   //image: ,
  //   title: "kl",
  //   description: "",
  //   github: ""
  // }
]



const Product = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section id="product">
      <h1 className="portfolio__section-title">Projects</h1>
      {/* <p>Web Development</p> */}
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github}) => {
            return(
              // <div className="p">
              //   <div className="p-browser">
              //     <div className="p-circle"></div>
              //     <div className="p-circle"></div>
              //     <div className="p-circle"></div>
              //   </div>

              //   <div className="project-container">
              //     <article key={id} className="portfolio__item">
              //       <div className="portfolio__item-image">
              //         <img src={image} alt={title}/>
              //       </div>
                    
              //       <h3 className="portfolio__section-card-title">{title}</h3>
                    
              //       <div className="pro-details">
              //         <h3 className="portfolio__section-description">{description}</h3>  
              //       </div>
                    
              //       <div className="portfolio__item-cta">
              //         <a href={github} className="btn" target="_blank">Github</a>
              //       </div>
              //     </article>
              //   </div>

                
              // </div>
              <div className="work-container">
                <div className="project-container">
                  <div style={{backgroundColor: darkMode && "#333"}} className="project-card">
                    <img src={image} alt={title}/>
                    <h2>{title}</h2>
                    <div className="pro-details">
                      <p>{description}</p>
                      <div className="pro-btns">
                        <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            )
          })
        }
        
      </div>

      {/* <p>Mobile Development</p>
      <p>Game Development</p> */}
    </section>
  )
}

export default Product;

