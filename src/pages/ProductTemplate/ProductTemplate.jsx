import axios from "axios";
import React from "react";
import "./ProductTemplate.css";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import MyVerticallyCenteredModal from "../Modal/Modal";
import DeleteModal from "../DeleteModal";
import Modal from "react-modal";
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

function ProductTemplate() {
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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjo1MjkzMzkzMTQ5LCJpZCI6IjEiLCJyb2xlIjoiYWRtaW4ifQ.vq2jDKo866_AqtwWoi1W_DaPc5xz1YBA_5WA7v54-9Y";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { formItemTitle, formItemType, switchItemPrice,  switchItemTitle,  switchTitle, title } =
      evt.target.elements;
    formData.append("formItemTitle", formItemTitle.value);
    formData.append("formItemType", formItemType.value);
    formData.append("switchItemPrice", switchItemPrice.value);
    formData.append("switchItemTitle",switchItemTitle.value)
    formData.append("switchTitle", switchTitle.value);
    formData.append("title", title.value);

    axios
      .post("http://49.12.13.213:9090/api/v1/template/create", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://49.12.13.213:9090/api/v1/template/list?offset=1&limit=15", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

    console.log(data)

  //Delete template

  const CatalogDelete = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://49.12.13.213:9090/api/v1/template/delete?id=${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log("Delete data", res))
      .catch((err) => console.log(err));
  };

  //Put template

  const [id, setNewId] = useState("");
  console.log(id, "aaaaaa");

  const handleProfileSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { formItemTitle, formItemType, switchItemPrice, switchItemTitle, switchTitle, title } = evt.target.elements;

    formData.append("formItemTitle", formItemTitle.value);
    formData.append("formItemType", formItemType.value);
    formData.append("switchItemPrice", switchItemPrice.value);
    formData.append("switchItemTitle", switchItemTitle.value);
    formData.append("switchTitle", switchTitle.value);
    formData.append("title", title.value);
    formData.append("id", id);
    console.log(id);

    axios
      .put(`http://49.12.13.213:9090/api/v1/template/update`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const [deletModal, setDeletModal] = React.useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  const [editModal, setEditModal] = React.useState(false);

  return (
    <div className="template">
      <div className="template-title">
        <form onSubmit={handleSubmit} action="" className="template-form">
          <input
            type="text"
            placeholder="formItemTitle..."
            name="formItemTitle"
            className="template-input"
          />
          <input
            type="text"
            placeholder="formItemType...."
            name="formItemType"
            className="template-input"
          />
          <input
            type="text"
            placeholder="switchItemPrice.."
            name="switchItemPrice"
            className="template-input"
          />
          <input
            type="text"
            placeholder="switchItemTitle..."
            name="switchItemTitle"
            className="template-input"
          />
          <input
            type="text"
            placeholder="switchTitle"
            name="switchTitle"
            className="template-input"
          />
          <input
            type="text"
            placeholder="title.."
            name="title"
            className="template-input"
          />
          <button onClick={() => setModalShow(true)} className="template-btn">
            Create
          </button>
        </form>
      </div>

      <table className="catalog-table">
        <thead>
          <tr>
            <th className="catalog-names">title</th>
            <th className="catalog-names">switchTitle</th>
            <th className="catalog-names">switchBody</th>
            <th className="catalog-names">switchItemTitle</th>
            <th className="catalog-names">switchItemPrice</th>
            <th className="catalog-names">formItemTitle</th>
            <th className="catalog-names">formItemType</th>
            <th className="catalog-names">Edit</th>
            <th className="catalog-names">Delete</th>
          </tr>
        </thead>
        <tbody className="catalog-list">
          {data &&
            data.data?.map((e) => (
              <tr>
                <th>{e.body.form.formItemTitle}</th>
                <th>{e.body.form.formItemType}</th>
                <th>{e.switch.switchBody.switchItemPrice}</th>
                <th>{e.switch.switchBody.switchItemTitle}</th>
                <th>{e.switchItemPrice}</th>
                <th>{e.formItemTitle}</th>
                <th>{e.formItemType}</th>
                <th>
                  <button onClick={() => setNewId(e?.id)} type="submit" className="catalog-button">
                    <MdModeEditOutline />
                  </button>
                </th>
                <th onClick={() => setDeletModal(true)}>
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
            placeholder="title..."
            name="title"
            defaultValue={data.title}
          />
          <input
            type="text"
            className="news-input"
            placeholder="switchTitle..."
            name="switchTitle"
            defaultValue={data.switchTitle}
          />
          <input
            type="text"
            className="news-input"
            placeholder="switchBody..."
            name="switchBody"
            defaultValue={data.switchBody}
          />
          <input
            type="text"
            className="news-input"
            placeholder="switchItemTitle..."
            name="switchItemTitle"
            defaultValue={data.switchItemTitle}
          />
          <input
            type="text"
            className="news-input"
            placeholder="formItemTitle..."
            name="formItemTitle"
            defaultValue={data.formItemTitle}
          />
          <input
            type="text"
            className="news-input"
            placeholder="switchItemPrice..."
            name="switchItemPrice"
            defaultValue={data.switchItemPrice}
          />
          <input
            type="text"
            className="news-input"
            placeholder="formItemType..."
            name="formItemType"
            defaultValue={data.formItemType}
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

      <DeleteModal show={deletModal} onHide={() => setDeletModal(false)} />

      <EditModal show={editModal} onHide={() => setEditModal(false)} />
    </div>
  );
}

export default ProductTemplate;
