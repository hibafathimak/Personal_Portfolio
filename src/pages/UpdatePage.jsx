import React, { useState, useEffect } from "react";
import { FaUpload, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import {
  addProjectAPI,
  getAllProjectsAPI,
  deleteProjectAPI,
  updateProjectAPI,
} from "../services/allAPI";
import SERVER_URL from "../services/serverUrl";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [preview, setPreview] = useState("");
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

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await getAllProjectsAPI();
    setProjects(response.data);
  };

  const handleAddProject = async () => {
    const {
      name,
      description,
      technologies,
      category,
      image,
      sourceCode,
      liveDemoLink,
    } = projectDetails;
    
    if (
      name &&
      description &&
      technologies &&
      category &&
      sourceCode &&
      liveDemoLink &&
      image 
    ) {
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("description", description);
      reqBody.append("technologies", technologies);
      reqBody.append("category", category);
      reqBody.append("image", image); 
      reqBody.append("sourceCode", sourceCode);
      reqBody.append("liveDemoLink", liveDemoLink);
      
      const reqHeader = {};
      
      try {
        const result = await addProjectAPI(reqBody, reqHeader);
        if (result.status === 200) {
          alert("Project added successfully!");
          fetchProjects();
          handleCloseModal();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill in all the fields including uploading an image.");
    }
  };

  const handleEditProject = async () => {
    const {
      _id,
      name,
      description,
      technologies,
      category,
      image,
      sourceCode,
      liveDemoLink,
    } = projectDetails;
    
    if (
      name &&
      description &&
      technologies &&
      category &&
      sourceCode &&
      liveDemoLink
    ) {
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("description", description);
      reqBody.append("technologies", technologies);
      reqBody.append("category", category);
      
      if (image instanceof File) {
        reqBody.append("image", image);
      } else if (typeof image === 'string' && image) {
        reqBody.append("image", image);
      }
      
      reqBody.append("sourceCode", sourceCode);
      reqBody.append("liveDemoLink", liveDemoLink);
      
      const reqHeader = {};
      
      try {
        const result = await updateProjectAPI(_id, reqBody, reqHeader);
        if (result.status === 200) {
          alert("Project updated successfully!");
          fetchProjects();
          handleCloseModal();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const handleSubmit = async () => {
    if (isEdit) {
      await handleEditProject();
    } else {
      await handleAddProject();
    }
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteProjectAPI(id);
      fetchProjects();
    }
  };

  const handleShowModal = (project = null) => {
    setIsEdit(!!project);
    setShowModal(true);
    
    if (project) {
      setProjectDetails({
        _id: project._id,
        name: project.name,
        description: project.description,
        technologies: project.technologies,
        category: project.category,
        image: project.image, 
        sourceCode: project.sourceCode,
        liveDemoLink: project.liveDemoLink,
      });
      setPreview(`${SERVER_URL}/uploads/${project.image}`);
    } else {
      setProjectDetails({
        name: "",
        description: "",
        technologies: "",
        category: "",
        image: "",
        sourceCode: "",
        liveDemoLink: "",
      });
      setPreview("");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setProjectDetails({
      name: "",
      description: "",
      technologies: "",
      category: "",
      image: "",
      sourceCode: "",
      liveDemoLink: "",
    });
    setPreview("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProjectDetails({ ...projectDetails, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1817] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Projects</h1>
          <button
            onClick={() => handleShowModal()}
            className="bg-[#5DA49B] text-white py-2 px-4 rounded-full flex items-center"
          >
            <FaPlus className="md:mr-2" />
            <span className="hidden md:block">New Project</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <div
              key={project?._id}
              className="bg-[#0A1817] border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <img
                src={project?.image}
                alt="project"
                className="h-48 w-full object-cover mb-4 rounded-md"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                {project?.name}
              </h3>
              <p className="text-gray-400 mb-4 h-20 overflow-hidden">
                {project?.description}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleShowModal(project)}
                  className="bg-[#5DA49B] text-white py-2 px-4 rounded-full flex items-center"
                >
                  <FaEdit className="mr-2" /> Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(project?._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-full flex items-center"
                >
                  <FaTrash className="mr-2" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-[#0A1817] p-8 rounded-lg w-full max-w-xl">
              <h2 className="text-xl font-bold mb-6">
                {isEdit ? "Edit Project" : "Add New Project"}
              </h2>

              <label className="cursor-pointer mb-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />

                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-48 w-full object-cover rounded-md mb-4"
                  />
                ) : (
                  <div className="text-gray-400 text-3xl border-2 border-dashed border-gray-400 rounded-md h-48 w-full flex justify-center items-center mb-4">
                    <FaUpload />
                  </div>
                )}
              </label>

              <input
                className="form-control bg-[#0A1817] border rounded-md p-2 w-full mb-2 text-white placeholder-gray-200"
                value={projectDetails.name}
                onChange={(e) =>
                  setProjectDetails({ ...projectDetails, name: e.target.value })
                }
                type="text"
                placeholder="Project Name"
              />
              <input
                className="form-control bg-[#0A1817] border rounded-md p-2 w-full mb-2 text-white placeholder-gray-200"
                value={projectDetails.technologies}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    technologies: e.target.value,
                  })
                }
                type="text"
                placeholder="Technologies Used"
              />
              <textarea
                className="form-control  bg-[#0A1817] border rounded-md p-2 w-full mb-2 text-white placeholder-gray-200"
                value={projectDetails.description}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    description: e.target.value,
                  })
                }
                placeholder="Project Description"
              />
              <input
                className="form-control bg-[#0A1817] border rounded-md p-2 w-full mb-2 text-white placeholder-gray-200"
                value={projectDetails.category}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    category: e.target.value,
                  })
                }
                type="text"
                placeholder="Project Category"
              />
              <input
                className="form-control bg-[#0A1817] border rounded-md p-2 w-full mb-2 text-white placeholder-gray-200"
                value={projectDetails.sourceCode}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    sourceCode: e.target.value,
                  })
                }
                type="text"
                placeholder="Source Code Link"
              />
              <input
                className="form-control bg-[#0A1817] border rounded-md p-2 w-full mb-4 text-white placeholder-gray-200"
                value={projectDetails.liveDemoLink}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    liveDemoLink: e.target.value,
                  })
                }
                type="text"
                placeholder="Live Demo Link"
              />
              <div className="flex justify-between">
                <button
                  onClick={handleSubmit}
                  className="bg-[#5DA49B] text-white py-2 px-4 rounded-full"
                >
                  {isEdit ? "Update" : "Add"}
                </button>
                <button
                  onClick={handleCloseModal}
                  className="bg-red-500 text-white py-2 px-4 rounded-full"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;