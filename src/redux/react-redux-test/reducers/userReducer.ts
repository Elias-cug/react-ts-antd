import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: 1,
  username: 'liyish',
  email: 'liyish@163.com',
  phone: '10086',
  locale: 'zh-cn'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateReducer: (state, action) => {
      const newInfo = action.payload;
      Object.keys(newInfo).forEach(item => {
        state[item] = newInfo[item];
      });
    }
  }
});

export const selectUser = (state): any => state.user;

export const { updateReducer } = userSlice.actions;

export default userSlice.reducer;
