import axios from "axios";
import { useState } from "react";

const MakePost = () => {
  const [state, setState] = useState({});

  const handleInputChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const newPost = {
      ...state,
      userId: 1,
    };

    console.log(newPost);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then(() => {
        console.log("created");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>MakePost</h1>
      <form onSubmit={handleSubmitForm}>
        <div style={{ margin: 5 }}>
          <input onChange={handleInputChange} name="title" />
        </div>
        <div>
          <textarea onChange={handleInputChange} name="body" />
        </div>
        <button type="submit">Jonatish</button>
      </form>
    </div>
  );
};

export default MakePost;
