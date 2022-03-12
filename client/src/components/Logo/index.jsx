import React from "react";

export const Logo = ({ classes, src, alt }) => {
  return <img src={src} alt={alt} className={classes} />;
};
