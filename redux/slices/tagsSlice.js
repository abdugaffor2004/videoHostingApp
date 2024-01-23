import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  tags: [],
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTagsData: (state, action) => {
      state.tags = [...action.payload]
    },
  },

  extraReducers: (builder) =>{
    builder.addCase(
        getTagsDataAsync.fulfilled,
        (state, action) => { state.tags = [...action.payload] }
    )
  }

})


export const getTagsDataAsync = createAsyncThunk(
    "tags/getTagsDataAsync",
    async () =>{
        let {data} = await axios.get(`https://video-hosting-app-virid.vercel.app/api/tags`)
        console.log(data)
        return data
    }
)

export const uploadTagsDataAsync = createAsyncThunk(
  "tags/uploadTagsDataAsync",
  async (tagData) =>{
      await axios.post(`https://video-hosting-app-virid.vercel.app/api/tags`, tagData)
  }
)



// Action creators are generated for each case reducer function
export const { setTagsData } = tagsSlice.actions

export default tagsSlice.reducer