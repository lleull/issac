import { useState } from "react";
import "./App.css";

import "./index.css";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Performances } from "./components/Performances";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Performances />
      <Contact />
    </>
  );
}

export default App;
