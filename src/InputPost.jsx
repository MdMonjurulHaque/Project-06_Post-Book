import React, { useState } from "react";
import { BiSolidBookAdd } from "react-icons/bi";

const InputPost = ({ handlePost }) => {
  const [posts, setPosts] = useState({
    title: "",
    desc: "",
    like: 0,
    dislike: 0,
  });
  const { title, desc } = posts;

  const handleChange = (event) => {
    const name = event.target.name;
    setPosts((prevPost) => {
      return { ...prevPost, [name]: event.target.value, like: 0, dislike: 0 };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts({ title: "", desc: "" });
    handlePost(posts);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-5 text-[25px]">
          <label className="text-slate-800  " htmlFor="title">
            Title:
          </label>
          <input
            className="border-2  p-1 pl-3 rounded-l border-slate-200"
            type="text"
            name="title"
            placeholder="Enter title here..."
            value={title}
            required
            onChange={handleChange}

          />
          <label className="text-slate-800 " htmlFor="desc">
            Description:
          </label>
          <textarea
            className="border-2 p-1 pl-3 rounded-l border-slate-200 h-[100px] "
            type="text"
            name="desc"
            placeholder="Enter description here..."
            value={desc}
            required
            onChange={handleChange}
          />

          <div className="flex justify-end  	 ">
         
            <button
              type="submit"
              className=" mt-5  inline-block rounded bg-blue-500 px-3.5 py-2   font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
            >
                <div className="flex gap-2 items-center text-[20px]"><BiSolidBookAdd /> Post</div> 
            </button>
      
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputPost;
