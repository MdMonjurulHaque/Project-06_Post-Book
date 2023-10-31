import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ImBlog } from "react-icons/im";

import InputPost from "./InputPost";
import post from "./data";
import Post from "./Post";

const App = () => {
  const [posts, setPosts] = useState(post);

  const handleLike = (id, like) => {
    const newPostWithLike = posts.map((item) =>
      item.id === id
        ? { ...item, post: { ...item.post, like: like + 1 } }
        : item
    );

    setPosts(newPostWithLike);
  };
  const handleDislike = (id, dislike) => {
    const newPostWithDislike = posts.map((item) =>
      item.id === id
        ? { ...item, post: { ...item.post, dislike: dislike + 1 } }
        : item
    );
    setPosts(newPostWithDislike);
  };
  const handlePost = (post) => {
    setPosts((prevPost) => {
      return [...prevPost, { id: uuidv4(), post }];
    });
  };
  const handleDelete = (id) => {
    setPosts(posts.filter((newPost) => newPost.id !== id));
  };

  return (
    <div className=" min-h-screen mt-10">
      <div className="w-[80%] shadow-lg h-auto bg-white m-auto rounded-xl ">
        <div className="flex gap-3 justify-center items-center bg-sky-100 p-5">
          <div className="text-[35px] text-blue-800 mt-2">
            <ImBlog />
          </div>
          <div className="flex items-self-center">
            <h1 className="text-5xl font-bold">
              Post<span className="text-blue-500">Book</span>{" "}
            </h1>
          </div>
        </div>
        <InputPost handlePost={handlePost} />
        <Post
          posts={posts}
          handleDelete={handleDelete}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
      </div>
    </div>
  );
};

export default App;
