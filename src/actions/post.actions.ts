"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData): Promise<void> {
    const title = formData.get("title") as string | null;

    if(!title) return;

    await prisma.post.create({
        data: {
            title: title,
        }
    })

    revalidatePath("/dashboard");
}