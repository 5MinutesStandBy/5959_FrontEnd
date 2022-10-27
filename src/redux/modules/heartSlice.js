import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"



export const __goodHeart = createAsyncThunk(
    "GOOD",
    async(payload,thunkAPI)=>{
        try{
            const {data} = await axios.put(`http://13.125.2.119:8080/api/heart/${id}`,payload,
            {
                headers: {
                Authorization: localStorage.getItem("token"),
                "Refresh-Token": localStorage.getItem("refresh-token"),
                "Content-Type": "application/json",
                },
                });
            return thunkAPI.fulfillWithValue(payload);
        }catch(e){
            return thunkAPI.rejectWithValue(payload)
        }
    }
)

const initialState = {
    heart:[],
    error: null,
    isLoading: false,
  };

  export const heartSlice = createSlice({
    name : "heart",
    initialState,
    reducers : {},
    extraReducers : {
        [__goodHeart.pending]: (state,action)=>{
            isLoading = true
        },
        [__goodHeart.fulfilled]: (state,action)=>{
            isLoading = false
            state.heart = action.payload
        },
        [__goodHeart.rejected]: (state,action)=>{
            isLoading = false
            state.error = true
        }
    }

  })

  export const {} = heartSlice.actions;
  export default heartSlice.reducer;




