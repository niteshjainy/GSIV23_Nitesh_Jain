import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";
import { fetchUpcomingMovie } from "../../../api.config";

const initialState = {
  movieList: [],
};

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  const response = await api.get(fetchUpcomingMovie);
  return response.data.results;
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movieList = action.payload;
    });
  },
});

export const { setMovieList } = movieSlice.actions;

export default movieSlice.reducer;
