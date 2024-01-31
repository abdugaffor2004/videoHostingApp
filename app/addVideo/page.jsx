"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadVideosDataAsync } from "../../redux/slices/videoSlice";
import Link from "next/link";
import { getTagsDataAsync } from "../../redux/slices/tagsSlice";
import { upload } from '@vercel/blob/client';

export default function AddVideo() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [fileName, setFileName] = useState();
    const [file, setFile] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [modalVisibility, setModalVisibility] = useState(true);
    let [selectedTags, setSelectedTags] = useState([]);

    const tags = useSelector(state => state.tags.tags);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTagsDataAsync());
    }, []);

    async function handleSubmit(e) {
        try {
            setButtonDisabled(true);
            const response = await upload(file.name, file, {
                access: 'public',
                handleUploadUrl: '/api/videos',
            });
            dispatch(uploadVideosDataAsync({ url: response.url, title, description, selectedTags: selectedTags.flat() }));
            setTitle('');
            setDescription('');
            setButtonDisabled(false);
        } catch (e) {
            console.error(e);
        }
    }

    function handleSetFile(event) {
        const files = event.target.files;
        if (files?.length) {
            setFile(files[0]);
        }
        setFileName(files[0].name);
    }

    function toggleModalVisibility() {
        setModalVisibility(!modalVisibility);
    }

    function handleSelectedTags(tag) {
        let customTag = {
            id: tag.id,
            name: tag.name,
        };
        if (!selectedTags.some(t => t.id === customTag.id)) {
            setSelectedTags([...selectedTags, customTag]);
        }
        setModalVisibility(true);
    }

    return (
        <div className="flex flex-column justify-center mt-20">
            <form className="border border-white px-16 pt-10 rounded">
                <div>
                    <div>
                        <label htmlFor="video-title" className="block text-sm font-medium leading-6"> Название </label>
                        <div className="mt-2 ">
                            <input
                                required
                                onChange={(e) => setTitle(e.target.value)}
                                value={title || ''}
                                id="video-title"
                                name="video-title"
                                className="block w-80 outline-none flex-1 border bg-transparent py-1.5 pl-2  placeholder:text-gray-400 rounded  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <label htmlFor="video-description" className="block text-sm font-medium leading-6"> Описание </label>
                        <div className="mt-2 ">
                            <textarea
                                rows={5}
                                required
                                onChange={(e) => setDescription(e.target.value)}
                                value={description || ''}
                                id="video-description"
                                name="video-description"
                                className="default:border-white  block w-80 outline-none flex-1 border bg-transparent py-1.5 pl-2  placeholder:text-gray-400 rounded  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="mt-2">
                            <button onClick={toggleModalVisibility} id="dropdownUsersButton" data-dropdown-toggle="dropdownUsers" data-dropdown-placement="bottom" className="text-black text-xs bg-teal-500 hover:bg-blue-800 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center  dark:hover:bg-teal-700 dark:focus:ring-blue-800" type="button">
                                Теги
                                <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <div id="dropdownUsers" hidden={modalVisibility} className="z-10 mt-6  bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                                <ul className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
                                    {tags.map((tag) => (
                                        <li key={tag.id}>
                                            <span onClick={() => handleSelectedTags(tag)} className="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                {tag.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/tags" className="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
                                    Add new tag
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 w-fit grid grid-cols-2 gap-2">
                        {selectedTags.map((tag) => (
                            <Link key={tag.id} href={`/tags/${tag.id}`} className="mr-5 border border-teal-500 text-white py-1.5 px-3 text-sm rounded cursor-pointer hover:opacity-75">
                                {tag.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8">
                        <div className="mt-2">
                            <input required onClick={e => (e.target.value = null)} onChange={handleSetFile} type="file" accept=".mp4" className="block w-full text-sm text-white
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-black
                            hover:file:bg-violet-100
                        "/>
                        </div>
                    </div>
                    <div className="flex justify-center mt-14 mb-8"> 
                        <button disabled={buttonDisabled} type="submit" onClick={handleSubmit} className="disabled:opacity-50  bg-teal-500 text-black py-2 px-10 rounded hover:opacity-75"> Добавить </button> 
                    </div>
                </div>
            </form>
        </div>
    );
}
