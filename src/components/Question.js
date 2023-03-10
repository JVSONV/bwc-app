import { useState } from "react";
import classes from "./styles/question.module.css";

const Question = (props) => {
  const [isActive, setIsActive] = useState(false);

  const expansionHandler = () => {
    if (isActive === false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  let chevron = (<strong>&#43;</strong>);

  if (isActive) {
    chevron = (<strong>&minus;</strong>);
  }

  return (
    <div className={classes.faq_item} onClick={expansionHandler}>
      <div className={classes.dropdown_container}>
        <h3 className={classes.question}>{props.question}</h3>
        <span
          className={
            isActive ? `${classes.toggle} ${classes.active}` : classes.toggle
          }
        >
          {chevron}
        </span>
      </div>
      <div
        className={
          isActive ? `${classes.answer} ${classes.active}` : classes.answer
        }
      >
        {props.answer}
      </div>
    </div>
  );
};

export default Question;
