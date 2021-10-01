import React from "react";
import Conversion from "./components/Conversion/Conversion";
import Navbar from "./components/Navbar/Navbar";
import "./styles.css";

const App: React.FC = () => (
  <>
    <Navbar />
    <Conversion />
  </>
);

export default App;
