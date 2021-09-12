import { FC } from "react";
import Home from "./components/pages/Home";
import Header from "./components/pages/Header";
import "./App.css";

const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
