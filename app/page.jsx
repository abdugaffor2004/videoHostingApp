import prisma from '../lib/prisma'



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

export default function Home() {
  // const videos = await getVideos()
  // console.log(videos)

  return (
    <main className="mt-24 px-10 flex justify-around flex-wrap gap-x-5 gap-y-14">
      
    </main>
  )
}
