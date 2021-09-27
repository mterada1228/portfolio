import { FC } from "react";
import "./App.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";

const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
