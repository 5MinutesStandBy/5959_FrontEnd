import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"



export const __goodHeart = createAsyncThunk(
    "GOOD",
    async(payload,thunkAPI)=>{
        try{
            const board_id = payload
            const {data} = await axios.post(`http://13.125.2.119:8080/api/heart/${board_id}`,payload,
            {
                headers: {
                Authorization: localStorage.getItem("token"),
                "Refresh-Token": localStorage.getItem("refresh-token"),
                "Content-Type": "application/json",
                },
                });
                console.log(data)
                
            return thunkAPI.fulfillWithValue(board_id);
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
            state.isLoading = true
        },
        [__goodHeart.fulfilled]: (state,action)=>{
            state.isLoading = false
            state.heart = action.payload
        },
        [__goodHeart.rejected]: (state,action)=>{
            state.isLoading = false
            state.error = true
        }
    }

  })

  export const {} = heartSlice.actions;
  export default heartSlice.reducer;




