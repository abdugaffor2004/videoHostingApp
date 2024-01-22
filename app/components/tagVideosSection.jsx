'use client'

import Link from "next/link"
import VideoCard from "./videoCard"



function TagVideosSection({selectedTag}){

    let name
    let id = ''
    let videos=[]
    
    console.log(selectedTag)
    selectedTag.forEach( property => {
        name = property.name
        id = property.id
        videos = [...property.videos]
    } )


    return(
        
        <div>
            <h1 className="text-4xl text-center mt-10">{name}</h1>
            <div className="mt-16 px-10 flex justify-around flex-wrap gap-x-5 gap-y-14">
                {videos.map( (video) => <VideoCard key={video.id} filePath={video.id}/> )}
            </div>
        </div>
        
            
        
    )
} 

export default TagVideosSection