"use client";
import { useEffect } from "react";
import VideoSection from "../components/videoSection";
import { useDispatch, useSelector } from "react-redux";
import { getVideosDataAsync } from "../../redux/slices/videoSlice";

function VideoPage({ params }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosDataAsync());
    }, []);

    const videoList = useSelector((state) => state.videos.videos);
    const sortedVideoList = videoList.filter((video) => video.id === params.videoId);
    console.log(sortedVideoList);

    return (
        <VideoSection id={params.videoId} sortedVideoList={sortedVideoList}/>
    );
}

export default VideoPage;
