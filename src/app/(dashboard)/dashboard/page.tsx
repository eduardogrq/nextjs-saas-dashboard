import { deletePost } from "@/actions/delete-post.actions";
import { createPost } from "@/actions/post.actions";
import SubmitButton from "@/components/SubmitButton";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h2>Create Post</h2>
      <form action={createPost}>
        <input type="text" name="title" placeholder="Post title" required />
        <SubmitButton />
      </form>

      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button type="submit">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}
