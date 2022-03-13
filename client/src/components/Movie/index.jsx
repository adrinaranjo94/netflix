import React from "react";
import styled from "styled-components";
import "./styles.css";

const BoxMovie = styled.div`
  background-image: ${(props) => `url('${props.background}')` || "red"};
  position: relative;

  &:hover {
    .tooltip {
      visibility: visible;
    }
  }
`;

export const Movie = ({ classes, background }) => {
  return (
    <BoxMovie className="movie" background={background}>
      <div className="tooltip">Hola</div>
    </BoxMovie>
  );
};
