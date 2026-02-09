"use client";

import { useState } from "react";

type Post = {
    id: number;
    title: string;
}

type Props = {
  children: React.ReactNode;
  posts: Post[];
};

export function TogglePosts({ children, posts }: Props) {
  const [visible, setVisible] = useState(false);
  console.log("children:", posts);

  return (
    <div>
        <h3>Total posts: {posts.length}</h3>
      <button onClick={() => setVisible((v) => !v)}>
        {visible ? "Hide Posts" : "Show Posts"}
      </button>
      {visible && <div>{children}</div>}
    </div>
  );
}
