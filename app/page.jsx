'use client'

import axios from 'axios'
import prisma from '../lib/prisma'
import { useDispatch } from 'react-redux'
import { getVideosDataAsync, setVideosData } from '../redux/slices/videoSlice'
import { useEffect } from 'react'


// async function getVideos(){
//   let videos = await prisma.video.findMany({
//     include:{
//       tags:{
//         select:{name:true, id:true}
//       }
//     }
//   })
//   return videos
// }

// async function getVideos(){
//   let videos = await axios.get(`http://localhost:3000/api/videoContent`)
//   return videos
// }



export default function Home() {

  const dispatch = useDispatch()
  
  // const videos = await getVideos()
  // console.log(videos.data)
  // dispatch(setVideosData(videos.data))

  useEffect( () =>{
    dispatch(getVideosDataAsync())
  }, [] )

  

  return (
    <main className="mt-24 px-10 flex justify-around flex-wrap gap-x-5 gap-y-14">
      
    </main>
  )
}
