import React from "react";
import { BrowserRouter } from "react-router-dom";
export const AppRouter = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
