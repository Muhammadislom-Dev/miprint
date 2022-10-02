import React from "react";
import "./Content.css";
import notes from "../../Assests/Img/123.png";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import SendModal from "../SendModal";

function Content() {
  var { productId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://49.12.13.213:9090/api/v1/subcatalog/product?offset=1&limit=15&id=27`
      )
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [productId]);

  const [modalShow, setModalShow] = React.useState(false);



  return (
    <div className="content">
      <div className="container">
        <h4 className="content-name">Lorem, ipsum dolor.</h4>
        <div className="content-box">
          <div className="content-page">
            <h5 className="content-subname">Category</h5>
            <div className="content-title">
              <span className="content-text">Lorem ipsum dolor sit amet.</span>
              <span className="content-subtext">Lorem, ipsum dolor.</span>
            </div>
            <h5 className="content-subname">Размер стенда</h5>
            <div className="content-title">
              <span className="content-text">Lorem ipsum dolor sit amet.</span>
              <span className="content-subtext">200 x 150 sm</span>
              <span className="content-subtext">
                200 x 150 sm Lorem, ipsum.
              </span>
            </div>
            <h5 className="content-subname">
              Конструкция Roll-up (включает сборку роллапа)
            </h5>
            <div className="content-title">
              <span className="content-text">
                Lorem ipsum dolor sit amet Lorem, ipsum.
              </span>
            </div>
            <h5 className="content-subname">
              Сборка-разборка конструкции Клиента
            </h5>
            <div className="content-title">
              <span className="content-text">Lorem ipsum</span>
              <span className="content-text">
                Lorem ipsum dolor sit amet lorem
              </span>
            </div>
            <h5 className="content-subname">Комментарий к заказу</h5>
            <div className="content-title">
              <input
                type="text"
                className="content-input"
                placeholder="Enter..."
              />
            </div>
            <h5 className="content-subname">Количество</h5>
            <div className="content-title">
              <input
                type="tel"
                className="content-inputs"
                placeholder="Enter..."
              />
            </div>
            <div className="content-titles">
              <h4 className="content-number">{data.data?.productPrice} $</h4>
              <button
                onClick={() => setModalShow(true)}
                className="content-link"
              >
                Заказать
              </button>
            </div>
          </div>
          <div className="content__item">
            <img src={notes} alt="" className="content-img" />
          </div>
        </div>
      </div>

      <SendModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Content;
