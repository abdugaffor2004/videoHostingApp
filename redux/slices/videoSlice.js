import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  videos: [],
}

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideosData: (state, action) => {
      state.videos = [...action.payload]
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
    "videos/getVideoDataAsync",
    async () =>{
        let {data} = await axios.get(`${process.env.BASE_URL}/api/videoContent`)
        return data
    }
)


export const uploadVideosDataAsync = createAsyncThunk(
    "videos/uploadVideoDataAsync",
    async (videoData) =>{
        await axios.post(`${process.env.BASE_URL}/api/videoContent`, videoData)
    }
)

// Action creators are generated for each case reducer function
export const { setVideosData, incrementByAmount } = videoSlice.actions

export default videoSlice.reducer