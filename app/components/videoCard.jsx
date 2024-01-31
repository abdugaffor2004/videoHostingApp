import Link from "next/link";

function VideoCard({filePath, id}){

    return(
        <div >
            <div >
                <Link href={`/${id}`}>

                    <video className="border" preload="metadata" style={{borderRadius:'15px', marginBottom:'40px'}} width='400px' height= 'auto' >
                        <source src={`${filePath}#t=100`}/>
                    </video>

                </Link>
            </div>
            
        </div>
    );
}

export default VideoCard;