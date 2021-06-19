import { FC } from "react";
import Home from "./components/pages/Home";
import AppAppBar from "./components/pages/AppAppBar";
import "./App.css";

const App: FC = () => {
  return (
    <>
      <AppAppBar />
      <Home />
    </>
  );
};

export default App;
