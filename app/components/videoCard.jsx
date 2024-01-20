import Link from "next/link";

function VideoCard({filePath}){

    return(
        <div >
            <div>
                <Link href={`/${filePath}`}>

                    <video preload="metadata" style={{borderRadius:'20px', marginBottom:'40px'}} width='400px' height= 'auto' >
                        <source src={`/api/videos/?videoId=${filePath}#t=1000`}/>
                    </video>

                </Link>
            </div>
            
        </div>
    )
} 

export default VideoCard