import React from "react";
import digital from "../../Assests/Img/prints.png";
import profil from "../../Assests/Img/profil.png";
import "./AdminProfil.css";

function AdminProfil() {
  return (
    <div className="profil">
      <div className="profil-page">
        <div className="profil-title">
          <img src={digital} alt="" className="profil-img" />
          <input
            type="text"
            placeholder="Search...."
            className="profil-input"
          />
        </div>
        <div className="profil-item">
          <div className="profil-items">
            <img src={profil} alt="" className="profil-pic" />
          </div>
          <h4 className="profil-name">John Doe</h4>
        </div>
      </div>
    </div>
  );
}

export default AdminProfil;
