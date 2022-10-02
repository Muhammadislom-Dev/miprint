import "./ProductPage.css";
import React from "react";
import notes from '../../Assests/Img/notes.png'
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <div id="abouts" className="homeabout">
      <div className="container homeabout__container-desktop">
        <div className="homeabout__left-side">
          <h3 data-aos="fade-right" className="homeabout__left-title">
            About Us
          </h3>
          <p data-aos="fade-right" className="homeabout__left-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error enim
            debitis perspiciatis voluptatum nihil officiis laborum atque, quod
            quos provident incidunt distinctio officia quidem beatae ullam! Cum
            quos odit tempora. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Maiores officia odit praesentium obcaecati,
            repellendus adipisci tenetur! Necessitatibus eligendi consectetur
            deleniti dicta inventore, itaque, quae dolores libero eos ipsa a
            quos.
          </p>
        </div>
        <div  className="homeabout__center">
          <img
            src={notes}
            alt="Pero About"
            className="homeabout__center-img"
          />
        </div>
        
        <div className="homeabout__right-side">
          <h3 data-aos="fade-left" className="homeabout__right-title">
              The secret of purity
          </h3>
          <Link
            data-aos="fade-left"
            to="/"
            className="homeabout__right-btn"
          >
            Lern More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
