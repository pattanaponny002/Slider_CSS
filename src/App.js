import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";

import "./STYLE/APP/APP.css";
import Data from "./Data/IronMan.json";
import React from "react";
function App() {
  const [poster, setPoster] = React.useState([]);

  React.useEffect(() => {
    setPoster((poster) => Data.results);

    console.log(poster);

    return () => console.log("return movie");
  }, []);
  return (
    //this is my code, what i want is to make #r1 box are to be checked, and then move img margin 7 % pls give me css
    <div className="container">
      {Array.isArray(poster) &&
        poster.slice(0, 6).map((item, index) => {
          // <img className="card" src={item.poster_path} />;
          return <input type="radio" name={`buttons`} id={`r${index}`} />;
        })}
      <div className="slider">
        {Array.isArray(poster) &&
          poster.slice(0, 6).map((item, index) => {
            // <img className="card" src={item.poster_path} />;
            return <img className="card" src={item.poster_path} />;
          })}
      </div>

      <div className="controller_label">
        {Array.isArray(poster) &&
          poster.slice(0, 6).map((item, index) => {
            // <img className="card" src={item.poster_path} />;
            return <label for={`r${index}`} className="label" />;
          })}
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="section_count">
        <div className="card-font">
          <h2>Font,pasta is big, how to do</h2>
        </div>

        <div className="back-card">
          <h2>Back,pasta is big, how to do</h2>
        </div>
      </div> */
}

{
  /* <ul className="tool">
        <li>
          <a href="#section_1">hello</a>
        </li>
        <li>
          <a href="#section_2">hello</a>
        </li>
        <li>
          <a href="#section_3">hello</a>
        </li>
        <li>
          <a href="#section22">hello</a>
        </li>
      </ul>
      <section className="section" id="section_1">
        hello
      </section>
      <section className="section" id="section_2">
        hello
      </section>
      <section className="section" id="section_3">
        hello
      </section>
      <div className="section2" id="section22">
        <h2 className="title_section2">Hellio</h2>
      </div> */
}
