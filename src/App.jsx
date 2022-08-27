import { useState } from "react";
import "./App.css";
import Develop from "./components/Develop";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Gallery />
      <Video />
      <Develop />
      <Footer />
    </div>
  );
}

export default App;
