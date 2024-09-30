import { createSlice } from '@reduxjs/toolkit'
const AlertSlice = createSlice({
  name: 'alerte',
  initialState: {
    display: false,
    message:'',
    type:''
  },
  reducers: {
    message: (state, action) => {
      const { display, message, type } = action.payload;
      state.display   = display;
      state.message   = message; 
      state.type      = type ;
    },
  },
});

export const { message } = AlertSlice.actions;
export default AlertSlice.reducer;