import React from "react";
import "../../../Components/Home/Sponsors/Sponsors.scss";

function Sponsors() {
  return (
    <div className="sponsor_container">
      <div className="sponsor_text_container">
        <div className="hr-container">
          <div className="hr-txt__line1">
            <hr color="#29abe2" />
          </div>
          <div className="hr-txt2">
            <hr color="#29abe2" />
          </div>
        </div>
        <div className="sponsors_text">SPONSORS</div>
        <div className="hr-container">
          <div className="hr-txt">
            <hr color="#29abe2" />
          </div>
          <div className="hr-txt2">
            <hr color="#29abe2" />
          </div>
        </div>
      </div>
      <div class="sponsor_wrapper__1">
        <img
          src="media/portronics.png"
          className="sponsor_img"
          alt="sponsor One"
        />
        <img
          src="media/career-launcher.png"
          className="sponsor_img__img2"
          alt="sponsor Two"
        />
        <img
          src="media/stickermuletransparent.png"
          className="sponsor_img"
          alt="sponsor Three"
        />
        
        <img
          src="media/HE_logo.png"
          className="sponsor_img"
          alt="sponsor Five"
        />
        </div>
        <div class="sponsor_wrapper__2">
          {/*<img className="sponsor_none"/> */}
          <img
            src="media/codechef.png"
            className="sponsor_img__img2"
            alt="sponsor Four"
          />
          <img
            src="media/souledstoretransparent.png"
            className="sponsor_img__img2"
            alt="sponsor Six"
          />
          <img
            src="media/inox.png"
            className="sponsor_img__img2"
            alt="sponsor Four"
          />
        </div>
        
        
      </div>
    
  );
}

export default Sponsors;
