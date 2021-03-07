import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";
import "./Hero.css";

function Hero() {
  const images = [image1, image2, image3];
  const nextImage = useRef(1);
  useEffect(() => {
    // save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      nextImage.current = nextImage.current === 2 ? 0 : nextImage.current + 1;
      document.getElementById("hero").style.animation = "none";
      document.getElementById("hero").style.animation = "test 1s";
      //   document.getElementById("hero").style.backgroundImage =
      //     "url(" + images[nextImage.current] + ")";
    }, 2500);
    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  const handleSlider = e => {
    console.log(e.target.id);
    document.getElementById("hero").style.backgroundImage =
      "url(" + e.target.id + ")";
  };

  const buttons = images.map((btn, index) => {
    return (
      <button id={btn} key={btn} onClick={e => handleSlider(e)}>
        A
      </button>
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
