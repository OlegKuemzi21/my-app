import { Link } from "react-router-dom";
import Test from "./Test";

export const Home = () => {
  return (
    <>
      <div className="px-32 bg-bg-home">
        <h1 className="text-6xl pb-10 text-textC">Hi, I'm Oleg.</h1>
        <div className="w-[650px] ">
          <p className="text-2xl text-textC ">
            I'm a <strong> web developer </strong>in Ukraine. I like working on
            the front-end of the web. This is my site,
            <strong> Coder's Place</strong>, where I share whatever side
            projects I've been working on.
          </p>
        </div>
        <div className="mx-auto mt-32 pr-44 w-[900px]">
          <h3 className="text-4xl border-textC border-b-4 border-dotted py-10 text-textC text-left">
            Latest Blog Posts
          </h3>
          <ul className=" pl-1 pt-8 text-2xl text-textC ">
            <li className=" pb-4  flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-90  hover:duration-300"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h5 className="pl-2">Star Wars Scene Transition Effect in CSS</h5>
            </li>
            <li className="pb-4  flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-90  hover:duration-300"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h5 className="pl-2">
                Deep Dive into Text Wrapping and Word Breaking
              </h5>
            </li>
            <li className=" pb-4 flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
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
            <li className=" pb-4  flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
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

        <div className="mx-auto mt-32 pr-44 w-[900px]">
          <h3 className="text-4xl border-textC border-b-4 border-dotted py-10 text-textC text-left">
            Popular Blog Posts
          </h3>
          <ul className=" pl-1 pt-8 text-2xl text-textC">
            <li className=" pb-4  flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-90  hover:duration-300"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h5 className="pl-2">
                The Surprising Things That CSS Can Animate
              </h5>
            </li>
            <li className="pb-4 flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-90  hover:duration-300"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h5 className="pl-2">
                Say Hello to Houdini and the CSS Paint API
              </h5>
            </li>
            <li className=" pb-4 flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-90  hover:duration-300"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h5 className="pl-2">Motion Derection with JavaScript</h5>
            </li>
            <li className=" pb-4  flex transition ease-in-out delay-150  hover:translate-x-2.5  hover:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[30px] w-[30px] fill-textC transition ease-in-out delay-150  hover:rotate-90  hover:duration-300"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h5 className="pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h5>
            </li>
          </ul>
        </div>

        <div className="mx-auto mt-32 pr-44 w-[900px] mb-6">
          <h3 className="text-4xl border-textC border-b-4 border-dotted py-10 text-textC text-left">
            Favourites Project
          </h3>
          <ol className="mt-10 grid grid-cols-2 gap-x-5 gap-y-5 ">
            <li>
              <ul className="border-2 rounded-lg w-[350px] px-12 py-6 shadow-xl transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-1">
                <li className="text-2xl font-bold text-textC pb-4 ">
                  WordPress Export to Markdown
                </li>
                <p className="w-[250px]">
                  Node.js utility that converts WordPress content into Markdown
                  files for static site generators.
                </p>
              </ul>
            </li>
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[205px] px-12 py-6 shadow-xl transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-1">
                <li className="text-2xl font-bold text-textC pb-4">
                  Hello Houdini
                </li>
                <p className="w-[250px]">
                  Introduction to the Houdini project, the CSS paint API, and
                  the things they allow you to do with CSS.
                </p>
              </ul>
            </li>
            <li>
              <ul className="border-2 rounded-lg w-[350px] px-12 py-6 shadow-xl transition ease-in-out delay-150  hover:translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-1">
                <li className="text-2xl font-bold text-textC pb-4">
                  Silky Smooth CSS Animations
                </li>
                <p className="w-[250px]">
                  Talk I gave at CSSConf 2016 about how browsers render
                  animations and how to optimize them.
                </p>
              </ul>
            </li>
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[205px] px-12 py-6 shadow-xl transition ease-in-out delay-150  hover:translate-x-2.5 hover:scale-105  hover:duration-300 hover:rotate-1">
                <li className="text-2xl font-bold text-textC pb-4">Align</li>
                <p className="w-[250px]">
                  Board game played against an AI. Uses multi-threaded
                  JavaScript and a minmax algorithm.
                </p>
              </ul>
            </li>
          </ol>
          <Link to={"/project"}>
            <div className="pl-[540px]">
              <button className=" pt-6 mb-2">
                <p className="w-[200px] text-lg  text-textC transition ease-in-out delay-150  hover:translate-x-2.5 hover:duration-300 ">
                  More Project here →
                </p>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
