import { Link } from "react-router-dom";

export const Project = () => {
  return (
    <>
      <div className="px-32 bg-bg-project">
        <h1 className="text-4xl font-bold text-textC ">5 Side Project</h1>

        <div className="w-[700px] ml-[373px] mt-32 ">
          <p className="text-xl text-textC border-2 px-8 py-4 rounded-lg bg-slate-100">
            These are some of my bigger projects. I also have more open source
            projects on{" "}
            <a
              href="https://github.com/OlegKuemzi21"
              target="blanck"
              className="font-bold hover:underline decoration-textC"
            >
              GitHub
            </a>{" "}
            and i will be happy if you're visite me.
          </p>
        </div>

        <div className="mx-auto mt-10 pr-44 w-[900px] mb-10">
          <h3 className="text-4xl border-textC border-b-4 border-dotted py-10 text-textC text-left font-bold">
            Talks
          </h3>
          <ol className="mt-10 grid grid-cols-2 gap-x-5 gap-y-5 ">
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[203px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[27px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Physics in JS
                  </li>
                  <p className="w-[250px]">
                    Talk I presented at RevolutionConf 2018 about simulating 2D
                    physics in JavaScript with Matter.js.
                  </p>
                </div>
              </ul>
            </li>
            <li>
              <ul className="border-2 rounded-lg w-[350px]  pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[30px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Silky Smooth CSS Animation
                  </li>
                  <p className="w-[250px]">
                    Talk I gave at CSSonf 2016 about how browsers render
                    animations and how to optimize them.
                  </p>
                </div>
              </ul>
            </li>{" "}
            <li>
              <ul className="border-2 rounded-lg w-[350px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[30px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    JavaScript Motion Detection
                  </li>
                  <p className="w-[250px]">
                    My RevolutionConf 2016 talk on using a webcam and WebRTC to
                    detect real-time motion.
                  </p>
                </div>
              </ul>
            </li>{" "}
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[205px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[27px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Browser History
                  </li>
                  <p className="w-[250px]">
                    Lightning talk covering the start of the web, the browser
                    wars, and the rise of healthy competition.
                  </p>
                </div>
              </ul>
            </li>
          </ol>
        </div>

        <div className="mx-auto mt-10 pr-44 w-[900px] mb-10">
          <h3 className="text-4xl border-textC border-b-4 border-dotted py-10 text-textC text-left font-bold">
            Sites
          </h3>
          <ol className="mt-10 grid grid-cols-2 gap-x-5 gap-y-5 ">
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[205px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[30px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Will + Three.js
                  </li>
                  <p className="w-[250px]">
                    Collection of small 3D graphics projects I made for fun and
                    practice while learning Three.js.
                  </p>
                </div>
              </ul>
            </li>
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[205px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[30px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Super Toast Story
                  </li>
                  <p className="w-[250px]">
                    Short animated story about toast flying through space,
                    presented in a retro 16-bit style.
                  </p>
                </div>
              </ul>
            </li>{" "}
            <li>
              <ul className="border-2 rounded-lg w-[350px]  h-[205px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[30px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Regex Storm
                  </li>
                  <p className="w-[250px]">
                    Web app that helps .NET developers build regular expressions
                    and test the results.
                  </p>
                </div>
              </ul>
            </li>{" "}
          </ol>
        </div>

        <div className="mx-auto mt-10 pr-44 w-[900px] mb-10">
          <h3 className="text-4xl border-textC border-b-4 border-dotted py-10 text-textC text-left font-bold">
            Front end
          </h3>
          <ol className="mt-10 grid grid-cols-2 gap-x-5 gap-y-5 ">
            <li>
              <ul className="border-2 rounded-lg w-[350px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[30px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Background Scroll Physics
                  </li>
                  <p className="w-[250px]">
                    Exploration into using Matter.js to create lively
                    physics-based backgrounds that react to scrolling.
                  </p>
                </div>
              </ul>
            </li>
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[205px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[30px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Hello Houdini
                  </li>
                  <p className="w-[250px]">
                    Introduction to the Houdini project, the CSS paint API, and
                    the things they allow you to do with CSS.
                  </p>
                </div>
              </ul>
            </li>{" "}
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[205px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[30px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Gist Syntax Themes
                  </li>
                  <p className="w-[250px]">
                    Collection of drop-in stylesheets to customize the look of
                    embedded Gists.
                  </p>
                </div>
              </ul>
            </li>{" "}
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[205px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[30px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Align 4
                  </li>
                  <p className="w-[250px]">
                    Board game played against an AI. Uses multi-threaded
                    JavaScript and a minmax algorithm.
                  </p>
                </div>
              </ul>
            </li>
          </ol>
        </div>

        <div className="mx-auto mt-10 pr-44 w-[900px] mb-6">
          <h3 className="text-4xl border-textC border-b-4 border-dotted py-10 text-textC text-left font-bold">
            Back end
          </h3>
          <ol className="mt-10 grid grid-cols-2 gap-x-5 gap-y-5 ">
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[205px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[25px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Heart Light
                  </li>
                  <p className="w-[250px]">
                    I set up a heart button on my blog to turn on a real-world
                    light, using IFTTT and Netlify Functions.
                  </p>
                </div>
              </ul>
            </li>
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[205px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:-translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[25px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Gist to PrismJS
                  </li>
                  <p className="w-[250px]">
                    Node.js utility that translates embedded GitHub Gists into
                    PrismJS code blocks.
                  </p>
                </div>
              </ul>
            </li>{" "}
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[207px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[33px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    WordPress Export to Markdown
                  </li>
                  <p className="w-[250px]">
                    Node.js utility that converts WordPress content into
                    Markdown files for static site generators.
                  </p>
                </div>
              </ul>
            </li>{" "}
            <li>
              <ul className="border-2 rounded-lg w-[350px] h-[207px] pl-4 py-6 shadow-xl transition ease-in-out delay-150  hover:translate-y-2.5 hover:scale-105  hover:duration-300 hover:rotate-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-[45px] w-[27px] pb-4 fill-textC"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="pl-2">
                  <li className="text-2xl font-bold text-textC pb-4 ">
                    Image Fix
                  </li>
                  <p className="w-[250px]">
                    Simple .NET utility to scale and crop images while
                    preserving their aspect ratio.
                  </p>
                </div>
              </ul>
            </li>
          </ol>
        </div>
        <Link to={"/"}>
          <div className="pl-[335px]">
            <button className=" mb-10">
              <p className="w-[200px] text-lg  text-textC transition ease-in-out delay-150  hover:-translate-x-2.5 hover:duration-300 ">
                ← Back Home
              </p>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};
