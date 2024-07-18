import React, { useEffect } from 'react';
import './scrollup.css';

const Scrollup = () => {
  useEffect(() => {
    const scrollUp = document.querySelector(".scrollup");

    const handleScroll = () => {
      if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className="scrollup" onClick={handleClick}>
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </button>
  );
};

export default Scrollup;
