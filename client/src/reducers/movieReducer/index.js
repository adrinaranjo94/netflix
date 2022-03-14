import * as movieTypes from "./types";

const movieReducer = (state, action) => {
  switch (action.type) {
    case movieTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: { ...state.categories, [action.payload.category]: [] },
      };
    case movieTypes.REMOVE_CATEGORY:
      let auxCategories = { ...state.categories };
      delete auxCategories[action.payload.category];
      return {
        ...state,
        categories: { ...auxCategories },
      };
    case movieTypes.ADD_MOVIES_TO_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: [...action.payload.movies],
        },
      };
    case movieTypes.ADD_MOVIES:
      return {
        ...state,
        movies: [action.payload.movies],
      };
    case movieTypes.ADD_MOVIE_TO_HEADER:
      return {
        ...state,
        header: { ...action.payload.movie },
      };
    case movieTypes.SET_ISLOADED:
      return {
        ...state,
        isLoaded: action.payload.isLoaded,
      };
    default:
      return { ...state };
  }
};

export { movieReducer };
