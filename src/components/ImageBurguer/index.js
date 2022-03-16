import React from "react";
import Burger from "./../../assets/img/Burger.png";
import BurgerOne from "./../../assets/img/Daco_2319534.png";
import BurgerTwo from "./../../assets/img/Hamburger-PNG-Clipart.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./styles.css";

export const ImageBurguer = () => {
  return (
    <div className="position-image">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        dynamicHeight
        showStatus={false}
        showThumbs={false}
        showIndicators={false}>
        <figure>
          <img src={Burger} alt="Burguer" className="img-burger" />
        </figure>
        <figure>
          <img src={BurgerOne} alt="Burguer" className="img-burger " />
        </figure>
        <figure>
          <img src={BurgerTwo} alt="Burguer" className="img-burger" />
        </figure>
      </Carousel>
      <h5 className="subtitle-burger">
        Spicy Beef <span>Burger</span>
      </h5>
    </div>
  );
};
