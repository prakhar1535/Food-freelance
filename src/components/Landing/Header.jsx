import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
// import './Header.css'; // Import the CSS file

const Header = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="swiper-container overflow-hidden">
      <div className="swiper-wrapper">
      <div
  className="swiper-slide h-screen"
  style={{
    backgroundImage: `url('/h1.png')`,
  }}
>
  <div className="centered-text">Slide 1</div>
</div>
<div
  className="swiper-slide"
  style={{
    backgroundImage: `url('/h2.png')`,
  }}
>
  <div className="centered-text h-screen  ">Slide 2</div>
</div>
<div
  className="swiper-slide h-screen"
  style={{
    backgroundImage: `url('/h3.png')`,
  }}
>
  <div className="centered-text">Slide 3</div>
</div>

      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Header;
