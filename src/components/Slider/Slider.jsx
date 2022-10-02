import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";
import "./Slider.css";
import aa from "../../Assests/Img/A.png";

const splideOpts = {
  rewind: true,
  loop: true,
  pagination: false,
  perPage: 3,
  perMove: 1,
  breakpoints: {
    1000: {
      perPage: 2,
    },
    700: {
      perPage: 1,
    },
  },
};

export default function Slider() {
  return (
    <div className="slider">
      <div style={{ padding: "50px 0" }} className="containers">
        <Splide hasTrack={false} options={splideOpts}>
          <SplideTrack>
            <SplideSlide>
              <div className="slide__container">
                <div className="slide__header">
                  <img src={aa} alt="A" className="slide__img" />
                  <div className="slide__info">
                    <h3 className="slide__title">Saul Ramirez</h3>
                    <p className="slide__date">
                      <span>asdasdasdasd</span>
                      <span>32.43.2343</span>
                    </p>
                    <p className="slide__text">
                     Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia odio vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide__container">
                <div className="slide__header">
                  <img src={aa} alt="A" className="slide__img" />
                  <div className="slide__info">
                    <h3 className="slide__title">Saul Ramirez</h3>
                    <p className="slide__date">
                      <span>asdasdasdasd</span>
                      <span>32.43.2343</span>
                    </p>
                    <p className="slide__text">
                     Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia odio vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide__container">
                <div className="slide__header">
                  <img src={aa} alt="A" className="slide__img" />
                  <div className="slide__info">
                    <h3 className="slide__title">Saul Ramirez</h3>
                    <p className="slide__date">
                      <span>asdasdasdasd</span>
                      <span>32.43.2343</span>
                    </p>
                    <p className="slide__text">
                     Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia odio vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide__container">
                <div className="slide__header">
                  <img src={aa} alt="A" className="slide__img" />
                  <div className="slide__info">
                    <h3 className="slide__title">Saul Ramirez</h3>
                    <p className="slide__date">
                      <span>asdasdasdasd</span>
                      <span>32.43.2343</span>
                    </p>
                    <p className="slide__text">
                     Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia odio vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide__container">
                <div className="slide__header">
                  <img src={aa} alt="A" className="slide__img" />
                  <div className="slide__info">
                    <h3 className="slide__title">Saul Ramirez</h3>
                    <p className="slide__date">
                      <span>asdasdasdasd</span>
                      <span>32.43.2343</span>
                    </p>
                    <p className="slide__text">
                     Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia odio vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide__container">
                <div className="slide__header">
                  <img src={aa} alt="A" className="slide__img" />
                  <div className="slide__info">
                    <h3 className="slide__title">Saul Ramirez</h3>
                    <p className="slide__date">
                      <span>asdasdasdasd</span>
                      <span>32.43.2343</span>
                    </p>
                    <p className="slide__text">
                     Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia odio vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide__container">
                <div className="slide__header">
                  <img src={aa} alt="A" className="slide__img" />
                  <div className="slide__info">
                    <h3 className="slide__title">Saul Ramirez</h3>
                    <p className="slide__date">
                      <span>asdasdasdasd</span>
                      <span>32.43.2343</span>
                    </p>
                    <p className="slide__text">
                     Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia odio vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide__container">
                <div className="slide__header">
                  <img src={aa} alt="A" className="slide__img" />
                  <div className="slide__info">
                    <h3 className="slide__title">Saul Ramirez</h3>
                    <p className="slide__date">
                      <span>asdasdasdasd</span>
                      <span>32.43.2343</span>
                    </p>
                    <p className="slide__text">
                     Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia odio vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </div>
  );
}
