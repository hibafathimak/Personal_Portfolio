import React, { useState, useEffect } from 'react';
import { FaUpload } from 'react-icons/fa';
import { addProjectAPI, getAllProjectsAPI, deleteProjectAPI, updateProjectAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverUrl';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [preview, setPreview] = useState("");
  const [imageFileStatus, setImageFileStatus] = useState(false);

  const [projectDetails, setProjectDetails] = useState({
    id: "",
    name: "",
    description: "",
    technologies: "",
    category: "",
    image: "",
    sourceCode: "",
    liveDemoLink: "",
  });

  // Fetch all projects on load
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getAllProjectsAPI();
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  // Handle Add Project
  const handleAddProject = async () => {
    const { name, description, technologies, category, image, sourceCode, liveDemoLink } = projectDetails;
    if (name && description && technologies && category && image && sourceCode && liveDemoLink) {
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("description", description);
      reqBody.append("technologies", technologies);
      reqBody.append("category", category);
      reqBody.append("image", image);
      reqBody.append("sourceCode", sourceCode);
      reqBody.append("liveDemoLink", liveDemoLink);

      try {
        const result = await addProjectAPI(reqBody);
        if (result.status === 200) {
          alert("Project added successfully!");
          fetchProjects(); // Refresh project list
          handleCloseAddModal();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };

  // Handle Edit Project
  const handleEditProject = async () => {
    const { id, name, description, technologies, category, image, sourceCode, liveDemoLink } = projectDetails;
    if (name && description && technologies && category && sourceCode && liveDemoLink) {
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("description", description);
      reqBody.append("technologies", technologies);
      reqBody.append("category", category);
      image && reqBody.append("image", image); // Only append if there's a new image
      reqBody.append("sourceCode", sourceCode);
      reqBody.append("liveDemoLink", liveDemoLink);

      try {
        const result = await updateProjectAPI(id, reqBody);
        if (result.status === 200) {
          alert("Project updated successfully!");
          fetchProjects(); // Refresh project list
          handleCloseEditModal();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };

  // Handle Delete Project
  const handleDeleteProject = async (id) => {
    try {
      const result = await deleteProjectAPI(id);
      if (result.status === 200) {
        alert("Project deleted successfully!");
        fetchProjects(); // Refresh project list
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Image validation and preview
  useEffect(() => {
    if (projectDetails.image && (projectDetails.image.type === "image/jpg" || projectDetails.image.type === "image/jpeg" || projectDetails.image.type === "image/png")) {
      setImageFileStatus(true);
      setPreview(URL.createObjectURL(projectDetails.image));
    } else {
      setImageFileStatus(false);
      setPreview("");
      setProjectDetails({ ...projectDetails, image: "" });
    }
  }, [projectDetails.image]);

  // Modal close functions
  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setProjectDetails({ name: "", description: "", technologies: "", category: "", image: "", sourceCode: "", liveDemoLink: "" });
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setProjectDetails({ name: "", description: "", technologies: "", category: "", image: "", sourceCode: "", liveDemoLink: "" });
  };

  // Show Add Project Modal
  const handleShowAddModal = () => setShowAddModal(true);

  // Show Edit Project Modal
  const handleShowEditModal = (project) => {
    setShowEditModal(true);
    setProjectDetails(project);
  };

  return (
    <div className="min-h-screen bg-[#0A1817] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>

        {/* New Project Button */}
        <div className="mb-4">
          <button onClick={handleShowAddModal} className="bg-[#5DA49B] text-white py-2 px-4 rounded-full flex items-center">
            <i className="fa-solid fa-plus mr-2"></i> New Project
          </button>
        </div>

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
            <div className="bg-[#0A1817] p-8 rounded-lg w-1/2">
              <h2 className="text-xl font-bold mb-4">Add New Project</h2>
              <div className="mb-3">
                <label className="block mb-2">Project Image</label>
                <input
                  type="file"
                  onChange={(e) => setProjectDetails({ ...projectDetails, image: e.target.files[0] })}
                  className="hidden"
                  id="uploadFile"
                />
                <label htmlFor="uploadFile" className="cursor-pointer border-2 border-dashed border-gray-400 p-4 w-full text-center">
                  {preview ? (
                    <img src={preview} alt="preview" className="h-48 w-full object-cover" />
                  ) : (
                    <FaUpload className="text-3xl text-gray-400" />
                  )}
                </label>
                {!imageFileStatus && (
                  <div className="text-red-500 text-center mt-2">* Upload only jpeg, jpg, png files</div>
                )}
              </div>
              <div className="mb-3">
                <input
                  className="form-control p-2 w-full"
                  value={projectDetails.name}
                  onChange={(e) => setProjectDetails({ ...projectDetails, name: e.target.value })}
                  type="text"
                  placeholder="Project Name"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control p-2 w-full"
                  value={projectDetails.description}
                  onChange={(e) => setProjectDetails({ ...projectDetails, description: e.target.value })}
                  type="text"
                  placeholder="Project Description"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control p-2 w-full"
                  value={projectDetails.technologies}
                  onChange={(e) => setProjectDetails({ ...projectDetails, technologies: e.target.value })}
                  type="text"
                  placeholder="Technologies Used"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control p-2 w-full"
                  value={projectDetails.category}
                  onChange={(e) => setProjectDetails({ ...projectDetails, category: e.target.value })}
                  type="text"
                  placeholder="Project Category"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control p-2 w-full"
                  value={projectDetails.sourceCode}
                  onChange={(e) => setProjectDetails({ ...projectDetails, sourceCode: e.target.value })}
                  type="text"
                  placeholder="Project Source Code Link"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control p-2 w-full"
                  value={projectDetails.liveDemoLink}
                  onChange={(e) => setProjectDetails({ ...projectDetails, liveDemoLink: e.target.value })}
                  type="text"
                  placeholder="Live Demo Link"
                />
              </div>
              <div className="flex justify-between">
                <button onClick={handleAddProject} className="bg-[#5DA49B] text-white py-2 px-4 rounded-full">
                  Add Project
                </button>
                <button onClick={handleCloseAddModal} className="bg-red-500 text-white py-2 px-4 rounded-full">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Display Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-[#0A1817] border border-gray-700 rounded-lg p-6">
              <img src={`${SERVER_URL}/uploads/${project.image}`} alt="project" className="h-48 w-full object-cover mb-4 rounded-md" />
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <button
                onClick={() => handleShowEditModal(project)}
                className="bg-[#5DA49B] text-white py-2 px-4 rounded-full mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProject(project._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-full"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
