import { createPost } from "@/actions/post.actions";
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
        <button type="submit">Create</button>
      </form>

      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}
