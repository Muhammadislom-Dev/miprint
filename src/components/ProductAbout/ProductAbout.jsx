import React, { useState, useEffect } from "react";
import "./ProductAbout.css";
import notes from "../../Assests/Img/notes.png";
import Zoom from "react-reveal/Zoom";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import axios from "axios";

const ProductAbout = () => {

  const [modalDetails, setModalDetails] = useState(null);
  const navigate = useNavigate();

  const goToProduct = (id) => {
    setModalDetails(null);
    document.body.style.overflowY = "auto";
    navigate("/product-about");
  };

  const handleModalDetails = (data) => {
    setModalDetails(data);
    document.body.style.overflowY = data ? "hidden" : "auto";
  };

  var { subcatalogID } = useParams();

  const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get(`http://49.12.13.213:9090/api/v1/subcatalog/product?offset=1&limit=15&id=${subcatalogID}`)
    .then(function (response) {
      setData(response.data);
      console.log(response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    })
   }, [subcatalogID])

  return (
    <div className="product">
      <div className="container">
        <h2 className="product-name">Ручки</h2>
        <div className="product-box">
          {data &&
            data.data?.map((e, i) => (
              <div className="product-title">
                <Link
                  key={i}
                  id={e.productId}
                  className="product-link"
                  to={`/productid=${e.productId}`}
                >
                  <div className="product-img1">
                    <img src={notes} alt="" className="product-img" />
                  </div>
                  <h3 className="product-names">{e.productName}</h3>
                  <p className="product-cost">{e.productPrice} $</p>
                  <p className="product-text">{e.productDescriptions}</p>
                  <div className="products__item-btns">
                    <button
                      className="products__item-btn"
                      // onClick={() => handleModalDetails()}
                    >
                      <AiOutlineEye style={{ color: "#302780" }} />
                    </button>
                    <button
                      // onClick={() => goToProduct()}
                      className="products__item-btn"
                    >
                      <HiArrowRight style={{ color: "#302780" }} />
                    </button>
                    <button
                      className="products__item-btn"
                      // onClick={() => handleModalDetails()}
                    >
                      <AiOutlineSearch style={{ color: "#302780" }} />
                    </button>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
