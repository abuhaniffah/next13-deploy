import { Response } from '@vercel/node';
import prisma from "@/libs/prisma";

export async function POST(request) {
    try {
        const { anime_mal_id, user_email, comment, username, anime_title } = await request.json();
        const data = { anime_mal_id, user_email, comment, username, anime_title };

        const createComment = await prisma.comment.create({ data });

        if (createComment) {
            return Response.json({ status: 200, isCreated: true });
        } else {
            return Response.json({ status: 500, isCreated: false, error: "Failed to create comment" });
        }
    } catch (error) {
        console.error("Error creating comment:", error);
        return Response.json({ status: 500, isCreated: false, error: "Internal server error" });
    }
}
