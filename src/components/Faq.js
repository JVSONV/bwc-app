import { Fragment } from "react";
import shortid from "shortid";
import Questions from "./Question";
import classes from "./styles/faq.module.css";

const Faq = () => {
  const faqs = [
    {
      shortid: shortid.generate(),
      q: "How do I place an order?",
      a: (
        <Fragment>
          <p>
            We have made our ordering process super simple and very personable.
            All you have to do is click the "Get a Quote" page or "Contact Me"
            page, and enter as much detail as you'd like! We will follow up with
            any questions and a quote for the item. Once all design aspects and
            pricing are agreed upon, a non-refundable deposit will secure your
            spot on the calendar.
          </p>
          <br></br>
          <p>
            Don't see an exact example of what you are looking for? Let us know
            your idea. We would love to make it come to life for you!
          </p>
        </Fragment>
      ),
    },
    {
      shortid: shortid.generate(),
      q: "Do you deliver?",
      a: (
        <p>
          Of course we do! Please let us know where you are located and we can
          work the delivery fee into your total price. When your item is close
          to completion, we will reach out to schedule a delivery time.
        </p>
      ),
    },
    {
      shortid: shortid.generate(),
      q: "Can you color match?",
      a: (
        <p>
          We will absolutely do our best! However, please keep in mind that
          colors can likely vary between types of wood, grain, porosity,
          texture, and the number of coats used when finishing the item.
        </p>
      ),
    },
    {
      shortid: shortid.generate(),
      q: "What type of wood do you use?",
      a: (
        <p>
          We primarily like to use pine as it is budget-friendly and has
          gorgeous grain and character. However, we can use other types of wood
          if desired. Please keep in mind that every board of wood can vary in
          grain pattern, color, knots and other distinguishable features that
          will make your piece one of a kind! Our furniture is built with 100%
          real, solid wood which can expand and contract with the change in
          humidity levels. We do our best to keep this from becoming an issue on
          down the road, but sometimes wood movement is out of our control.
          Please refer to the warranty section if you ever have any issues.
        </p>
      ),
    },
    {
      shortid: shortid.generate(),
      q: "What is your turn around time?",
      a: (
        <p>
          Custom, handcrafted furniture is our specialty! We are a small
          shop,and we like to take our time and focus our attention on one order
          at a time. That being said, our typical turn around time is 6-8 weeks
          although this can increase or decrease depending on the extent of your
          project and how many orders we have pending. We will give you a time
          frame when you place your order that we do our absolute best to meet.
        </p>
      ),
    },
    {
      shortid: shortid.generate(),
      q: "How do I chose my stain or paint color?",
      a: (
        <p>
          We work with any and all colors. Our advise would be to go to Home
          Depot and chose a Varathane stain color you like. If you'd prefer a
          Minwax color, please be sure to mention this to us when deciding your
          finish color. If you'd like a color swatch, please let us know and
          we'd be happy to get you one! Keep in mind that all wood stains
          differently so the color may vary slightly. If you are wanting your
          furniture painted, please let us know the color code and brand you are
          wanting.
        </p>
      ),
    },
    {
      shortid: shortid.generate(),
      q: "Do you require a deposit?",
      a: (
        <p>
          Since we create custom pieces, we do require a deposit. This deposit
          is non-refundable after 24 hours from receiving the deposit. The
          amount is determined based on the total price of the order. We will
          happily send you a work order/receipt for your order if you ask.
        </p>
      ),
    },
    {
      shortid: shortid.generate(),
      q: "Do you accept returns?",
      a: (
        <p>
          If for some reason your item does not meet your expectations, please
          express your concern upon delivery and we we will do what we can to
          try and make it right. If you refuse acceptance of your order upon
          delivery, we will make arrangements for a refund (minus the
          non-refundable deposit). By choosing to accept your order on the day
          of delivery/pick-up, you are confirming that you are fully satisfied
          with the item that has been built for you.
        </p>
      ),
    },
    {
      shortid: shortid.generate(),
      q: "Do you offer a warranty?",
      a: (
        <p>
          Yes! We believe that our hand-crafted furniture is made to last,
          however we do know that real wood has a mind of its own. We warranty
          our craftsmanship and material up to 90 days after delivery or
          pick-up. In the event that a defect happens, our warranty includes two
          attempts to make it right, and if you are still having issues we will
          offer a refund (minus the non-refundable deposit). Unfortunately we
          cannot offer a warranty for cosmetic mishaps as we coat the tops with
          a high end Polyurethane to try and keep this from happening. If in the
          unfortunate event that your item needs a repair, please reach out to
          us quickly and we will make arrangements.
        </p>
      ),
    },
  ];

  return (
    <div className={classes.faq_container} id="faq">
      <div className={classes.faqs}>
        {faqs.map((item) => {
          return (
            <Questions key={item.shortid} question={item.q} answer={item.a} />
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
