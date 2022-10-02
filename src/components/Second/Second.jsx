import React from "react";
import "./Second.css";
import blog from "../../Assests/Img/blog1.jpg";
import { CgCalendarDates, CgArrowRightO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Second() {


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://49.12.13.213:9090/api/v1/home-news/list?offset=1&limit=20")
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, []);

  return (
    <div className="second">
      <div className="container">
        <h2 className="second-name">Our Blog</h2>
        <div className="second-page">
          {data &&
            data.map((evt, i) => (
              <div key={i} className="second-list">
                <img src={blog} alt="" className="second-img" />
                <h4 className="second-names">{evt.newsTitle}</h4>
                <p className="second-text">{evt.newsBody}</p>
                <div className="second-item">
                  <p className="second-date">
                    <CgCalendarDates /> {evt.NewsDate}
                  </p>
                </div>
                  {/* <Link to={`/blogId=${evt.NewsId}`} className="second-btn">
                    <span className="blogs__btn-text">Learn More</span>
                    <CgArrowRightO className="blogs__btn-icon" />
                  </Link> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Second;
