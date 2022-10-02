import { Link } from "react-router-dom";
import "./Home.css";
import notebook from "../../Assests/Img/image-3.webp";

export const Home = () => {
  return (
    <div className="home">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slide-inner">
              <div className="slide-info">
                <h2 className="slide-names" style={{ color: "#F3C136" }}>
                  Your next great adventure.
                </h2>
                <h2 className="slide-name">
                  Copying and <br /> Printing Center
                </h2>
                <p className="slide-text">
                  Discover your next great adventure.
                </p>
                <a
                  className={{
                    backgroundColor: "#FF4328",
                    display: "inline-block",
                    padding: "10px 20px",
                    fontSize: "20px",
                  }}
                  href="#category"
                >
                  Learn More
                </a>
              </div>
              <div className="slide-left">
                <img src={notebook} alt="" className="slide-img" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slide-inner">
              <div className="slide-info">
                <h2 className="slide-names" style={{ color: "#F3C136" }}>
                  Your next great adventure.
                </h2>
                <h2 className="slide-name">
                  Copying and <br /> Printing Center
                </h2>
                <p className="slide-text">
                  Discover your next great adventure.
                </p>
                <a
                  className={{
                    backgroundColor: "#FF4328",
                    display: "inline-block",
                    padding: "10px 20px",
                    fontSize: "20px",
                  }}
                  href="#category"
                >
                  Learn More
                </a>
              </div>
              <div className="slide-left">
                <img src={notebook} alt="" className="slide-img" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slide-inner">
              <div className="slide-info">
                <h2 className="slide-names" style={{ color: "#F3C136" }}>
                  Your next great adventure.
                </h2>
                <h2 className="slide-name">
                  Copying and <br /> Printing Center
                </h2>
                <p className="slide-text">
                  Discover your next great adventure.
                </p>
                <a
                  className={{
                    backgroundColor: "#FF4328",
                    display: "inline-block",
                    padding: "10px 20px",
                    fontSize: "20px",
                  }}
                  href="#category"
                >
                  Learn More
                </a>
              </div>
              <div className="slide-left">
                <img src={notebook} alt="" className="slide-img" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
