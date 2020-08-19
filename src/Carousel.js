import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src="/images/bannerImg1.jpg" />
    </div>
    <div>
      <img alt="" src="/images/bannerImg2.jpg" />
    </div>
    <div>
      <img alt="" src="/images/bannerImg3.jpg" />
    </div>
    <div>
      <img alt="" src="/images/bannerImg4.jpg" />
    </div>
    <div>
      <img alt="" src="/images/bannerImg5.jpg" />
    </div>
  </Carousel>
);
