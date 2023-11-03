import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

const Post = ({ posts, handleDelete, handleLike, handleDislike }) => {
  return (
    <div>
      {posts.map((post) => {
        const { id } = post;
        const { title, desc, like, dislike } = post.post;

        return (
          <div
            key={id}
            className="flex flex-col bg-sky-200 mb-2 p-5  text-slate-800 "
          >
            <div className="flex flex-col	 justify-between">
              <p className=" uppercase text-[25px] ">{title}</p>
              <p className="text-[25px]">{desc}</p>
            </div>
            <div className="flex  justify-between text-[20px]">
              <div className="flex gap-5 text-[20px] mt-5">
                <button
                  className="flex gap-2 items-center   rounded bg-sky-500 px-3.5 py-2   font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  onClick={() => handleLike(id, like)}
                >
                  <p>{like}</p>
                  <p>Like</p>
                  <div>
                    <AiFillLike />
                  </div>
                </button>

                <button
                  className="flex gap-2 items-center  rounded bg-sky-500 px-3.5 py-2  font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  onClick={() => handleDislike(id, dislike)}
                >
                  <p>{dislike}</p>
                  <p>Dislike</p>
                  <div>
                    <AiFillDislike />
                  </div>
                </button>
              </div>

              <button
                className=" mt-5   inline-block rounded bg-red-500 px-3.5 py-2  font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                onClick={() => {
                  handleDelete(id);
                }}
              >
                <div className="flex items-center gap-2">  <RiDeleteBin5Line /> <p>Delete</p></div>
              
              
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
