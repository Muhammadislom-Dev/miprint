import React from "react";
import "./HomeNews.css";
import img from "../../Assests/Img/Image 5.png";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import MyVerticallyCenteredModal from '../Modal/Modal'
import EditModal from "../EditModal";
import DeleteModal from "../DeleteModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function HomeNews() {
  const [newId, setNewId] = useState("");
  console.log(newId, "new id");

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // ************ HomeNews post *******

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjo1MjkzMTY4MDU1LCJpZCI6IjEiLCJyb2xlIjoiYWRtaW4ifQ.KCuD5_xhF_z48LFFCk-Kk1U92IYe1AAgBX-_YqSFJG0";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { newsBody } = evt.target.elements;
    const { newsTitle } = evt.target.elements;
    formData.append("newsBody", newsBody.value);
    formData.append("newsTitle", newsTitle.value);

    axios
      .post("http://49.12.13.213:9090/api/v1/home-news/create", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // HomeNews get

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://49.12.13.213:9090/api/v1/home-news/list?offset=1&limit=20")
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, []);

  //HomeNews delete

  const CatalogDelete = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://49.12.13.213:9090/api/v1/home-news/delete?id=${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log("Delete data", res))
      .catch((err) => console.log(err));
  };

  const handleProfileSubmit = (evt, id) => {
    evt.preventDefault();
    const formData = new FormData();
    const { newsBody, newsTitle } = evt.target.elements;

    formData.append("newsBody", newsBody.value);
    formData.append("newsTitle", newsTitle.value);
    formData.append("newId", newId);

    axios
      .put(`http://49.12.13.213:9090/api/v1/home-news/update`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  function refreshPage() {
    window.location.reload();
  }

  const [modalShow, setModalShow] = React.useState(false);

  const [editModal, setEditModal] = React.useState(false);

  const [deletModal, setDeletModal] = React.useState(false);

  return (
    <div className="homenews">
      <div className="homeslide-title">
        {/* <form action="">
          <div className="catalog-items">
            <input type="file" className="catalog-input" id="file" />
            <label className="catalog-label" htmlFor="file">
              <img src={img} className="catalog-img" alt="" />
            </label>
          </div>
          <button>Submit</button>
        </form> */}
        <form onSubmit={handleSubmit} action="" className="catalog-form">
          <div className="catalog-item">
            <input
              type="text"
              name="newsBody"
              required
              placeholder="newsBody name..."
              className="catalog-inputs"
            />
            <input
              type="text"
              name="newsTitle"
              required
              placeholder="newsTitle name..."
              className="catalog-inputs"
            />
          </div>
          <div  className="catalog-btns">
            <button  
            onClick={() => setModalShow(true)}
            type="submit" className="catalog-btn">
              Create
            </button>
          </div>
        </form>
      </div>

      <table className="catalog-table">
        <thead>
          <tr>
            <th className="catalog-names">ID</th>
            <th className="catalog-names">Body</th>
            <th className="catalog-names">Title</th>
            <th className="catalog-names">Edit</th>
            <th className="catalog-names">Delete</th>
          </tr>
        </thead>
        <tbody className="catalog-list">
          {data &&
            data.map((e) => (
              <tr>
                <th>{e.NewsId}</th>
                {/* <th>
                    <img src={img} className="catalog-pic" alt="" />
                  </th> */}
                <th>{e.newsBody}</th>
                <th>{e.newsTitle}</th>
                <th onClick={() => setNewId(e?.NewsId)}>
                  <button
                    onClick={openModal}
                    type="submit"
                    className="catalog-button"
                  >
                    <MdModeEditOutline />
                  </button>
                </th>
                <th onClick={() => setDeletModal(true)} >
                  <button
                    onClick={(item) => CatalogDelete(e.NewsId, item)}
                    type="submit"
                    className="catalog-buttons"
                  >
                    <MdDelete style={{ color: "red" }} />
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="new-close" onClick={closeModal}>close</button>
        <form className="news-form" onSubmit={handleProfileSubmit}>
          <input
            type="text"
            id="newsBody"
            className="news-input"
            placeholder="NewsBody..."
            name="newsBody"
            defaultValue={data.newsBody}
            required
          />
          <input
            type="text"
            id="newsTitle"
            className="news-input"
            placeholder="NewsTitle..."
            name="newsTitle"
            defaultValue={data.newsTitle}
            required
          />
          <button 
          onClick={() => setEditModal(true)}
          className="catalog__btns" type="submit">Save Changes</button>
        </form>
      </Modal>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

       <EditModal
          show={editModal}
          onHide={() => setEditModal(false)}
      />

      <DeleteModal
      show={deletModal}
      onHide={() => setDeletModal(false)}
      />
    </div>
  );
}

export default HomeNews;
