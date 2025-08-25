import { useState } from "react";
import "./App.css";

import "./index.css";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { MusicPortfolio } from "./components/MusicPortfolio";
import { Contact } from "./components/Contact";
import { Performances } from "./components/Performances";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      {/* <MusicPortfolio /> */}
      <Performances />
      <Contact />
    </>
  );
}

export default App;
