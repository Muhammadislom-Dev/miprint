import React from "react";
import "./Company.css";
import furniture from "../../Assests/Img/furniture.jpg";

function Company() {
  return (
    <div className="company">
      <div className="container">
        <div className="company-left">
          <img src={furniture} alt="" className="company-img" />
        </div>
        <div className="company-right">
          <h2 className="company-name">Terms of use</h2>
          <p className="company-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            illum quod, itaque voluptatum sed vel ea ratione fugiat vitae,
            inventore natus quia nulla amet aliquid expedita error, magnam
            laudantium consequuntur! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Amet odit, fugit eligendi doloribus iure ullam
            corrupti itaque quaerat quibusdam, ipsam nisi sequi, sunt rem iusto
            ex debitis at hic repellendus. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Facilis doloremque voluptates nesciunt
            quis. Ut aspernatur in adipisci blanditiis maiores magni sit ipsam
            repellendus architecto porro, possimus nostrum nihil, distinctio
            sequi?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Company;
