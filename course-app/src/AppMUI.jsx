import React from "react";
import Course from "./components/courseMUI";
import setuCrest from "./assets/setu_crest.png";
import Box from "@mui/material/Box";

const styles = {
  appHeader: {
    backgroundColor: "lightblue",
    height: "200px",
    padding: "10px",
    color: "white",
  },
  course: {
    padding: "10px",
  },
};

const App = () => {
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
const name = "HDip Computer Science"; // Substitute

  return (
    <>
      <header style={styles.appHeader}>
        <img src={setuCrest} alt="logo" />
      </header>
      <Box sx={styles.course}>
        <Course title={name} modules={modules} />
      </Box>
    </>
  );
};
export default App;
