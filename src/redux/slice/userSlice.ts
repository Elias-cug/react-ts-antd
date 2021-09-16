import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface UserInfo {
  lang: string;
}

// Define the initial state using that type
const initialState: UserInfo = {
  lang: 'zh-cn'
};

export const counterSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    changeLang: (state, { payload }) => {
      state.lang = payload.lang;
    }
  }
});

export const { changeLang } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState): string => state.userInfo.lang;

export default counterSlice.reducer;
