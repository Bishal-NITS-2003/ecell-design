import React, { useState } from "react";
import Blogs from "../components/Blogs";
import BlogDetail from "../components/BlogDetail";

const BlogsPage: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  if (selectedPostId !== null) {
    return (
      <BlogDetail
        postId={selectedPostId}
        onBack={() => setSelectedPostId(null)}
      />
    );
  }

  return (
    <div>
      <Blogs onPostClick={setSelectedPostId} />
    </div>
  );
};

export default BlogsPage;
