import { useState } from "react";
import { Link } from "react-router-dom";
import digital from "../../Assests/Img/prints.png";
import "./Header.css";
import light from "../../Assests/Img/light.png";
import close from "../../Assests/Img/closes.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect } from "react";
import Modal from "../Modal/Modal";

const customStyles = {
  content: {
    top: "50%",
    left: "84%",
    right: "auto",
    bottom: "auto",
    height: "100vh",
    width: "100%",
    marginRight: "-100%",
    transform: "translate(-50%, -50%)",
  },
};

export const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://49.12.13.213:9090/api/v1/catalog/get-list")
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, []);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  //SubCatalog List get

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://49.12.13.213:9090/api/v1/subcatalog/list")
      .then((res) => res.json())
      .then((data) => setDatas(data?.data));
  }, []);

  console.log(datas);

  const [korzinkaModal, setKorzinkaModal] = useState(false);
  function openKorzinkaModal() {
    setKorzinkaModal(!korzinkaModal);
  }

  return (
    <nav>
      <div className="container">
        <ul className="header__list">
          <li className="header__items ">
            <Link className="header-link" to="/">
              <img src={digital} alt="" className="header-img" />
            </Link>
          </li>
          <li className="header__item">
            <a href="#">Home</a>
          </li>
          <li className="header__item">
            <a href="#abouts">About Us</a>
          </li>
          <li className="header__item">
            <NavDropdown title="Catalog" id="navbarScrollingDropdown">
              {data &&
                data.map((e) => (
                  <NavDropdown.Item href="#category">
                    <a href="#category" className="link">
                      {e.catalogName}
                    </a>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </li>
          <li className="header__item">
            <NavDropdown title="SubCatalog" id="navbarScrollingDropdown">
              {datas &&
                datas.map((e) => (
                  <NavDropdown.Item
                    onClick={() => window.scrollTo({ top: 0 })}
                    to={`/catalog=${e.subcatalogID}`}
                  >
                    <Link
                      onClick={() => window.scrollTo({ top: 0 })}
                      to={`/catalog=${e.subcatalogID}`}
                      className="link"
                    >
                      {e.subcatalogName}
                    </Link>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </li>
          <li className="header__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="header-title">
          <a
            href="tel:+998990118934"
            target="_blank"
            className="nav__btn"
            rel="noreferrer"
          >
            <p className="nav__number">+998 78 888 09 99</p>
            <span className="nav__contact-text">Contact</span>
          </a>
        </div>
        <button onClick={() => openKorzinkaModal()} className="header-btn">
          <img src={light} alt="" className="header-imgs" />
        </button>
      </div>

      <Modal show={korzinkaModal}>
        <button onClick={() => setKorzinkaModal()} className="modal-closes">
          <img src={close} alt="" className="modal-img" />
        </button>
        <ul className="modal-list">
          <li className="modal-item">
            <a href="#" className="modal-link">
              Home
            </a>
          </li>
          <li className="modal-item">
            <a href="#abouts" className="modal-link">
              About Us
            </a>
          </li>
          <li className="modal-item">
            <a href="#category" className="modal-link">
              Categories
            </a>
          </li>
          <li className="modal-item">
            <a href="#contact" className="modal-link">
              Contact
            </a>
          </li>
          <li className="modal-item">
            <a
              href="tel:+998990118934"
              target="_blank"
              className="nav__btn modal__btn"
              rel="noreferrer"
            >
              <p className="nav__number">+998 78 888 09 99</p>
              <span className="nav__contact-text">Contact</span>
            </a>
          </li>
        </ul>
      </Modal>

      {/* <div className="header-modal">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ul className="modal-list">
            <button onClick={closeModal} className="modal-closes">
              <img src={close} alt="" className="modal-img" />
            </button>
            <li className="modal-item">
              <a href="#" className="modal-link">
                Home
              </a>
            </li>
            <li className="modal-item">
              <a href="#abouts" className="modal-link">
                About Us
              </a>
            </li>
            <li className="modal-item">
              <a href="#category" className="modal-link">
                Categories
              </a>
            </li>
            <li className="modal-item">
              <a href="#contact" className="modal-link">
                Contact
              </a>
            </li>
            <li className="modal-item">
              <a
                href="tel:+998990118934"
                target="_blank"
                className="nav__btn modal__btn"
                rel="noreferrer"
              >
                <p className="nav__number">+998 78 888 09 99</p>
                <span className="nav__contact-text">Contact</span>
              </a>
            </li>
          </ul>
        </Modal>
      </div> */}
    </nav>
  );
};
