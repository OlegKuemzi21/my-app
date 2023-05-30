import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="bg-navsC">
      <div className="flex justify-between items-center  py-10">
        <h1 className="text-4xl font-bold pl-[130px] text-textC">
          <Link to={"/"}> My-app</Link>
        </h1>

        <div className="space-x-32 mx-auto pl-[700px]">
          <Link to={"/"} className="text-2xl font-bold text-textC">
            Home
          </Link>
          <Link to={"/project"} className="text-2xl font-bold text-textC">
            Project
          </Link>
          <Link to={"/posts"} className="text-2xl font-bold text-textC">
            Comments
          </Link>
          <Link to={"/about"} className="text-2xl font-bold text-textC">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};
