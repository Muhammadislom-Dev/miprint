import React from "react";
import P1 from "../../Assests/Img/p1.jpg";
import blog from "../../Assests/Img/blog2.jpg";
import "./About.css";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";
import axios from "axios";

const About1 = () => {
  const [datas, setData] = useState([]);
  var { blogsId } = useParams();

  useEffect(() => {
    axios
      .get("http://49.12.13.213:9090/api/v1/home-news/list?offset=1&limit=20")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [blogsId]);

  let ref11 = useRef();

console.log(datas.data)


  return (
    <div  className="aboutp">
      <div  ref={ref11} className="container">
        {/* <h1 className="about__name">{datas.data.newsBody}</h1> */}
        <div className="large-container">
          <div className="top">
            <div className="img-container">
              <img className="about-imgs" src={blog} alt="" />
            </div>
            {/* <p className="about-text">{datas.data.newsTitle}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
