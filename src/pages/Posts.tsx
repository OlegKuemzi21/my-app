import { useLayoutEffect, useState } from "react";
import { IPosts } from "../DataBase/databasetype";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/redux";
import { useActions } from "../store/action";

function Posts({ comment }: { comment: IPosts }) {
  const [value, setValue] = useState("");
  const { addPosts, removePosts } = useActions();
  const { posts } = useAppSelector((state) => state.posts);

  const addComment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addPosts(comment.comment);
  };

  const removeCommnet = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    removePosts(comment.comment);
  };

  // if (posts.length === 0) {
  //   return (
  //     <>
  //       <h1>Something went wrong</h1>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="w-full h-screen px-auto">
        <h1 className="text-center font-bold text-3xl text-textC pt-10"></h1>
        <form className="w-full max-w-sm ml-[759px] mt-12">
          <div className="flex items-center border-b border-textC py-2 ">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Write comment"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <button
              className="flex-shrink-0 bg-textC hover:bg-someC border-textC hover:border-someC text-sm border-4 text-white py-1 px-2 rounded hover:text-textC"
              type="button"
              onClick={addComment}
            >
              Write
            </button>
          </div>
        </form>
        <ul className="border-4 w-[400px] mx-auto mt-12 py-4 px-6 rounded-lg border-textC transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 ">
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-90  hover:duration-300"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <h5 className="pl-2">{comment.comment}</h5>
            <button
              className="flex-shrink-0 bg-textC hover:bg-someC border-textC hover:border-someC text-sm border-4 text-white py-1 px-2 rounded hover:text-textC"
              type="button"
              onClick={removeCommnet}
            >
              Delete
            </button>
          </li>
        </ul>
        {posts.map((comm) => (
          <ul key={comm}>
            <li>{comm}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Posts;