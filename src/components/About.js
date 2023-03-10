import Brandon from "../images/Brandon.jpg";
import classes from "./styles/about.module.css";

const About = () => {
  return (
    <div className={classes.container} id="about">
      <div className={classes.about_container}>
        <div className={classes.img_container}>
          <img
            className={classes.brandon}
            src={Brandon}
            alt="Brandon and his wife"
          />
        </div>
        <div className={classes.message_container}>
          <p className={classes.message}>
            Hello I'm Brandon and with me is my lovely wife Breanna. Since 2014
            I've had a passion for creating custom farmhouse furniture.
          </p>{" "}
          <p className={classes.message}>
            It started off small, repurposing an old dresser my wife and I found
            on the side of the road. As my passion grew, I took a leap of faith
            in 2019 and started B's Wood Creations LLC.
          </p>
          <p className={classes.message}>
            My wife and I are big believers in following our dreams and allowing
            our passions to lead towards growth and expansion. Because of this I
            have an amazing opportunity to imagine and build beautiful pieces of
            furniture for family, friends and you!
          </p>
          <p className={classes.message}>
            Sure I get splinters and dings daily, but it is so worth it! I get
            to create, bring new life and central unity into many homes. The
            thought of a family sitting around a dinner table sharing memories
            and laughing. That I had the opportunity of building fills me
            unspeakable joy and a sense of purpose.
          </p>
          <p className={classes.message}>
            I hope for the opportunity to be apart of your family and next
            project!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
