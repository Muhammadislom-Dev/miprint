import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import images from "../../Assests/Img/image-2.webp";
import play from "../../Assests/Img/play.png";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import close from "../../Assests/Img/close.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "80%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-120%, -30%)",
    backgroundColor: "#f2f2f2",
  },
};

function Section() {

  
  // let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // const [korzinkaModal, setKorzinkaModal] = useState(false);
  // function openKorzinkaModal() {
  //   setKorzinkaModal(!korzinkaModal);
  // }

  return (
    <div className="section">
      <div className="section-page">
        <div className="section-left">
          <h4 className="section-names" style={{ color: "#F3C136" }}>
            Why Choose Us
          </h4>
          <h2 className="section-name">
            Why Customer <br />
            Love Us
          </h2>
          <p className="section-text">
            We can fix all types of residential and commercial garage doors and
            garage door ope
          </p>

          <Link
            className={{
              backgroundColor: "#FF4328",
              display: "inline-block",
              padding: "10px 20px",
              fontSize: "20px",
            }}
            to="/"
          >
            Learn More
          </Link>
        </div>
        <div className="section-right">
          <img src={images} alt="" className="section-img" />
          <button
            // onClick={() => openKorzinkaModal()}
            // onClick={openModal}
            className="section-btn"
          >
            <img src={play} alt="" className="section-play" />
          </button>
        </div>
      </div>

      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="section-modal">
          <button onClick={closeModal} className="modal-btn">
            <img src={close} alt="" className="modal-close" />
          </button>
          <iframe
            width="650"
            height="355"
            src="https://www.youtube.com/embed/NzBxjYldiNM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal> */}

      {/* <Modal1 className="modal" show={korzinkaModal} w={800} mh={400}>
        <button onClick={closeModal} className="modal-btn">
          <img src={close} alt="" className="modal-close" />
        </button>
        <iframe
          width="650"
          height="355"
          src="https://www.youtube.com/embed/NzBxjYldiNM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal1> */}
    </div>
  );
}

export default Section;
