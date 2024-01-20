import busboy from "busboy"
import fs from "fs"
import { v4 as uuidv4 } from 'uuid';

const CHUNK_SIZE_IN_BYTES = 2000000

export const config={
    api:{
        bodyParser: false,
    }
}

function uploadVideoStream(req, res){
    const id = uuidv4()
    const bb = busboy({headers: req.headers})

    bb.on('file', (_, file, info) =>{
        const filePath = `./videos/${id}.mp4`
        const stream = fs.createWriteStream(filePath)

        file.pipe(stream)
    }) // Обработка загрузки файла

    bb.on('close', () =>{
        res.writeHead(200, {Connection: 'close'})
        res.end('Thats the end')
    })

    req.pipe(bb)
    return res.status(200).json({id});
}

function getVideoStream(req, res){
    const range = req.headers.range

    if(!range){
        return res.status(400).send('Range must be provided')
    }

    const videoId = req.query.videoId
    const videoPath = `./videos/${videoId}.mp4`

    const videoSizeInBytes = fs.statSync(videoPath).size;

    const chunkStart = Number(range.replace(/\D/g, ""));

    const chunkEnd = Math.min(
        chunkStart + CHUNK_SIZE_IN_BYTES,
        videoSizeInBytes - 1
    )

    const contentLength = chunkEnd - chunkStart + 1;

    const headers={
        'Content-Range': `bytes ${chunkStart} - ${chunkEnd}/${videoSizeInBytes}`,
        'Accept-Ranges': 'bytes',
        "Content-Length": contentLength,
        "Content-type": "video/mp4"
    }

    res.writeHead(206, headers)

    const videoStream = fs.createReadStream(videoPath, {
        start: chunkStart,
        end: chunkEnd
    })

    videoStream.pipe(res)
}

export default async function handler(req, res){
    const method = req.method

    if(method === "GET"){
        return getVideoStream(req, res)
    }

    if(method === "POST"){
        console.log(req)
        return uploadVideoStream(req, res)
    }

    return res.status(405).json({error: `Method ${method} is not alllowed`})

}