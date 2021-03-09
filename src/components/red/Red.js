import { useEffect } from "react";
import spkLeft from "../../img/spkLeft.png";
import spkRight from "../../img/spkRight.png";
import "./Red.css";

function Red() {
  useEffect(() => {
    const button = document.getElementById("cta-btn");
    const target = document.getElementById("target");
    function handleMove(e) {
      //button.className = "button";
      const x = -50 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
      const y = -10 + (e.pageY - button.offsetTop - 100 / 2) / 3;

      target.style.setProperty("--x", `${x}px`);
      target.style.setProperty("--y", `${y}px`);
    }
    button.addEventListener("mousemove", e => {
      handleMove(e);
    });
    button.addEventListener("touchmove", e => {
      handleMove(e.changedTouches[0]);
    });
  }, []);

  return (
    <div id="red">
      <div id="red-info">
        <h1>Superior sound</h1>
        <h2>
          Experience live version of your <br />
          favourite songs.
        </h2>
        <button id="cta-btn" className="button">
          <div className="pattern">
            <div id="target" className="target inner bg1"></div>
          </div>
          <div className="text">See Demo</div>
        </button>
      </div>
      <div id="red-speakers">
        <a href="/pricing">Try it now</a>
        <div id="speakers-box">
          <div id="left">
            <img src={spkLeft} />
          </div>
          <div id="right">
            <img src={spkRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Red;
