import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
// EJEMPLO BASICO DE REDUX 
//ESTRUCTURA DE UN SLICE 
export interface CounterState {
    value: number
    mock_var: string
  }
  
  const initialState: CounterState = {
    value: 0,
    mock_var : 'example'
  }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrementByAmount(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    }
  },
});

//Existen thunks que son funciones asincronas que permite realizar el dispatch del slice ded funciones asincronas
export const incrementAsync = (amount: number): AppThunk => async (dispatch) => {
  setTimeout(()=> {dispatch(incrementByAmount(amount))
  },1000)
}

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
