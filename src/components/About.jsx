import React from "react";
import img from "../assets/profile.png";
import { TbUserCode } from "react-icons/tb";

const About = () => {
  return (
    <div className="mx-40 flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-3xl font-bold text-center">A bit About Me</h1>
      <div className="flex space-x-4 my-10 ">
        <div className="w-1/2 flex-col flex items-center space-y-4">
          {/* <img src={img} className='w-40' alt="" /> */}
          <div className="p-5 border-4 border-[#4D8685] rounded-full">
            <TbUserCode className="text-8xl  text-[#4D8685]" />
          </div>
          <p className="text-justify">
            <span className="text-2xl font-medium">
              Hi, I'm Hiba Fathima K{" "}
            </span>
            <br />A dedicated full-stack developer from Malappuram with
            expertise in the MERN stack. I enjoy crafting efficient,
            user-friendly web applications and continuously learning new
            technologies. I aim to create impactful solutions through clean code
            and innovative design. I’m passionate about collaborating on
            exciting projects and making a meaningful contribution to the tech
            world.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl my-4 font-medium">
            Education and Qualifications
          </h1>
          <ol className="relative border-s border-gray-200">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                2021 - 2024
              </time>
              <h3 className="text-lg font-semibold ">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="mb-4 text-base font-normal text-gray-400">
                Currently pursuing a BCA degree from Calicut University,
                focusing on software development and computer science
                fundamentals.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                2024
              </time>
              <h3 className="text-lg font-semibold ">MERN Stack Course</h3>
              <p className="text-base font-normal text-gray-400">
                Completed a 6-month MERN stack course at Luminar Technolab,
                where I gained hands-on experience in building full-stack
                applications with MongoDB, Express.js, React.js, Angular and
                Node.js.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
