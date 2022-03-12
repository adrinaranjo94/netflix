import React from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import "./styles.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__contents">
        {/* title */}
        <Text classes="header__title">Test</Text>
        {/* 2 buttons */}
        <div className="header__buttons">
          <Button classes="header__button">Play</Button>
          <Button classes="header__button">My List</Button>
        </div>
        {/* description */}
        <h1 className="header__description">
          Description
          {/* {truncate(movie?.overview, 150)} */}
        </h1>
      </div>
      <div className="header--fadeBottom" />
    </header>
  );
};
