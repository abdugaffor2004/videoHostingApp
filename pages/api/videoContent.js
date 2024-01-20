import prisma from '../../lib/prisma'


export default async function handler(req, res){
    const method = req.method

    if(method === "GET"){
        const data = await prisma.video.findMany()
        res.status(200).json(data)
    }

    if(method === "POST"){
        const {title, description} = req.body

        const result = await prisma.video.create({
            data:{
                title,
                description
            }
        })

        return res.status(200).json({result})
    }

    return res.status(405).json({error: `Method ${method} is not alllowed`})


    // if(req.method === 'GET'){
    //     const data = await prisma.video.findMany()
    //     return res.status(200).json(data)
    // }
}