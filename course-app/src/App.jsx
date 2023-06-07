import React from "react";
import Course from "./components/course";
import "./App.css";
import setuCrest from "./assets/setu_crest.png";

const App = () => {
  // Substitute your module names here (Optional).
  const modules = [
    {
      name: "DevOps",
      noLectures: 1,
      noPracticals: 2,
    },
    {
      name: "Programming",
      noLectures: 2,
      noPracticals: 3,
    },
    {
      name: "Web Dev",
      noLectures: 2,
      noPracticals: 2,
    },
    {
      name: "Mobile App Development",
      noLectures: 2,
      noPracticals: 2,
    },
    {
      name: "Databases",
      noLectures: 2,
      noPracticals: 3,
    },
  ];
  const name = "HDip in Computer Science"; // Substitute

  return (
    <>
      <header className="App-header">
        <img className="center" src={setuCrest} alt="logo" />
      </header>
      <div className="course">
        <Course title={name} modules={modules} />
      </div>
    </>
  );
};

export default App;
