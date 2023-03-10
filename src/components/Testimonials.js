import { ImgData } from "../data/ImgData";
import brit from "../images/avitars/brittanyV.jpg";
import chad from "../images/avitars/Chadwickd.jpg";
import jenn from "../images/avitars/jenniferR.jpg";
import Carousel from "./Carousel";
import classes from "./styles/testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={classes.testimonial_container}>
      <h3 className={classes.testimonial_label}>Testimonials</h3>
      <div className={classes.testimonials} id="testimonials">
        <div className={classes.testimonial_item}>
          <Carousel slideData={ImgData} />
          <div>
            <img className={classes.avitar} src={jenn} alt="Jennifer R." />
            <h3 className={classes.name}>Jennifer R.</h3>
            <p className={classes.review}>
              " We were having trouble finding a tv console to fit our tv and
              sound/speaker system. They came up with a design and built our
              custom console. It couldn’t look any better. Brandon even help us
              put all equipment in to make sure everything fit just the way we
              needed it to. Very responsive, reasonable and exemplary service.
              This is better than anything I could get in a store. Thank you!! "
            </p>
          </div>
        </div>
        <div className={classes.testimonial_item}>
          <Carousel slideData={ImgData} />
          <div>
            <img
              className={classes.avitar}
              src={brit}
              alt="Brittany V."
            />
            <h3 className={classes.name}>Brittany V.</h3>
            <p className={classes.review}>
              " Brandon customized three baby gates for our house. They turned
              out so beautifully and matches our house perfectly. They are also
              extremely sturdy! During the process, Brandon was extremely
              professional and very helpful in making my vision come to life! We
              can’t wait to use Brandon again in the near future for some other
              projects we have coming up! "
            </p>
          </div>
        </div>
        <div className={classes.testimonial_item}>
          <Carousel slideData={ImgData} />
          <div>
            <img className={classes.avitar} src={chad} alt="Chadwick D." />
            <h3 className={classes.name}>Chadwick D.</h3>
            <p className={classes.review}>
              " These folks were fantastic to deal with! They did a custom
              conference table for me. Were very accommodating and gave an
              accurate timeline on when it would be done. Highly recommend them!
              I will be doing more business with them in the future! "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
