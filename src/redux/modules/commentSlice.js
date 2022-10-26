import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://13.125.2.119:8080/api/comments",
        payload = {board_id : payload.postId, content : payload.content},
        {
            headers: {
            Authorization: localStorage.getItem("token"),
            "Refresh-Token": localStorage.getItem("refresh-token"),
            "Content-Type": "application/json",
            },
            }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `http://13.125.2.119:8080/api/comments/${payload}`,
        {
            headers: {
            Authorization: localStorage.getItem("token"),
            "Refresh-Token": localStorage.getItem("refresh-token"),
            "Content-Type": "application/json",
            },
            }
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getCommentById = createAsyncThunk(
  "GET_COMMENT_BY_ID",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://13.125.2.119:8080/api/comments?board_id=${payload}`,
        {
            headers: {
            Authorization: localStorage.getItem("token"),
            "Refresh-Token": localStorage.getItem("refresh-token"),
            "Content-Type": "application/json",
            },
            }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __updateComment = createAsyncThunk(
    "UPDATE_COMMENT",
    async (payload,thunkAPI)=>{
        try{
            const {id} = payload
            const payloadContent = payload.content
            const {data} = await axios.put(`http://13.125.2.119:8080/api/comments/${id}`, {content : payloadContent},
            {
                headers: {
                Authorization: localStorage.getItem("token"),
                "Refresh-Token": localStorage.getItem("refresh-token"),
                "Content-Type": "application/json",
                },
                })
            return thunkAPI.fulfillWithValue(payload)
        }catch(e){
            return thunkAPI.rejectWithValue(e.code)
        }
    }
);

const initialState = {
  comment: {
    content: "",
    commentId: 1,
  },
  error: null,
  isLoading: false,

  comments: {
    data: [],
  },
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.pending]: (state, action) => {
      state.comment.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.comment.isLoading = false;
      state.comments.data.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.comment.isLoading = false;
    },
    [__deleteComment.pending]: (state, action) => {
      state.isLoading = true;
    },

    [__deleteComment.fulfilled]:(state,action)=>{
        const target = state.comments.data.filter((comment)=>{
            return comment.id !== action.payload.id
        })
        state.comments.data = target
    },
    [__deleteComment.fulfilled]: (state, action) => {
      const target = state.comments.data.filter(
        (comment) => comment.id !== action.payload
      );
      state.comments.data = target;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__updateComment.pending]: (state, action) => {
      state.isLoading = true;
    },

    [__updateComment.fulfilled]:(state,action)=>{
        state.isLoading = false
        const target = state.comments.data.findIndex((comment)=>(
             comment.id === action.payload.id
        ))
    
        state.comments.data.splice(target,1,action.payload)
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.comments.data.findIndex((comment) => {
        return comment.id === action.payload.id;
      });
      state.comments.data.splice(target, 1, action.payload);
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getCommentById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getCommentById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.data = action.payload;
    },
    [__getCommentById.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
