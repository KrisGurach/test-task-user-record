import { createSlice } from '@reduxjs/toolkit';

const recordsSlice = createSlice({
  name: 'records',
  initialState: [],
  reducers: {
    addRecord: (state, action) => {
      state.push(action.payload);
    },
    updateRecord: (state, action) => {
      const index = state.findIndex(record => record.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload.updatedData;
      }
    },
  },
});

export const { addRecord, updateRecord } = recordsSlice.actions;
export default recordsSlice.reducer;
