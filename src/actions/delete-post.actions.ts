"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePost(formData: FormData): Promise<void> {
  const id = formData.get("id") as string | null;

  if (!id) return;

  await prisma.post.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard");
}
