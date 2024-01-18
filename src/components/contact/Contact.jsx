// import "./contact.css";
// import Phone from "../../img/phone.png";
// import Email from "../../img/email.png";
// //import Address from "../../img/address.png";
// import LinkedIn from "../../img/linkedin.png";
// import { useContext, useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

// const Contact = () => {
//   const formRef = useRef();
//   const [done, setDone] = useState(false)
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_7vzfwpa",
//         "template_tj1ic8a",
//         formRef.current,
//         "user_fbyQUwgSEd0vBKh6p"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true)
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="c">
//       <div className="c-bg"></div>
//       <div className="c-wrapper">
//         <div className="c-left">
//           <h1 className="c-title">Contact me</h1>
//           <div className="c-info">
//             <div className="c-info-item">
//               <img src={Phone} alt="" className="c-icon" />
//               949 872 9524
//             </div>
//             <div className="c-info-item">
//               <img className="c-icon" src={Email} alt="" />
//               indrajeet.patwardhan@gmail.com
//             </div>
//             <div className="c-info-item">
//               {/* <img className="c-icon" src={Address} alt="" />
//               37 Almador, Irvine, CA, 92614, United States */}
//               <img className="c-icon" src={LinkedIn} alt="" />
//               <a href="linkedin.com/in/indrajeet-patwardhan-163b08211">LinkedIn</a>
              
//               {/* LinkedIn */}
//             </div>
//             <div className="c-info-item">
//               {/* <img className="c-icon" src={Address} alt="" />
//               37 Almador, Irvine, CA, 92614, United States */}
//               Resume
//             </div>
//           </div>
//         </div>
//         <div className="c-right">
//           <p className="c-desc">
//             {/* <b>What’s your story?</b> Get in touch. Always available for
//             freelancing if the right project comes along. me. */}
//           </p>
//           <form ref={formRef} onSubmit={handleSubmit}>
//             <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
//             <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
//             <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
//             <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
//             <button>Submit</button>
//             {done && "Thank you..."}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import "./contact.css"
import { useRef } from 'react';
import emailjs from "emailjs-com"
//import Phone from "../../img/phone.png";
import Whatsapp from "../../img/whatsapp.png";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.png";
import { useContext } from "react";
//import { useState } from "react";
import { ThemeContext } from "../../context";
// import icons
// import {MdOutlineEmail} from "react-icons/md"
// import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  const form = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7vzfwpa', 'template_tj1ic8a', form.current, 'fbyQUwgSEd0vBKh6p')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (


    <div className="c">
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Contact me</h1>
        <div className="c-info">
          <div className="c-info-item">
          <article className="contact__option">
                {/* <MdOutlineEmail classname="contact__option-icon"/> */}
                <img className="c-icon" src={Email} alt="" />
                <h3>Email</h3>
                <h4>Indrajeet.patwardhan@gmail.com</h4>
                <a href="mailto:Indrajeet.patwardhan@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>
          </div>
          <div className="c-info-item">
          <article className="contact__option">
              {/* <BsWhatsapp classname="contact__option-icon"/> */}
              <img className="c-icon" src={Whatsapp} alt="" />
              <h3>Whatsapp</h3>
              <h4>9498729524</h4>
              <a href="https://api.whatsapp.com/send?phone=9498729524" target="_blank" rel="noreferrer">Send a message</a>
            </article>
          </div>
          <div className="c-info-item">
          <article className="contact__option">
              {/* <BsWhatsapp classname="contact__option-icon"/> */}
              <img className="c-icon" src={LinkedIn} alt="" />
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/indrajeet-patwardhan-163b08211/" target="_blank" rel="noreferrer">View Profile</a>
            </article>
          </div>
        </div>
      </div>
      <div className="c-right">
        <p className="c-desc">
          {/* <b>What’s your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me. */}
        </p>
        <form ref={form} onSubmit={sendEmail}>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" name="name" placeholder="Your Full Name" required />
              <input style={{backgroundColor: darkMode && "#333"}} type="email" name="email" placeholder="Your Email" required />
              <textarea style={{backgroundColor: darkMode && "#333"}} name="message" rows="7" placeholder="Your Message" required ></textarea>
              {/* <button type="submit" className="btn btn-primary">Send Message</button> */}
              <button>Submit</button>
            </form>
      </div>
    </div>
  </div>




    // <div className="c">
    //   <div className="c-bg"></div>
      
    //   <section id="contact">
    //     <h2 className="c-title">Contact Me</h2>
        
    //     <div className="container contact__container">
    //       <div className="contact__options">
    //       <div className="c-info-item">
    //         <article className="contact__option">
    //             {/* <MdOutlineEmail classname="contact__option-icon"/> */}
    //             <img className="c-icon" src={Email} alt="" />
    //             <h3>Email</h3>
    //             <h4>Indrajeet.patwardhan@gmail.com</h4>
    //             <a href="mailto:Indrajeet.patwardhan@gmail.com" target="_blank">Send a message</a>
    //         </article>
    //       </div>

    //       <div className="c-info-item">
    //         <article className="contact__option">
    //           {/* <BsWhatsapp classname="contact__option-icon"/> */}
    //           <img className="c-icon" src={Whatsapp} alt="" />
    //           <h3>Whatsapp</h3>
    //           <h4>9498729524</h4>
    //           <a href="https://api.whatsapp.com/send?phone=9498729524" target="_blank">Send a message</a>
    //         </article>
    //       </div>

    //       <div className="c-info-item">
    //         <article className="contact__option">
    //           {/* <BsWhatsapp classname="contact__option-icon"/> */}
    //           <img className="c-icon" src={LinkedIn} alt="" />
    //           <h3>LinkedIn</h3>
    //           <a href="https://www.linkedin.com/in/indrajeet-patwardhan-163b08211/" target="_blank">View Profile</a>
    //         </article>
    //       </div>

    //       </div>
    //       {/* END OF CONTACT OPTIONS */}
    //       <div className="c-right">
    //         <form ref={form} onSubmit={sendEmail}>
    //           <input style={{backgroundColor: darkMode && "#333"}} type="text" name="name" placeholder="Your Full Name" required />
    //           <input style={{backgroundColor: darkMode && "#333"}} type="email" name="email" placeholder="Your Email" required />
    //           <textarea style={{backgroundColor: darkMode && "#333"}} name="message" rows="7" placeholder="Your Message" required ></textarea>
    //           <button type="submit" className="btn btn-primary">Send Message</button>
    //         </form>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  )
}

export default Contact