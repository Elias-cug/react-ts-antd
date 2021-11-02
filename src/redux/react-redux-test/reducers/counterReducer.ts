import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '@/redux/react-redux-test/store';
import { fetchCount } from '@/api/react-use';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

// 初始值
const initialState: CounterState = {
  value: 0,
  status: 'idle'
};

// 异步
export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
  const response = await fetchCount(amount);
  return response.data;
});

// 同步
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  }
});

// getters
export const selectCount = (state: RootState): any => state.counter.value;

export const incrementIfOdd = (amount: number): AppThunk => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
