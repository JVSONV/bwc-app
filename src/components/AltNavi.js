import logo from "../images/bwxs.svg";
import classes from "./styles/altnavi.module.css";

const AltNavi = () => {
  return (
    <header className={classes.container}>
      <nav className={classes.nav_container}>
        <div className={classes.img_container}>
          <img
            className={classes.logo}
            src={logo}
            alt="B's Wood Creations logo"
          />
        </div>
        <ul className={classes.nav_list}>
          <li>
            <a className={classes.nav_link} href="#about">About Us</a>
          </li>
          <li>
            <a className={classes.nav_link} href="#contact">Contact</a>
          </li>
          <li>
            <a className={classes.nav_link} href="#faq">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AltNavi;
