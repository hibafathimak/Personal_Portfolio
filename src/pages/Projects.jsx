import React, { useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { FaGithub } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa6';
import data from '../assets/data'; 

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All Projects');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to the first page on search
  };

  const filteredProjects = data.projects.filter((project) => {
    const matchesCategory = filter === 'All Projects' || project.category === filter;
    const matchesSearch = project.technologies.some((tech) =>
      tech.toLowerCase().includes(searchTerm)
    );
    return matchesCategory && matchesSearch;
  }).reverse();

  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-[#0A1817] text-white min-h-screen flex flex-col">
      <NavBar />
      <div className="py-10 px-4 min-h-screen">
        <div className="flex justify-between w-100 mb-8">
          <div className="flex justify-center mb-4">
            {['All Projects', 'Frontend', 'Full Stack'].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setFilter(category);
                  setCurrentPage(1); 
                }}
                className={`px-4 py-2 mx-2 rounded-3xl ${
                  filter === category ? 'bg-[#2A6463] text-white' : 'text-gray-300 rounded border border-[#2A6463]'
                } hover:bg-[#2A6463] transition`}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by technology (e.g., React, MongoDB)"
            className="px-3 bg-[#0A1817] mb-4 border min-w-[350px] border-[#2A6463] rounded-3xl text-white focus:outline-none focus:ring-2 focus:ring-[#2A6463]"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col shadow-lg border border-gray-300 rounded-lg w-80 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-[90%] m-2.5 mb-0 overflow-hidden text-white rounded-t-md">
                <img
                  src={project.image}
                  alt={`${project.title} image`}
                  className="w-full h-40"
                />
              </div>
              <div className="p-4">
                <h6 className="text-lg font-semibold text-center">{project.title}</h6>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handlePageChange(page + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === page + 1
                  ? 'bg-[#2A6463] text-white'
                  : 'text-gray-300 border border-[#2A6463]'
              } hover:bg-[#2A6463] transition`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-black border border-[#2A6463] rounded-lg shadow-2xl p-8 w-[90%] max-w-3xl relative text-white">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{selectedProject.title}</h2>
            <div className="flex justify-center items-center">
              <img
                src={selectedProject.image}
                className="w-auto h-[300px] rounded-lg mb-6"
              />
            </div>
            <p className="mb-4 text-lg">
              <span className="font-semibold text-[#F0DB4F]">Technologies Used:</span>{' '}
              {selectedProject.technologies.join(', ')}
            </p>
            <p className="text-gray-300 mb-6">{selectedProject.description}</p>
            <div className="flex justify-center gap-6">
              <a
                href={selectedProject.sourceCode}
                className="px-6 py-2 rounded-lg flex items-center gap-2 text-white bg-[#2A6463] hover:bg-[#F0DB4F] transition-all font-semibold"
              >
                <FaGithub className="text-lg" />
                GitHub Link
              </a>
              <a
                href={selectedProject.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg flex items-center gap-2 text-white bg-[#2A6463] hover:bg-[#F0DB4F] transition-all font-semibold"
              >
                <FaLaptopCode className="text-lg" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
