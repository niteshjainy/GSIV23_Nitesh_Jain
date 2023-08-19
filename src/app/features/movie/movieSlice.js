import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";
import {
  fetchMovieByIdUrl,
  fetchUpcomingMovieUrl,
  query,
} from "../../../api.config";

const initialState = {
  movieList: [],
  searchedMovieList: [],
  movieDescription: {},
};

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  const response = await api.get(`${fetchUpcomingMovieUrl}?${query}`);
  return response.data.results;
});

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
      state.movieList = action.payload;
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
