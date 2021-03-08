import { useRef, useEffect } from "react";
import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";
import transition from "../../img/transition.jpg";
import "./Hero.css";
import hoverEffect from "hover-effect";

function Hero() {
  const images = [image1, image2, image3];
  const imageShown = useRef(0); //index of an image that is currently shown
  const imgContainer = useRef(); //container for dom element (canvas)

  useEffect(() => {
    interval();
    // clear interval on re-render to avoid memory leaks
    return () => window.clearInterval(window.intervalId);
  }, []);

  //initial image setup
  useEffect(() => {
    new hoverEffect({
      parent: imgContainer.current,
      intensity: 0.3,
      image1: image1,
      image2: image2,
      displacementImage: transition,
      hover: false,
      imagesRatio: 1080 / 1920,
    });
  }, []);

  //spin image carousel on click
  const spinCarousel = e => {
    if (e.target.id == imageShown.current) return;
    window.clearInterval(window.intervalId);
    // transition effect between two images
    var animation = new hoverEffect({
      parent: imgContainer.current,
      intensity: 0.3,
      image1: images[imageShown.current],
      image2: images[e.target.id],
      displacementImage: transition,
      hover: false,
      imagesRatio: 1080 / 1920,
    });
    setTimeout(() => {
      animation.next();
      imageShown.current = e.target.id;
      imgContainer.current.firstChild.remove();
      let sliders = document.getElementsByName("slider");
      [...sliders].forEach(el => {
        el.className = "slider";
      });
      document.getElementById(e.target.id).className = "slider-active";
      interval();
    }, 20);
  };

  //spin image carousel every 10 sec (based on interval)
  const spinCarouselAuto = () => {
    // transition effect between two images
    var animation = new hoverEffect({
      parent: imgContainer.current,
      intensity: 0.3,
      image1: images[imageShown.current],
      image2:
        imageShown.current == 2 ? images[0] : images[+imageShown.current + 1],
      displacementImage: transition,
      hover: false,
      imagesRatio: 1080 / 1920,
      easing: "power4",
    });
    imgContainer.current.firstChild.remove();
    setTimeout(() => {
      animation.next();
      //imgContainer.current.firstChild.remove();
      imageShown.current =
        imageShown.current == 2 ? 0 : +imageShown.current + 1;
      let sliders = document.getElementsByName("slider");
      [...sliders].forEach(el => {
        el.className = "slider";
      });
      document.getElementById(imageShown.current).className = "slider-active";
    }, 20);
  };

  const interval = () => {
    // save intervalId to clear the interval when the component re-renders
    window.intervalId = setInterval(() => {
      spinCarouselAuto();
    }, 3000);
  };

  const buttons = images.map((btn, index) => {
    return (
      <div
        id={index}
        key={btn}
        name="slider"
        onClick={spinCarousel}
        className={index === 0 ? "slider-active" : "slider"}
      ></div>
    );
  });

  return (
    <div id="hero">
      <div className="imageSlide" ref={imgContainer}></div>
      <div className="hero-text">
        <h1>Interactive concert experience</h1>
        <h3>
          Experience your favourite artists like never <br /> before and from
          the comfort of your own home
        </h3>
        <a href="/pricing">TRY IT NOW</a>
        <div className="sliders">{buttons}</div>
      </div>
    </div>
  );
}

export default Hero;
