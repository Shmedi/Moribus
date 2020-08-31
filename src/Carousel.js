import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "./images/bannerImg1.jpg";
import image2 from "./images/bannerImg2.jpg";
import image3 from "./images/bannerImg3.jpg";
import image4 from "./images/bannerImg4.jpg";
import image5 from "./images/bannerImg5.jpg";

export default () => (
  <Carousel autoPlay infiniteLoop stopOnHover dynamicHeight swipeable>
    <div>
      <img alt="Makeup brush picking up eyeshadow product" src={image1} />
    </div>
    <div>
      <img
        alt="Multiple makeup brushes in a tin, surrounded by products"
        src={image2}
      />
    </div>
    <div>
      <img alt="Makeup palette with two eyeshadow tins on top" src={image3} />
    </div>
    <div>
      <img alt="Mirror palette with eyeshadow colors" src={image4} />
    </div>
    <div>
      <img
        alt="Three makeup foundation tins in a triangle with two tins open"
        src={image5}
      />
    </div>
  </Carousel>
);
