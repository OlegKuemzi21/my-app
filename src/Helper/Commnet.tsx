import { IPosts } from "../DataBase/databasetype";
import { useAppSelector } from "../store/redux";

const Comment = () => {
  const { posts } = useAppSelector((state) => state.posts);

  if (posts.length === 0) {
    return (
      <div className="">
        <h1 className="text-textC text-2xl font-bold text-center mt-12">
          No comments...
        </h1>
      </div>
    );
  }

  return <div></div>;
};

export default Comment;
