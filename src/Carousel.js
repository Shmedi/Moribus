import React, {Component} from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default () => (
    <Carousel autoPlay>
        <div>
            <img alt="" src="http://lorempixel.com/output/fashion-q-c-640-480-8.jpg" />
            <p className="legend">Natural Look</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/fashion-q-c-640-480-9.jpg" />
            <p className="legend">Nail Polish</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/fashion-q-c-640-480-3.jpg" />
            <p className="legend">Runway Look</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/fashion-q-c-640-480-10.jpg" />
            <p className="legend">Cover Girl Look</p>
        </div>
        
        <div>
            <img alt="" src="http://lorempixel.com/output/fashion-q-c-640-480-6.jpg" />
            <p className="legend">Portrait Look</p>
        </div>
        
       
        
    </Carousel>
);
