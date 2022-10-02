import React from "react";
import img from "../../Assests/Img/Image 5.png";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import "./SubCatalog.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "react-modal";
import MyVerticallyCenteredModal from "../Modal/Modal";
import EditModal from "../EditModal";

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

const SubCatalog = () => {
  const [subcatalogId, setNewId] = useState("");
  console.log(subcatalogId, "subcatalogId");

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

  /*********************    subcatalog post         ********************************* */

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjo1MjkzMDk5MTgzLCJpZCI6IjEiLCJyb2xlIjoiYWRtaW4ifQ.7y4FIXk07GiTjnnU1R4zOZZ9FuS1iIGrJRjDZep0Qrw";

  /*********************    catalog get         ********************************* */

  const [catalog, setCatalog] = useState([]);
  const [click, setClick] = useState("");


  const onChange = (e) => {
    setClick(e?.target?.value);
  };
  console.log(click, "click");
  
  useEffect(() => {
    fetch("http://49.12.13.213:9090/api/v1/catalog/get-list")
      .then((res) => res.json())
      .then((data) => setCatalog(data?.data));
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { subcatalogName } = evt.target.elements;
    formData.append("subcatalogName", subcatalogName.value);
    formData.append("catalogId", click);
    // formData.append("subcatalogIsTop", "true");

    axios
      .post(`http://49.12.13.213:9090/api/v1/subcatalog/create`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  /*********************    subcatalog get         ********************************* */

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://49.12.13.213:9090/api/v1/subcatalog/list")
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, []);

  /*********************    subcatalog delete         ********************************* */

  const CatalogDelete = (id, e) => {
    window.location.reload();
    e.preventDefault();
    axios
      .delete(`http://49.12.13.213:9090/api/v1/subcatalog/delete?id=${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log("Delete data", res))
      .catch((err) => console.log(err));
  };

  function refreshPage() {
    window.location.reload();
  }

  //Put

  const handleProfileSubmit = (evt, id) => {
    evt.preventDefault();
    const formData = new FormData();
    const { subcatalogName } = evt.target.elements;

    formData.append("subcatalogName", subcatalogName.value);
    formData.append("subcatalogId", subcatalogId);

    axios
      .put(`http://49.12.13.213:9090/api/v1/subcatalog/update`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const [modalShow, setModalShow] = React.useState(false);

  const [editModal, setEditModal] = React.useState(false);

  return (
    <div className="subcatalog">
      <form>
        <select className="subcatalog-select" onChange={onChange} name="" id="">
          {catalog &&
            catalog.map((e) => <option value={e?.id}>{e?.catalogName}</option>)}
        </select>
      </form>
      <div className="subcatalog-title">
        <form onSubmit={handleSubmit} action="" className="catalog-form">
          <div className="catalog-item">
            <div className="catalog-items">
              <input type="file" className="catalog-input" id="file" />
              <label className="catalog-label" htmlFor="file">
                <img src={img} className="catalog-img" alt="" />
              </label>
            </div>
            <input
              type="text"
              name="subcatalogName"
              required
              placeholder="SubCatalog name"
              className="catalog-inputs"
            />
          </div>
          <div className="catalog-btns">
            <button
              onClick={() => setModalShow(true)}
              type="submit"
              className="catalog-btn"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      <table className="catalog-table">
        <thead>
          <tr>
            <th className="catalog-names">ID</th>
            <th className="catalog-names">Image</th>
            <th className="catalog-names">Name</th>
            <th className="catalog-names">Edit</th>
            <th className="catalog-names">Delete</th>
          </tr>
        </thead>
        <tbody className="catalog-list">
          {data &&
            data.map((evt) => (
              <tr>
                <th>{evt.subcatalogID}</th>
                <th>
                  <img src={img} className="catalog-pic" alt="" />
                </th>
                <th>{evt.subcatalogName}</th>
                <th onClick={() => setNewId(evt.subcatalogID)}>
                  <button onClick={openModal} className="catalog-button">
                    <MdModeEditOutline />
                  </button>
                </th>
                <th>
                  <button
                    type="submit"
                    onClick={(item) => CatalogDelete(evt.subcatalogID, item)}
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
        <button className="new-close" onClick={closeModal}>
          close
        </button>
        <form className="news-form" onSubmit={handleProfileSubmit}>
          <input
            type="text"
            className="news-input"
            placeholder="subcatalogName..."
            name="subcatalogName"
          />
          <button
             onClick={() => setEditModal(true)}
            className="catalog__btns"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      </Modal>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <EditModal show={editModal} onHide={() => setEditModal(false)} />
    </div>
  );
};

export default SubCatalog;
