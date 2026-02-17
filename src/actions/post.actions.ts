"use server";

export async function createPost(formData: FormData): Promise<void> {
    const title = formData.get("title");

    if(!title){
        console.log("Title required");
        return;
    }

    console.log('Creating post:', title)

    await new Promise((resolve) => setTimeout(resolve, 1000));
}