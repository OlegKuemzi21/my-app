export const About = () => {
  return (
    <>
      <div className="pl-44 bg-bg-posts">
        <h1 className="text-4xl font-bold text-textC ">About</h1>

        <div className="h-[1250px] pt-1 pr-60">
          <div className="w-[600px] mx-auto">
            <h3 className="text-3xl font-bold text-textC pb-4 mt-32">
              Hi,I'm Oleg Kuemzhy
            </h3>
            <p className="text-xl pb-5  text-textC">
              I studied for two years in the field of web developer by myself .
              I've done a lot of full-stack work, though now I'm mostly focused
              on the front-end. I especially enjoy working with React, CSS,
              Tailwind CSS, MySQL, AWS and JavaScript.
            </p>
            <p className="text-xl pb-5  text-textC">
              I don't work anywhere right now, but I'm on the hunt for a new
              job. Previously, I've worked at Artezio, as a Junior Software
              Developer.
            </p>
            <p className="text-xl pb-8 text-textC">
              For more details, see my resume or find me on{" "}
              <a
                href="https://www.linkedin.com/in/oleg-kuemzi-989785269/"
                target="_blank"
                className="font-bold hover:underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>

          <div className="w-[600px] mx-auto ">
            <h3 className="text-2xl font-bold text-textC pb-4">
              This is my site, Coder's Place.
            </h3>

            <p className="text-xl pb-5  text-textC">
              I started Coder's Place in 2020 as a personal blog But it was as a
              beta version only now, I have finished working on this project.
              Eventually, it turned into a portfolio for my side projects along
              with a blog focused on web development.
            </p>
            <p className="text-xl pb-5  text-textC">
              This site has no ads and no sponsored content. I write the
              articles on my own time, so if any of them have helped you, I will
              be happy so much.
            </p>

            <h1 className="text-2xl font-bold text-textC pb-4 pt-2">Skills</h1>

            <h5 className="text-xl font-bold text-textC">Hard Skills</h5>

            <ul className=" grid grid-cols-3 gap-y-3 gap-x-20 list-disc pl-6 text-xl pb-6 pt-2">
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>ReduxToolKit</li>
              <li>RTKquery</li>
              <li>Typescript</li>
              <li>NodeJS</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
              <li>MySQl</li>
              <li>Git</li>
              <li>RestAPI</li>
              <li>AWS</li>
              <li>ExpressJS</li>
            </ul>

            <h5 className="text-xl font-bold text-textC">Soft Skills</h5>

            <ul className=" grid grid-cols-3 gap-y-3 gap-x-20 list-disc pl-6 text-xl pb-6 pt-2">
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Creativity</li>
              <li>Quick learning</li>
              <li>Self-learning</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
