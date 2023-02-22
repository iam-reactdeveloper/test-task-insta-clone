const {createSlice} = require('@reduxjs/toolkit');

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    user: null,
  },
  reducers: {
    loginUserAction: (state, action) => {
      state.user = action.payload;
    },
    logoutUserAction: state => {
      state.user = null;
    },
  },
});

export const {loginUserAction, logoutUserAction} = loginSlice.actions;
export default loginSlice.reducer;
