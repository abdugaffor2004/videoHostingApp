'use client'
import axios from "axios"
import { useState } from "react"

// async function hello(){
//     const res = await fetch(`${process.env.BASE_URL}/api/hello`)
//     if(!res.ok){
//         console.log(res)
//     }
//     return res.json()
// }





export default function addVideo(){

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()
    


    async function handleSubmit(e){
        e.preventDefault()
        const data = new FormData()
    
        if(!file){
            return
        }
        
        data.append('file', file)
    
        try{
            await axios.post('/api/videos', data)
        }
        catch(e){
            console.log(e)
        }
        
    }
    
    function handleSetFile(event){
        const files = event.target.files
    
        if(files?.length){
            setFile(files[0])
        }
        
    }



    return(
        <div className="flex flex-column justify-center mt-20">
            <form className="border border-white px-16 pt-10 rounded" action="POST">
                <div>
                    <div>
                        <label htmlFor="video-title" className="block text-sm font-medium leading-6"> Название </label>
                        <div className="mt-2 ">
                            <input
                            onChange={(e) => setTitle(e.target.value)}
                            id="video-title"
                            name="video-title"
                            className="block w-80 outline-none flex-1 border bg-transparent py-1.5 pl-2  placeholder:text-gray-400 rounded  sm:text-sm sm:leading-6"
                            defaultValue={''}
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <label htmlFor="video-description" className="block text-sm font-medium leading-6"> Описание </label>
                        <div className="mt-2 ">
                            <input
                            onChange={(e) => setDescription(e.target.value)}
                            id="video-description"
                            name="video-description"
                            className="block w-80 outline-none flex-1 border bg-transparent py-1.5 pl-2  placeholder:text-gray-400 rounded  sm:text-sm sm:leading-6"
                            defaultValue={''}
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="mt-2">
                            <span className="mr-5 border border-teal-500 text-white py-1.5 px-3 text-sm rounded cursor-pointer hover:opacity-75">Tag</span>
                            <span className="mr-5 border border-teal-500 text-white py-1.5 px-3 text-sm rounded cursor-pointer hover:opacity-75">kfsdlff</span>
                            
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="mt-2">
                        <input onClick={e => (e.target.value = null)} onChange={handleSetFile} type="file" accept=".mp4" className="block w-full text-sm text-white
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-black
                            hover:file:bg-violet-100
                        "/>
                        </div>
                    </div>
                    <div className="flex justify-center mt-14 mb-8"> <button onClick={handleSubmit} className="bg-teal-500 text-black py-2 px-10 rounded hover:opacity-75"> Добавить </button> </div>
                </div>
            </form>
        </div>
    )
}