'use client'



export default function VideoSection({id, sortedVideoList}){

    let title
    let description
    
    sortedVideoList.map( item => {
        title = item.title
        description = item.description

    } )

    return(
        
        <div className="mt-16 max-w-full px-10">
            <div className="flex flex-col items-center">
                <video  className="rounded-3xl "
                        src={`/api/videos/?videoId=${id}`}
                        width={950}
                        controls
                        // autoPlay
                />

                <div className="mb-8 max-w-4xl">
                    <h1 className="my-4 text-3xl">{title}</h1>
                    <p className=''> {description} </p>
                </div>
            </div>
        </div>
            
        
    )
} 