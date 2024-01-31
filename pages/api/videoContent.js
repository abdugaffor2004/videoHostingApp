import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    const method = req.method;

    try {
        if (method === "GET") {
            const data = await prisma.video.findMany({
                include: {
                    tags: {
                        select: { id: true, name: true }
                    }
                }
            });
            res.status(200).json(data);
        } else if (method === "POST") {
            const { url, title, description, selectedTags } = req.body;

            const result = await prisma.video.create({
                data: {
                    url,
                    title,
                    description,
                    tags: {
                        connect: selectedTags,
                    }
                }
            });

            res.status(200).json({ result });
        } else {
            // Вместо использования `return` просто завершим выполнение кода здесь
            res.status(405).json({ error: `Method ${method} is not allowed` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        // Завершаем ответ после завершения выполнения кода
        res.end();
    }
}



// https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries
                  // Здесь можно прочитать про connect и другие методы управления БД