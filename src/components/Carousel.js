import { useState } from "react";
import { ImgData } from "../data/ImgData";
import classes from "./styles/carousel.module.css";

const Carousel = ({ slideData }) => {
  const [imgShown, setImgShown] = useState(0);
  const length = slideData.length;

  const backwardHandler = (e) => {
    setImgShown(imgShown === 0 ? length - 1 : imgShown - 1);
  };

  const forwardHandler = (e) => {
    setImgShown(imgShown === length - 1 ? 0 : imgShown + 1);
  };

  console.log(imgShown);

  if (!Array.isArray(slideData) || slideData.length <= 0) {
    return null;
  }

  return (
    <section className={classes.carousel}>
      <button
        type="button"
        className={`${classes.carousel_button} ${classes.carousel_backward}`}
        onClick={backwardHandler}
      >
        &#60;
      </button>
      <button
        type="button"
        className={`${classes.carousel_button} ${classes.carousel_forward}`}
        onClick={forwardHandler}
      >
        &#62;
      </button>
      {ImgData.map((slide, index) => {
        return (
          <div
            className={
              index === imgShown
                ? `${classes.carousel_slide} ${classes.active}`
                : classes.carousel_slide
            }
            key={slide.shortid}
          >
            {index === imgShown && (
              <img
                src={slide.image}
                alt="Custom made furniture or wall decoration"
                className={classes.creation}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
