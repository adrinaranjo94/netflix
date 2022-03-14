import { useReducer, createContext } from "react";
import { movieReducer } from "../../reducers/movieReducer";
import * as movieTypes from "../../reducers/movieReducer/types";

export const MovieContext = createContext();

const initialState = {
  movies: [],
  categories: { "Netflix Originals": [], Drama: [], Comedy: [], Suspense: [] },
  isLoaded: false,
  header: {},
};

export const MovieProvider = ({ children }) => {
  const [{ movies, categories, isLoaded, header }, dispatch] = useReducer(
    movieReducer,
    initialState
  );

  const addMovies = (movies) => {
    dispatch({ type: movieTypes.ADD_MOVIES, payload: { movies: movies } });
  };

  const addMoviesToCategory = (category, movies) => {
    if (category === "Netflix Originals") {
      dispatch({
        type: movieTypes.ADD_MOVIE_TO_HEADER,
        payload: {
          movie: { ...movies[parseInt(Math.random() * movies.length - 1)] },
        },
      });
    }

    dispatch({
      type: movieTypes.ADD_MOVIES_TO_CATEGORY,
      payload: { category, movies },
    });
  };

  const addCategory = (category) => {
    dispatch({
      type: movieTypes.ADD_CATEGORY,
      payload: {
        category,
      },
    });
  };

  const removeCategory = (category) => {
    dispatch({
      type: movieTypes.REMOVE_CATEGORY,
      payload: {
        category,
      },
    });
  };

  const setInfoLoaded = () => {
    dispatch({
      type: movieTypes.SET_ISLOADED,
      payload: {
        isLoaded: true,
      },
    });
  };

  const setInfoNotLoaded = () => {
    dispatch({
      type: movieTypes.SET_ISLOADED,
      payload: {
        isLoaded: false,
      },
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        header,
        categories,
        isLoaded,
        addMovies,
        addMoviesToCategory,
        addCategory,
        removeCategory,
        setInfoNotLoaded,
        setInfoLoaded,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
