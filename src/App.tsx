import { FC } from "react";
import "./App.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
};

export default App;
