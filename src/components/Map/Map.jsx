import React from "react";
import Iframe from 'react-iframe'
import './Map.css'

function Map() {
  return (
    <div className="map">
      <Iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11987.542677550337!2d69.25199355!3d41.311350749999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1663309729451!5m2!1sru!2s"
      width={100}
      styles={{width:"100%"}}
      className="iframe"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
