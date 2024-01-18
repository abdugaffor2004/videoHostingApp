
import { useRouter } from "next/router";
import VideoSection from "../../app/components/videoSection/videoSection";

function VideoPage(){
    const router = useRouter()

    const {id} = router.query

    return(
        <>
            <VideoSection id={id}/>
        </>
    ) 
}

export const getServerSideProps = async(context) =>{
    return {
        props:{query: context.query}
    }
}

export default VideoPage