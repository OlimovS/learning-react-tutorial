import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OnePostView = () => {
  const [status, setStatus] = useState("loading");
  const [onePost, setOnePost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setOnePost(res.data);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  }, []);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  } else if (status === "error") {
    return <h1>Error occured</h1>;
  } else if (status === "success") {
    return (
      <div>
        <h1>{onePost.title}</h1>
        <p>{onePost.body}</p>
      </div>
    );
  }
};

export default OnePostView;
