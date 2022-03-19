import React from "react";
import { Route, Switch } from "react-router-dom";
import { MovieProvider } from "../../context/movieContext";
import { Home } from "../../pages/Home";
import { Search } from "../../pages/Search";
import { Navbar } from "../Navbar";

export const Content = () => {
  return (
    <MovieProvider>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </MovieProvider>
  );
};
