import Link from "next/link";

function VideoCard({filePath}){

    return(
        <div >
            <div >
                <Link href={`/${filePath}`}>

                    <video className="border" preload="metadata" style={{borderRadius:'15px', marginBottom:'40px'}} width='400px' height= 'auto' >
                        <source src={`/api/videos/?videoId=${filePath}#t=100`}/>
                    </video>

                </Link>
            </div>
            
        </div>
    )
} 

export default VideoCard