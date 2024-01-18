export default async function handler(req, res){
    const method = req.method

    if(method === "GET"){
        return res.status(200).json({message: 'hello'})
    }

    return res.status(405).json({error: `Method ${method} is not alllowed`})


    // if(req.method === 'GET'){
    //     const data = await prisma.video.findMany()
    //     return res.status(200).json(data)
    // }
}