'use client'
import { useEffect } from "react";
import TagsVideoSection from '../components/tagVideosSection'
import { useDispatch, useSelector } from "react-redux";
import { getTagsDataAsync } from "../../redux/slices/tagsSlice";


function tagVideosPage({params}){

     // console.log(params.tagId) // У компоненты есть дефолтное свойство params почитай про него
    const dispatch = useDispatch()

    useEffect( () =>{
        dispatch(getTagsDataAsync())
    }, [] )

    
   

    const tags = useSelector( (state) => state.tags.tags )
    const selectedTag = tags.filter( (tag) => tag.id === params.tagId )

    return(
        
        <TagsVideoSection selectedTag={selectedTag}/>
        
    ) 
}


export default tagVideosPage