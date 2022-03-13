import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Movie } from "../components/Movie";
import { Row } from "../components/Row";

export const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Row />
      <Row />
      <Row />
      <Row />
    </>
  );
};
