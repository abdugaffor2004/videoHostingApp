import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    const method = req.method;

    try {
        if (method === "GET") {
            const data = await prisma.tag.findMany({
                include: {
                    videos: {
                        select: { id: true, title: true, description: true, url: true }
                    }
                }
            });
            res.status(200).json(data);
        } else if (method === "POST") {
            const { name } = req.body;

            const result = await prisma.tag.create({
                data: {
                    name
                }
            });

            res.status(200).json({ result });
        } else {
            // Вместо использования `return` просто завершим выполнение кода здесь
            res.status(405).json({ error: `Method ${method} is not allowed` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        // Завершаем ответ после завершения выполнения кода
        res.end();
    }
}
