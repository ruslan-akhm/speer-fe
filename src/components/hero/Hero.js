import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";
import "./Hero.css";

function Hero() {
  const images = [image1, image2, image3];
  const imageShown = useRef(0);
  useEffect(() => {
    interval();
    // clear interval on re-render to avoid memory leaks
    return () => window.clearInterval(window.intervalId);
  }, []);

  const interval = () => {
    // save intervalId to clear the interval when the component re-renders
    window.intervalId = setInterval(() => {
      //switching between images every 10sec.
      imageShown.current =
        imageShown.current === 2 ? 0 : imageShown.current + 1;
      document.getElementById("hero").style.animation = "none";
      changeImage(imageShown.current);
    }, 10000);
  };

  const handleSlider = e => {
    //onclick - reset time interval and change image
    window.clearInterval(window.intervalId);
    imageShown.current = +e.target.id;
    changeImage(e.target.id);
    interval();
  };

  const changeImage = e => {
    //assing active class to slider button clicked; other slider buttons are set to basic class
    let sliders = document.getElementsByName("slider");
    [...sliders].forEach(el => {
      el.className = "slider";
    });
    document.getElementById(e).className = "slider-active";
    document.getElementById("hero").style.backgroundImage =
      "url(" + images[e] + ")";
  };

  const buttons = images.map((btn, index) => {
    return (
      <div
        id={index}
        key={btn}
        name="slider"
        onClick={e => handleSlider(e)}
        className={index === 0 ? "slider-active" : "slider"}
      ></div>
    );
  });

  return (
    <div id="hero" className="hero-box he">
      <h1>Interactive concert experience</h1>
      <h3>
        Experience your favourite artists like never <br /> before and from the
        comfort of your own home
      </h3>
      <Link to="/pricing">
        <button>CLICK</button>
      </Link>
      <div className="sliders">{buttons}</div>
    </div>
  );
}

export default Hero;
