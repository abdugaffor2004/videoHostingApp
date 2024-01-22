import prisma from '../../lib/prisma'


export default async function handler(req, res){
    const method = req.method

    if(method === "GET"){
        const data = await prisma.tag.findMany({
            include:{
                videos:{
                    select:{id: true, title: true, description:true }
                }
            }
        })
        res.status(200).json(data)
    }

    if(method === "POST"){
        const {name} = req.body

        const result = await prisma.tag.create({
            data:{
                name
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