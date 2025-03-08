'use server'

import { auth } from "@clerk/nextjs";

export async function getUserId() {
    const { userId } = auth();
    return userId;
}

export async function getUser() {
    const { userId } = await auth();
    if (!userId) {
        return null;
    }
    const user = await prisma.user.findUnique({
        where: {
        id: userId,
        },
    });
    return user;
}