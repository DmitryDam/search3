import React from "react";

const Medal = ({ image = "", width = 30, height = 30 }) => (
  <img src={image} alt="medal" width={width} height={height} />
);

export default Medal;
