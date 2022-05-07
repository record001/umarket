import "./hero.scss";
import hero from "../../../images/hero.png";
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__body">
        

        <Splide
          options={{
            rewind: true,
            gap: "1rem",
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img src={hero} alt="hero1" />
          </SplideSlide>
          <SplideSlide>
            <img src={hero} alt="hero2" />
          </SplideSlide>
          <SplideSlide>
            <img src={hero} alt="hero" />
          </SplideSlide>
          <SplideSlide>
            <img src={hero} alt="hero" />
          </SplideSlide>
          <SplideSlide>
            <img src={hero} alt="hero" />
          </SplideSlide>
          <SplideSlide>
            <img src={hero} alt="hero" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
