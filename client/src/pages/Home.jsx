import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Row } from "../components/Row";
import { useAsyncState } from "../core/asyncState";
import { MoviesService } from "../services/movies";

export const Home = () => {
  const [categories, setCategories] = useState([
    "Netflix Originals",
    "Drama",
    "Comedy",
    "Suspense",
  ]);
  const [moviesByCategory, setMoviesByCategory] = useAsyncState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const { fetchMoviesByCategory } = MoviesService();
      const auxMovies = {};
      categories.forEach(async (category, index) => {
        const responseData = await fetchMoviesByCategory(category);

        auxMovies[category] = responseData.data.movies;
        if (index === categories.length - 1) {
          setMoviesByCategory(auxMovies).then((x) => {
            console.log(auxMovies);
            setLoaded(true);
          });
        }
      });
    };
    fetchData();
  }, [categories]);

  if (!loaded) {
    return <div>Loading</div>;
  }
  return (
    <>
      <Header movie={moviesByCategory[categories[0]][2]} />
      {loaded &&
        categories.map((category) => {
          console.log(moviesByCategory);
          return <Row movies={moviesByCategory[category]} title={category} />;
        })}
    </>
  );
};
