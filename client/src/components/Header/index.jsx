import React from "react";
import { truncate } from "../../utils/truncate";
import { Button } from "../Button";
import { Text } from "../Text";
import "./styles.css";

export const Header = ({ movie }) => {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url('${movie.backdrop_path}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="header__contents">
        <Text classes="header__title">{movie.title}</Text>
        <div className="header__buttons">
          <Button classes="header__button">Play</Button>
          <Button classes="header__button">My List</Button>
        </div>
        <h1 className="header__description">
          {truncate(movie?.overview || "", 150)}
        </h1>
      </div>
      <div className="header--fadeBottom" />
    </header>
  );
};
