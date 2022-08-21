import { useContext } from "react";
// import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Navbar from "./components/navbar";
//import ProductList from "./components/productList/ProductList";
import Resume from "./components/resume/Resume";
import Product from "./components/product/Product";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { Route, Routes, Link } from "react-router-dom";
import Technicalwriting from "./components/technicalWriting/TechnicalWriting";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {/* <Navbar/> */}
      <Toggle />
      <Intro />
      <About />
      {/* <Resume/> */}
      <Product/>
      {/* <Technicalwriting/> */}
      <Contact />
      <Routes>
        <Route exact path="/intro" component {...Intro} />
        {/* <Route exact path="/resume" component {...Resume} /> */}
        {/* <Route exact path="/resume" component {...Resume} /> */}
        <Route exact path="/product" component {...Product} />
        <Route exact path="/contact" component {...Contact} />
      </Routes>
    </div>
  );
};

export default App;
