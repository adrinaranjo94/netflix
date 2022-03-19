import React, { useContext, useEffect } from "react";
import { Header } from "../components/Header";
import { Row } from "../components/Row";
import { MovieContext } from "../context/movieContext";
import { MoviesService } from "../services/movies";

export const Home = () => {
  const { categories, isLoaded, addMoviesToCategory, header, setInfoLoaded } =
    useContext(MovieContext);
  useEffect(() => {
    buildHome();
  }, []);

  const buildHome = () => {
    const { fetchMoviesByCategory } = MoviesService();
    Object.keys(categories).forEach(async (category, index, arr) => {
      const responseData = await fetchMoviesByCategory(category);
      addMoviesToCategory(category, [...responseData.data.movies]);
      if (index === arr.length - 1) {
        setInfoLoaded();
      }
    });
  };

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <>
      {<Header movie={header || {}} />}
      {isLoaded &&
        Object.keys(categories).map((category) => {
          return <Row movies={categories[category]} title={category} />;
        })}
    </>
  );
};
