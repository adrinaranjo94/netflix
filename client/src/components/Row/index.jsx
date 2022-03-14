import React from "react";
import { Movie } from "../Movie";
import { Text } from "../Text";
import "./styles.css";

export const Row = ({ movies, title }) => {
  return (
    <div className="row">
      <Text classes="mainRow">{title}</Text>
      <div className="row__movies">
        {movies &&
          movies.map((movie) => (
            <Movie background={movie.backdrop_path} title={movie.title} />
          ))}
      </div>
    </div>
  );
};
