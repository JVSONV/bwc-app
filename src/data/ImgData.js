import shortid from "shortid";
import custom_hero from "../images/custom_hero.png";
import desk_hero from "../images/desk_hero.png";
import gift_hero from "../images/gifts_hero.jpg";

export const ImgData = [
  { image: custom_hero, shortid: shortid.generate() },
  { image: desk_hero, shortid: shortid.generate() },
  { image: gift_hero, shortid: shortid.generate() },
];
