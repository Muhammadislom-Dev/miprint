import React from "react";
import "./AdminProduct.css";
import img from "../../Assests/Img/Image 5.png";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import axios, { Axios } from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { useEffect } from "react";
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

function AdminProduct() {
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

  /*********************    subcatalog get         ********************************* */

  const [catalog, setCatalog] = useState([]);
  const [click, setClick] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setClick(e.target.value);
  };
  console.log(click, "click");

  useEffect(() => {
    fetch("http://49.12.13.213:9090/api/v1/subcatalog/list")
      .then((res) => res.json())
      .then((data) => setCatalog(data?.data));
  }, []);

  // ************************  product post ***********

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { productName } = evt.target.elements;
    const { productPrice } = evt.target.elements;
    const { productDescriptions } = evt.target.elements;
    formData.append("productName", productName.value);
    formData.append("productPrice", productPrice.value);
    formData.append("productDescriptions", productDescriptions.value);
    formData.append("subCatalogID", click);

    axios
      .post(`http://49.12.13.213:9090/api/v1/product/create`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://49.12.13.213:9090/api/v1/subcatalog/product?offset=1&limit=15&id=${click}`
      )
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [click]);

  //Put Product

  const [id, setNewId] = useState("");

  const handleProfileSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { productName, productPrice, productDescriptions, productIsTop, productIsNew } =
      evt.target.elements;

    formData.append("productName", productName.value);
    formData.append("productPrice", productPrice.value);
    formData.append("productDescriptions", productDescriptions.value);
	formData.append("productIsTop", productIsTop.value)
	formData.append("productIsNew", productIsNew.value)
    formData.append("id", id);
    console.log(id);

    axios
      .put(`http://49.12.13.213:9090/api/v1/product/update`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  //Delete product

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

  const [modalShow, setModalShow] = React.useState(false);

  const [editModal, setEditModal] = React.useState(false);

  const [deletModal, setDeletModal] = React.useState(false);

  //Patch

  return (
    <div className="adminproduct">
      <form action="">
        <select className="subcatalog-select" onChange={onChange}>
          {catalog &&
            catalog.map((e) => (
              <option value={e.subcatalogID}>{e.subcatalogName}</option>
            ))}
        </select>
      </form>
      <div className="adminproduct-title">
        <form onSubmit={handleSubmit} action="" className="adminform">
          <div className="catalog-items">
            <input type="file" className="catalog-input" id="file" />
            <label className="catalog-label" htmlFor="file">
              <img src={img} className="catalog-img" alt="" />
            </label>
          </div>
          <div className="admin-title">
            <input
              type="text"
              required
              name="productName"
              placeholder="Product name"
              className="adminproduct-inputs"
            />
            <input
              type="number"
              required
              name="productPrice"
              placeholder="Product price"
              className="adminproduct-inputs"
            />
            <input
              type="text"
              required
              placeholder="Product description"
              className="adminproduct-inputs"
              name="productDescriptions"
            />
			<input type="checkbox" name="productIsTop" />
			<input type="checkbox" name="productIsNew" />
            <button type="submit" className="catalog-btn">
              Create
            </button>
          </div>
        </form>
      </div>

      <table className="catalog-tables">
        <thead>
          <tr>
            <th className="catalog-names">ID</th>
            <th className="catalog-names">Image</th>
            <th className="catalog-names">Name</th>
            <th className="catalog-names">Price</th>
            <th className="catalog-names">Description</th>
            <th className="catalog-names">Edit</th>
            <th className="catalog-names">Delete</th>
          </tr>
        </thead>
        <tbody className="catalog-list">
          {data &&
            data.data?.map((e) => (
              <tr>
                <th>{e.productId}</th>
                <th>
                  <img src={img} className="catalog-pic" alt="" />
                </th>
                <th>{e.productName}</th>
                <th>{e.productPrice} $</th>
                <th>{e.productDescriptions}</th>
                <th onClick={openModal}>
                  <button
                    onClick={() => setNewId(e?.productId)}
                    className="catalog-button"
                  >
                    <MdModeEditOutline />
                  </button>
                </th>
                <th onClick={(item) => CatalogDelete(e?.productId, item)}>
                  <button
                    onClick={() => setDeletModal(true)}
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
            placeholder="productName..."
            name="productName"
            defaultValue={data.productName}
          />
          <input
            type="text"
            className="news-input"
            placeholder="productPrice..."
            name="productPrice"
            defaultValue={data.productPrice}
          />
          <input
            type="text"
            className="news-input"
            placeholder="productDescriptions..."
            name="productDescriptions"
            defaultValue={data.productDescriptions}
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
}

export default AdminProduct;
