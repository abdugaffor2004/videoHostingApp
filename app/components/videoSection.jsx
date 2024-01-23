'use client'

import Link from "next/link"



export default function VideoSection({id, sortedVideoList}){

    let videoUrl
    let title
    let description
    let tags = []
    
    
    sortedVideoList.map( item => {
        videoUrl = item.url
        title = item.title
        description = item.description
        tags = item.tags

    } )

    return(
        
        <div className="mt-16 max-w-full px-10">
            <div className="flex flex-col items-center">
                <video  className="rounded-3xl"
                        src={`${videoUrl}`}
                        width={950}
                        controls
                        autoPlay
                />

                <div className="mb-8 max-w-4xl">
                    <h1 className="my-4 text-3xl">{title}</h1>
                    <p className=''> {description} </p>
                </div>

                <div className="mt-2 mb-10">
                    {tags.map( (tag) => <Link href={`/tags/${tag.id}`} key={tag.id} className=" mr-5 border border-teal-500 text-white py-1.5 px-3 text-sm rounded cursor-pointer hover:opacity-75">{tag.name}</Link> )}
                </div>
            </div>

            
        </div>
            
        
    )
} 