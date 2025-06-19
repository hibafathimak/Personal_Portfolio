import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjectsAPI } from "../services/allAPI";
import SERVER_URL from "../services/serverUrl";

const SelectedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const selectedNames = ["React Parallax", "Journal/Diary App", "NovelNest Bookstore"]; 

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await getAllProjectsAPI(); 
      const allProjects = response.data;
      const filteredProjects = allProjects.filter((project) =>
        selectedNames.includes(project.name)
      );
      setProjects(filteredProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex mt-60 sm:mt-0 flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Selected Projects</h1>

      {loading ? (
        <div className="flex items-center justify-center mt-10">
          <div className="w-10 h-10 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>
          <span className="ml-4 text-gray-500">Loading projects...</span>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="relative flex flex-col my-6 shadow-lg border border-gray-300 rounded-lg w-72 md:w-80 transition-transform transform hover:scale-105 hover:shadow-[#4D8685] hover:shadow-md"
            >
              <div className="relative h-40 m-2.5 overflow-hidden text-white rounded-t-md">
                <img
                  src={`${SERVER_URL}/uploads/${project.image}`}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 h-40">
                <h6 className="mb-2 text-lg font-semibold">{project.name}</h6>
                <p className="text-slate-400 leading-normal font-light text-sm">
                  {project.description}
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2 flex justify-between">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl bg-[#4D8685] py-2 px-4 text-center text-sm text-white transition-all hover:bg-[#376B6A] focus:bg-[#2B5655]"
                >
                  Source Code
                </a>
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
      )}

      {!loading && (
        <Link
          to={"/projects"}
          className="mt-8 border border-[#2A6463] py-2 px-6 rounded-full font-medium transition-all hover:bg-[#2A6463] hover:text-white"
        >
          View All Projects
        </Link>
      )}
    </div>
  );
};

export default SelectedProjects;
