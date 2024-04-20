import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Landing/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Special from "../components/Special";
import Menu from "../components/Menu/Menu";
import Reservation from "../components/Reservation";
import MeetOutTeam from "../components/MeetOutTeam";
import Gallary from "../components/Gallary";
import GetInTouch from "../components/GetInTouch";
import LocateUs from "../components/LocateUs";

const Landing = () => {
  const [isSliderSectionVisible, setIsSliderSectionVisible] = useState(false);
  const sliderSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sliderSectionTop =
        sliderSectionRef.current.getBoundingClientRect().top;
      setIsSliderSectionVisible(sliderSectionTop <= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar isSliderSectionVisible={isSliderSectionVisible} />
      <Header ref={sliderSectionRef} />
      <About />
      <Special />
      <Menu />
      <Reservation />
      <MeetOutTeam />
      <Gallary />
      <GetInTouch />
      <LocateUs />
    </>
  );
};

export default Landing;
