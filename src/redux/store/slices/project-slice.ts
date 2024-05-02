import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProjectResponse } from "../../../types/ProjectResponse";
import { CONSTANTS } from "../../../constants/constants";

export const fetchProjects = createAsyncThunk("fetchProjects", async () => {
  const data = await fetch(`${CONSTANTS.BASE_URL}/api/projects`);

  return data.json();
});

const initialState: {
  isLoading: boolean;
  projectsData: ProjectResponse[] | null;
  isError: boolean;
} = {
  isLoading: false,
  projectsData: null,
  isError: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.projectsData = action.payload;
    });
    builder.addCase(fetchProjects.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default projectSlice.reducer;
