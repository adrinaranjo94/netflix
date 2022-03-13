import React from "react";
import { Movie } from "../Movie";
import { Text } from "../Text";
import "./styles.css";

export const Row = () => {
  return (
    <div className="row">
      <Text classes="mainRow">Netflix Originals</Text>
      <div className="row__movies">
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
        <Movie background="https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg" />
      </div>
    </div>
  );
};
