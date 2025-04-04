import React from "react";

const ImageComponent = ({ src }) => {
  return (
    <div className="col-lg-2 col-4 d-flex align-items-center justify-content-center ">
      <img src={src} className="img-fluid " alt="" />
    </div>
  );
};

export default ImageComponent;
