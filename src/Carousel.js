import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "./images/bannerImg1.jpg";
import image2 from "./images/bannerImg2.jpg";
import image3 from "./images/bannerImg3.jpg";
import image4 from "./images/bannerImg4.jpg";
import image5 from "./images/bannerImg5.jpg";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={image1} />
    </div>
    <div>
      <img alt="" src={image2} />
    </div>
    <div>
      <img alt="" src={image3} />
    </div>
    <div>
      <img alt="" src={image4} />
    </div>
    <div>
      <img alt="" src={image5} />
    </div>
  </Carousel>
);
