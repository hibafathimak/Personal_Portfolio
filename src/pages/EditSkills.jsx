import React, { useState, useEffect } from "react";
import { getAllSkillsAPI, deleteSkillAPI, updateSkillLevelAPI } from "../services/allAPI";
import { FaTrash, FaPlus } from "react-icons/fa";

const EditSkills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: "", category: "", level: 50 });

  const categories = ["Frontend", "Backend", "Tools", "Soft Skills"];

  // Fetch skills from API
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getAllSkillsAPI();
        if (response.status === 200) {
          setSkills(response.data);
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  // Handle skill input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSkill((prev) => ({
      ...prev,
      [name]: name === "level" ? Number(value) : value,
    }));
  };

  // Add a new skill
  const handleAddSkill = () => {
    if (newSkill.name && newSkill.category) {
      setSkills((prev) => [
        ...prev,
        { id: Date.now(), name: newSkill.name, category: newSkill.category, level: newSkill.level },
      ]);
      setNewSkill({ name: "", category: "", level: 50 }); // Reset input fields
    }
  };

  // Remove an existing skill
  const handleDeleteSkill = async (id) => {
    try {
      const response = await deleteSkillAPI(id);
      if (response.status === 200) {
        setSkills((prev) => prev.filter((skill) => skill._id !== id));
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  // Update skill level
  const handleEditSkill = async (id, level) => {
    try {
      const response = await updateSkillLevelAPI(id, { level });
      if (response.status === 200) {
        // Update the state with the updated level
        setSkills((prev) =>
          prev.map((skill) => (skill._id === id ? { ...skill, level } : skill))
        );
      }
    } catch (error) {
      console.error("Error updating skill:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1817] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Edit Skills</h1>

        {/* Skill List */}
        <div className="bg-[#0A1817] border p-6 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Your Skills</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="flex justify-between items-center border-b last:border-0 pb-3 last:pb-0"
              >
                <div>
                  <h3 className="font-medium">{skill.name}</h3>
                  <p className="text-sm text-gray-400">Category: {skill.category}</p>
                  <p className="text-sm text-gray-400">Level: {skill.level}%</p>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    onChange={(e) => handleEditSkill(skill._id, Number(e.target.value))}
                    className="w-32"
                  />
                  <button
                    onClick={() => handleDeleteSkill(skill._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Skill */}
        <div className="bg-[#0A1817] border p-6 shadow-lg rounded-lg mt-8">
          <h2 className="text-lg font-semibold mb-4">Add a New Skill</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Skill Name"
              value={newSkill.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none"
            />
            <select
              name="category"
              value={newSkill.category}
              onChange={handleInputChange}
              className="w-1/3 px-2 py-2 bg-gray-700 text-white rounded"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <input
              type="range"
              name="level"
              min="0"
              max="100"
              value={newSkill.level}
              onChange={handleInputChange}
              className="w-32"
            />
            <span>{newSkill.level}%</span>
            <button
              onClick={handleAddSkill}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              <FaPlus className="mr-2" size={18} />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSkills;
