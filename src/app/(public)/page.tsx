import { TogglePosts } from "@/components/TogglePosts";

type Post = {
  id: number;
  title: string;
};

export default async function LandingPage() {
  console.log("FETCHING POSTS AT", new Date().toISOString());
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3",
  );

  const posts: Post[] = await response.json();

  return (
    <section>
      <h1>Build SaaS Faster with Next.js</h1>
      <TogglePosts posts={posts}>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title} sss</li>
          ))}
        </ul>
      </TogglePosts>
    </section>
  );
}
