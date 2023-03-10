import bi_hero from "../images/built-in_hero.png";
import door_hero from "../images/custom_door.png";
import custom_hero from "../images/custom_hero.png";
import desk_hero from "../images/desk_hero.png";
import gift_hero from "../images/gifts_hero.jpg";
import table_hero from "../images/table_hero.png";
import classes from "./styles/gallery.module.css";

const Gallery = () => {
  return (
    <div className={classes.gallery_container}>
      <h2 className={classes.gallery_label}>Check Out Our Work!</h2>
      <div className={classes.gallery}>
        <div className={classes.gallery_category}>
          <img
            className={classes.category_cover}
            src={table_hero}
            alt="Dinner Table"
          />
          <button className={classes.category_button}>Tables</button>
        </div>
        <div className={classes.gallery_category}>
          <img
            className={classes.category_cover}
            src={desk_hero}
            alt="An office desk"
          />
          <button className={classes.category_button}>Office</button>
        </div>
        <div className={classes.gallery_category}>
          <img
            className={classes.category_cover}
            src={bi_hero}
            alt="Built-in furniture"
          />
          <button className={classes.category_button}>Built-in's</button>
        </div>
        <div className={classes.gallery_category}>
          <img
            className={classes.category_cover}
            src={door_hero}
            alt="Barn Doors"
          />
          <button className={classes.category_button}>Barn Doors</button>
        </div>
        <div className={classes.gallery_category}>
          <img
            className={classes.category_cover_custom}
            src={custom_hero}
            alt="Cutome Pieces"
          />
          <button className={classes.category_button}>Custom Pieces</button>
        </div>
        <div className={classes.gallery_category}>
          <img
            className={classes.category_cover_fix}
            src={gift_hero}
            alt="Gifts"
          />
          <button className={classes.category_button}>Gift's & More</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
