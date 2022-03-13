import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Navbar } from "../Navbar";

export const Content = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};
