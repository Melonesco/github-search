import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { GithubUser, GithubUserState } from "./types";

const initialState: GithubUserState = {
  user: null,
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk<GithubUser, string>(
  "githubUser/fetchUser",
  async (username) => {
    const response = await axios.get<GithubUser>(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  }
);

const githubUserSlice = createSlice({
  name: "githubUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<GithubUser>) => {
          state.status = "succeeded";
          state.user = action.payload;
        }
      )
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default githubUserSlice.reducer;
