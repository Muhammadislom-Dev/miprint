import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./Carousel.css";
import instagram from "../../Assests/Img/instagram.png";
import img1 from "../../Assests/Img/images.png";
import instalogo from "../../Assests/Img/insta-logo.jpg";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Carousel() {
  return (
    <div className="carousels">
      <div className="container">
        <a href="https://instagram.com" className="carousel-link">
          <img src={instagram} alt="" className="carousel-img" />
          Instagram @digital_printing_ru
        </a>
          <div className="carousel-list">
            <div className="carousel-items">
              <img src={img1} alt="" className="carousel-pic" />
              <h4 className="carousel-name">Urmila Bale</h4>
              <Stack spacing={1}  >
                <Rating 
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  className="carousel-star"
                />
              </Stack>
              <p className="carousel-subname">Creative Director</p>
            </div>
            <div className="carousel-items">
              <img src={img1} alt="" className="carousel-pic" />
              <h4 className="carousel-name">Urmila Bale</h4>
              <Stack spacing={1}  >
                <Rating 
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  className="carousel-star"
                />
              </Stack>
              <p className="carousel-subname">Creative Director</p>
            </div>
            <div className="carousel-items">
              <img src={img1} alt="" className="carousel-pic" />
              <h4 className="carousel-name">Urmila Bale</h4>
              <Stack spacing={1}  >
                <Rating 
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  className="carousel-star"
                />
              </Stack>
              <p className="carousel-subname">Creative Director</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Carousel;
