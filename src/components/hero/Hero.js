import { useEffect } from "react";
import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";
import "./Hero.css";

function Hero() {
  const images = [image1, image2, image3];

  useEffect(() => {
    // save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      //console.log("HERE");
    }, 10000);
    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  const handleSlider = e => {
    console.log(typeof e.target.id);
  };

  const buttons = images.map((btn, index) => {
    return (
      <button id={index} key={btn} onClick={e => handleSlider(e)}>
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
      <button>CLICK</button>
      <div className="sliders">{buttons}</div>
    </div>
  );
}

export default Hero;
