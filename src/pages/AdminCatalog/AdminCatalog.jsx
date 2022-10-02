import React, { useEffect, useState } from "react";
import "./AdminCatalog.css";
import img from "../../Assests/Img/Image 5.png";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import axios from "axios";
import Modal from "react-modal";
import MyVerticallyCenteredModal from "../Modal/Modal";
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

const AdminCatalog = () => {
  const [id, setNewId] = useState("");
  console.log(id, "aaaaaa");

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

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjo1MjkzMjQ3NjIzLCJpZCI6IjEiLCJyb2xlIjoiYWRtaW4ifQ.M8FytiToDXZALT6HbQpF8sIc4Pl3s9Ecyr5KGNKK86w";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { catalogName } = evt.target.elements;
    formData.append("catalogName", catalogName.value);

    axios
      .post("http://49.12.13.213:9090/api/v1/catalog/create", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://49.12.13.213:9090/api/v1/catalog/get-list")
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, []);

  const CatalogDelete = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://49.12.13.213:9090/api/v1/catalog/delete?id=${id}`, {
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

  //Patch

  const handleImage = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { subcatalogImageName } = evt.target.elements;
    formData.append("subcatalogImageName", subcatalogImageName.value);

    axios
      .patch(
        "http://49.12.13.213:9090/api/v1/catalog/upload-image?catalog-id=22",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  //Put

  const handleProfileSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { catalogName } = evt.target.elements;

    formData.append("catalogName", catalogName.value);
    formData.append("id", id);
    console.log(id);

    axios
      .put(`http://49.12.13.213:9090/api/v1/catalog/update`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const [modalShow, setModalShow] = React.useState(false);

  const [editModal, setEditModal] = React.useState(false);

  const [deletModal, setDeletModal] = React.useState(false);

  return (
    <div className="catalog">
      <div className="catalog-title">
        <form onSubmit={handleSubmit} action="" className="catalog-form">
          <div className="catalog-item">
            <input
              type="text"
              required
              name="catalogName"
              placeholder="Catalog name"
              className="catalog-inputs"
            />
          </div>
          <div className="catalog-btns">
            <button
              // onClick={() => refreshPage()}
              onClick={() => setModalShow(true)}
              type="submit"
              id="btnSubmit"
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
            {/* <th className="catalog-names">Image</th> */}
            <th className="catalog-names">Name</th>
            <th className="catalog-names">Edit</th>
            <th className="catalog-names">Delete</th>
          </tr>
        </thead>
        <tbody className="catalog-list">
          {data &&
            data.map((e) => (
              <tr>
                <th>{e.id}</th>
                {/* <th>
                  <img src={img} className="catalog-pic" alt="" />
                </th> */}
                <th>{e.catalogName}</th>
                <th onClick={openModal}>
                  <button
                    onClick={() => setNewId(e?.id)}
                    type="submit"
                    className="catalog-button"
                  >
                    <MdModeEditOutline />
                  </button>
                </th>
                <th onClick={() => setDeletModal(true)} >
                  <button
                    onClick={(item) => CatalogDelete(e?.id, item)}
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
        <button className="new-close" onClick={closeModal}>
          close
        </button>
        <form className="news-form" onSubmit={handleProfileSubmit}>
          <input
            type="text"
            className="news-input"
            placeholder="catalogName..."
            name="catalogName"
            defaultValue={data.catalogName}
          />
          <button
            className="catalog__btns"
            type="submit"
            onClick={() => setEditModal(true)}
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

      <DeleteModal show={deletModal} onHide={() => setDeletModal(false)} />
    </div>
  );
};

export default AdminCatalog;
