import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
     <div className="left">
        <img src="/image-web-3-mobile.jpg" alt="" className="left-img-mobile" />
        <img src="/image-web-3-desktop.jpg" alt="" className="left-img-desktop" />

        <div className="left-info">
          <p className="left-info-title">The Bright Future of Web 3.0?</p>
          <div className="left-info-desc">
            <p className="left-info-desc-p">
              {" "}
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="read-more-btn">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="right">
        <p className="right-new">New</p>
        <div className="right-div">
          <div className="right-info">
            <p className="right-info-title">Hydrogen VS Electric Cars</p>
            <p className="right-info-desc">
              {" "}
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>

          <div className="right-info">
            <p className="right-info-title">The Downsides of AI Artistry</p>
            <p className="right-info-desc">
              {" "}
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>

          <div className="right-info">
            <p className="right-info-title">Is VC Funding Drying Up?</p>
            <p className="right-info-desc">
              {" "}
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
