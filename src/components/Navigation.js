// import wood from "../images/BWC_brown.svg";
import { useState } from "react";
import logo from "../images/BWoodCreationsLogo-01.png";
import facebook_icon from "../images/facebook-icon.svg";
import instagram_icon from "../images/instagram-icon.svg";
import classes from "./styles/navigation.module.css";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const navToggleHandler = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <header>
      <div className={classes.social_background}>
        <div className={classes.social_container}>
          <div className={classes.socials}>
            <a href="https://www.facebook.com/bswoodcreations">
              <img
                className={classes.icon}
                src={facebook_icon}
                alt="Facebook link"
              />
            </a>
            <a href="https://www.instagram.com/bswoodcreations/">
              <img
                className={classes.icon}
                src={instagram_icon}
                alt="Instagram link"
              />
            </a>
            <p className={classes.social_reach}>Don't forget to like and follow us!</p>
          </div>
        </div>
      </div>
      <nav className={classes.nav_container}>
        <div className={classes.logo_container}>
          <a className={classes.logo} href="/">
            <img
              className={classes.logo_icon}
              src={logo}
              alt="B's Wood Creation wood logo"
            />
          </a>
        </div>
        <button
          className={
            isActive
              ? `${classes.nav_toggle} ${classes.active}`
              : classes.nav_toggle
          }
          onClick={navToggleHandler}
          aria-controls="primary-navigation"
          aria-expanded="false"
        >
          <svg
            fill="#000"
            viewBox="0 0 100 100"
            width="40"
            className={classes.hamburger}
          >
            <rect
              className={`${classes.bar} ${classes.top}`}
              width="80"
              height="10"
              x="10"
              y={isActive ? "45" : "25"}
              rx="5"
            ></rect>
            <rect
              className={`${classes.bar} ${classes.middle}`}
              width="80"
              height="10"
              x="10"
              y="45"
              rx="5"
            ></rect>
            <rect
              className={`${classes.bar} ${classes.bottom}`}
              width="80"
              height="10"
              x="10"
              y={isActive ? "45" : "65"}
              rx="5"
            ></rect>
          </svg>
        </button>
        <ul
          className={
            isActive
              ? `${classes.link_container} ${classes.active}`
              : classes.link_container
          }
        >
          <li
            className={
              isActive
                ? `${classes.link_item} ${classes.active}`
                : classes.link_item
            }
          >
            <a className={classes.link} href="#about">
              About Us
            </a>
          </li>
          <li
            className={
              isActive
                ? `${classes.link_item} ${classes.active}`
                : classes.link_item
            }
          >
            <a className={classes.link} href="#testimonials">
              Testimonials
            </a>
          </li>
          <li
            className={
              isActive
                ? `${classes.link_item} ${classes.active}`
                : classes.link_item
            }
          >
            <a className={classes.link} href="#contact">
              Contact
            </a>
          </li>
          <li
            className={
              isActive
                ? `${classes.link_item} ${classes.active}`
                : classes.link_item
            }
          >
            <a className={classes.link} href="#faq">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
};

export default Navigation;
