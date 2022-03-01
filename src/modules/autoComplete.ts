import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface ResultDataType {
  name: string;
  id: number;
}

interface AutoComplete {
  data: ResultDataType[];
}

export const callApi = createAsyncThunk('autoComplete/callApi', async (userInput: string) => {
  try {
    const { data }: AutoComplete = await axios.get('https://api.clinicaltrialskorea.com/api/v1/search-conditions', {
      params: {
        name: userInput,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const autoComplete = createSlice({
  name: 'autoComplete',
  initialState: { data: [] } as AutoComplete,
  reducers: {},
  extraReducers: {
    [callApi.fulfilled.type]: (state: AutoComplete, action: PayloadAction<ResultDataType[]>) => {
      state.data = action.payload;
    },
  },
});
