import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";
import { fetchMovieByIdUrl, fetchUpcomingMovieUrl } from "../../../api.config";

const initialState = {
  movieList: [],
  movieDescription: {},
};

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  const response = await api.get(fetchUpcomingMovieUrl);
  return response.data.results;
});

export const fetchMovieById = createAsyncThunk(
  "movie/fetchMovieById",
  async ({ id }) => {
    const response = await api.get(`${id}${fetchMovieByIdUrl}`);
    return response.data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movieList = action.payload;
    });
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.movieDescription = action.payload;
    });
  },
});

export const { setMovieList } = movieSlice.actions;

export default movieSlice.reducer;
