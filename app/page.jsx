'use client'

import { useDispatch, useSelector } from 'react-redux'
import { getVideosDataAsync} from '../redux/slices/videoSlice'
import { useEffect } from 'react'
import VideoCard from './components/videoCard'


export default function Home() {

  const dispatch = useDispatch()
  const videoList = useSelector( (state) => state.videos.videos )

  useEffect( () =>{
    dispatch(getVideosDataAsync())
  }, [] )

  

  return (
    <main className="mt-24 px-10 flex justify-around flex-wrap gap-x-5 gap-y-14">
      {videoList.map( (video) => <VideoCard key={video.id} filePath={video.id}/> )}
    </main>
  )
}
