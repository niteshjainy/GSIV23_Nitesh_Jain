import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";
import { fetchUpcomingMovieUrl, query } from "../../../api.config";
import { filterMovieByDateDesc } from "../../../utills/globalFunction";

const initialState = {
  movieList: [],
  searchedMovieList: [],
  movieDescription: {},
  hasMore: true,
  pageNumber: 1,
};

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (arg, { getState }) => {
    const currentState = getState();
    const response = await api.get(
      `${fetchUpcomingMovieUrl}?page=${currentState.movie.pageNumber}&${query}`
    );
    return filterMovieByDateDesc(response.data.results, "release_date");
  }
);

export const fetchMovieById = createAsyncThunk(
  "movie/fetchMovieById",
  async ({ id }) => {
    const response = await api.get(`movie/${id}?${query}`);
    return response.data;
  }
);

export const searchMovie = createAsyncThunk(
  "movie/searchMovie",
  async ({ key }) => {
    const response = await api.get(`search/movie?query=${key}&${query}`);
    return response.data.results;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    clearSearchMovieList: (state, action) => {
      state.searchedMovieList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      if (action.payload.length === 0) state.hasMore = false;
      else {
        state.hasMore = true;
        state.pageNumber = state.pageNumber + 1;
        state.movieList = [...state.movieList, ...action.payload];
      }
    });
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.movieDescription = action.payload;
    });
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.searchedMovieList = action.payload;
    });
  },
});

export const { clearSearchMovieList } = movieSlice.actions;

export default movieSlice.reducer;
