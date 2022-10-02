import React from "react";
import blog from "../../Assests/Img/blog2.jpg";
import "./About.css";

const About3 = () => {
  return (
    <div className="aboutp">
      <div className="container">
        <h1 className="about__name">Lorem, ipsum dolor.</h1>
        <div className="large-container">
          <div className="top">
            <div className="img-container">
              <img className="about-img" src={blog} alt="" />
            </div>
            <p className="about-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis quae, maiores earum fuga enim labore doloremque
              quaerat corrupti nostrum laudantium dolores facere ex
              exercitationem! Accusamus eos quod tenetur aut harum. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Ratione neque rem
              corrupti unde quae eius consectetur sequi sint quia nihil
              laudantium molestias quisquam, illum officiis voluptatibus,
              tenetur molestiae quibusdam veniam. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Repudiandae nisi, pariatur nesciunt,
              maiores reiciendis dolores facilis nostrum autem deleniti
              obcaecati, earum totam at cum? Fugiat rerum nesciunt amet odit
              dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus qui, voluptates nostrum porro aspernatur non veritatis
              cumque voluptatem blanditiis nihil sint eaque iure iste
              reprehenderit omnis, modi nesciunt eos sequi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
