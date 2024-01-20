'use client'

import { useDispatch, useSelector } from 'react-redux'
import { getVideosDataAsync} from '../redux/slices/videoSlice'
import { useEffect } from 'react'
import VideoCard from './components/videoCard'

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
  const videoList = useSelector( (state) => state.videos.videos )
  
  // const videos = await getVideos()
  // console.log(videos.data)
  // dispatch(setVideosData(videos.data))

  useEffect( () =>{
    dispatch(getVideosDataAsync())
  }, [] )

  

  return (
    <main className="mt-24 px-10 flex justify-around flex-wrap gap-x-5 gap-y-14">
      {videoList.map( (video) => <VideoCard key={video.id} filePath={video.id}/> )}
    </main>
  )
}
