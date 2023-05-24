import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

function Test() {
  return (
    <>
      <div className="w-[730px] mx-auto h-[800px] bg-bg-image">
        <div className="mx-auto mt-32 pr-44 w-[900px]">
          <h3 className="text-4xl border-textC border-b-4 border-dotted py-10 text-textC text-left">
            Latest Blog Posts
          </h3>
          <ul className=" pl-1 pt-8 text-2xl text-textC ">
            <li className=" pb-4  flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-380  hover:duration-300"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h5 className="pl-2">Star Wars Scene Transition Effect in CSS</h5>
            </li>
            <li className="hover:underline pb-4 decoration-textC flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-380  hover:duration-300"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h5 className="pl-2">
                Deep Dive into Text Wrapping and Word Breaking
              </h5>
            </li>
            <li className="hover:underline pb-4 decoration-textC flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-90  hover:duration-300"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h5 className="pl-2">
                Makeing a Heat Light with IFTTT Neflify Functions
              </h5>
            </li>
            <li className="hover:underline pb-4 decoration-textC flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-90  hover:duration-300"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h5 className="pl-2">
                Diving into the::before and ::after Presudo-Elements
              </h5>
            </li>
          </ul>
        </div>
      </div>
      <Link to={"/project"}>
        <div className="">
          <button className=" pt-4 mb-12">
            <p className="w-[200px] text-lg  text-textC transition ease-in-out delay-150  hover:-translate-x-2.5 hover:duration-300 ">
              ← Back Home
            </p>
          </button>
        </div>
      </Link>
    </>
  );
}

export default Test;

{
  /* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="h-[20px] w-[20px] "
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg> */
}
