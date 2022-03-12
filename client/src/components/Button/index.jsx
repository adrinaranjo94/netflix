import React from "react";

export const Button = ({ children, classes, onClick = null }) => {
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
