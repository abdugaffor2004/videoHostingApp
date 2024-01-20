import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  videosUrlList:[],
  videos: []
}

export const counterSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideosData: (state, action) => {
      state.videos = [...action.payload]
    },
    setVideosUrl: (state, action) => {
        state.videosUrlList = [...action.payload]
    },
  },

  extraReducers: (builder) =>{
    builder.addCase(
        getVideosDataAsync.fulfilled,
        (state, action) => { state.videos = [...action.payload] }
        
    )
  }
})

export const getVideosDataAsync = createAsyncThunk(
    "counter/getVideoDataAsync",
    async () =>{
        let {data} = await axios.get(`http://localhost:3000/api/videoContent`)
        console.log(data)
        return data
    }
)


export const uploadVideosDataAsync = createAsyncThunk(
    "counter/uploadVideoDataAsync",
    async (videoData) =>{
        await axios.post(`http://localhost:3000/api/videoContent`, videoData)
    }
)

// Action creators are generated for each case reducer function
export const { setVideosData, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer