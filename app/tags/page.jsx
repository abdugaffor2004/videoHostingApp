"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTagsDataAsync, uploadTagsDataAsync } from "../../redux/slices/tagsSlice";
import Link from "next/link";

export default function Tags() {
    const dispatch = useDispatch();
    const tags = useSelector(state => state.tags.tags);

    useEffect(() => {
        dispatch(getTagsDataAsync());
    }, []);

    const [tagName, setTagName] = useState();

    const handleTagCreation = () => {
        dispatch(uploadTagsDataAsync({ name: tagName }));
        setTagName('');
        setTimeout(() => dispatch(getTagsDataAsync()), 700);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center gap-x-5 mt-16">
                <input
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                    id="video-title"
                    name="video-title"
                    className="w-96 outline-none border bg-transparent py-1.5 pl-2  placeholder:text-gray-400 rounded  sm:text-sm sm:leading-6"
                />
                <button onClick={handleTagCreation} type="submit" className="bg-teal-500 text-black py-1 px-3 rounded hover:opacity-75"> Создать </button>
            </div>
            <div className="flex mt-20">
                {tags.map((tag) => (
                    <Link href={`tags/${tag.id}`} key={tag.id} className="mr-5 border border-teal-500 text-white py-1.5 px-3 text-sm rounded cursor-pointer hover:opacity-75">{tag.name}</Link>
                ))}
            </div>
        </div>
    );
}
