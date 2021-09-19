import { FC } from "react";
import "./App.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skils from "./components/pages/Skils";
import History from "./components/pages/History";

const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skils />
      <History />
    </>
  );
};

export default App;
