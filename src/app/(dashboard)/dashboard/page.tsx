import { createPost } from "@/actions/post.actions";

export default function DashboardPage() {
  return (
    <div>
      <h2>Create Post</h2>
      <form action={createPost}>
        <input type="text" name="title" placeholder="Post title" required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
