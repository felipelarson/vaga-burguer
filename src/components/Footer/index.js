import React from "react";
import "./styles.css";

export const Footer = () => {
  return (
    <div className="position-footer">
      <h3 className="title-footer">Don’t Miss Our Promo On</h3>
      <a
        className="link-footer"
        href="https://www.facebook.com.br"
        alt="facebook">
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a
        className="link-footer"
        href="https://www.instagram.com.br"
        alt="instagram">
        <i class="fa-brands fa-instagram-square"></i>
      </a>
      <a
        className="link-footer"
        href="https://www.twitter.com.br"
        alt="twitter">
        <i class="fa-brands fa-twitter-square"></i>
      </a>
    </div>
  );
};
