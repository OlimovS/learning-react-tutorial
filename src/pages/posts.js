import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            style={{
              border: "1px solid black",
              margin: 3,
              padding: "3px 10px",
            }}
          >
            <h2>
              <Link to={`/post/${post.id}`}>
                <b>{post.id})</b> {post.title}
              </Link>
            </h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
