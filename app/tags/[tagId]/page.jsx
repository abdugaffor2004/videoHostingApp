'use client';
import { useEffect } from "react";
import TagsVideoSection from '../../components/tagVideosSection';
import { useDispatch, useSelector } from "react-redux";
import { getTagsDataAsync } from "../../../redux/slices/tagsSlice";

function TagVideosPage({ params }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTagsDataAsync());
    }, []);

    const tags = useSelector((state) => state.tags.tags);
    const selectedTag = tags.filter((tag) => tag.id === params.tagId);

    return (
        <TagsVideoSection selectedTag={selectedTag}/>
    );
}

export default TagVideosPage;
