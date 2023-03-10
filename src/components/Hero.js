// import { useEffect, useState } from "react";
import home from "../images/Home.svg";
import porch from "../images/poorch.jpeg";
import classes from "./styles/hero.module.css";

const Hero = () => {
  // const width = window.innerWidth;

  // const [bigImg, setBigImg] = useState(false);

  // const updateWidth = () => {
  //   if (window.innerWidth > 799) {
  //     setBigImg(true);
  //   } else if (window.innerWidth < 800) {
  //     setBigImg(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateWidth);

  //   return () => {
  //     window.removeEventListener("resize", updateWidth);
  //   };
  // }, [width]);
  
  // onLoad={updateWidth}
  return (
    <div
      className={classes.hero}
      style={
        {
              backgroundImage: `url(${porch})`,
            }
      }
    >
      <div className={classes.hero_alt}>
        <img
          className={classes.porch}
          src={porch}
          alt="Custom porch swing made by B's wood creations"
        />
        <div className={classes.title_container}>
          <h1 className={classes.hero_title}>Making home,</h1>
          <img className={classes.home} src={home} alt="Home in cursive" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
