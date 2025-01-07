import React from "react";
import { Link } from "react-router-dom";
import data from "../assets/data";

const SelectedProjects = () => {
  const selectedIds = [12, 15, 14];
  const projects = data.projects.filter((project) => selectedIds.includes(project.id));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Selected Projects</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col my-6 shadow-lg border border-gray-300 rounded-lg w-80 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-40 m-2.5 overflow-hidden text-white rounded-t-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 h-40">
              <h6 className="mb-2 text-lg font-semibold">{project.title}</h6>
              <p className="text-slate-400 leading-normal font-light text-sm">
                {project.description}
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2 flex justify-between">
              <Link
                to={project.sourceCode}
                className="rounded-3xl bg-[#4D8685] py-2 px-4 text-center text-sm text-white transition-all hover:bg-[#376B6A] focus:bg-[#2B5655]"
              >
                Source Code
              </Link>
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl bg-[#4D8685] py-2 px-4 text-center text-sm text-white transition-all hover:bg-[#2A6463] focus:bg-[#1F4F4E]"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
      <Link
        to={"/projects"}
        className="mt-8 border border-[#2A6463] py-2 px-6 rounded-full font-medium transition-all hover:bg-[#2A6463] hover:text-white"
      >
        View All Projects
      </Link>
    </div>
  );
};

export default SelectedProjects;
