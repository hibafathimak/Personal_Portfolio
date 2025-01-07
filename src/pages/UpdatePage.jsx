import React, { useState } from 'react';
import { FaUserEdit, FaCalendarAlt, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const UpdatePage = () => {
  // Initial data for editing
  const [userInfo, setUserInfo] = useState({
    name: "Hiba Fathima K",
    email: "hibafathima0502@gmail.com",
  });

  const [skills, setSkills] = useState([
    { name: "React", level: "Advanced", progress: 85 },
    { name: "Node.js", level: "Intermediate", progress: 70 },
    { name: "Python", level: "Advanced", progress: 90 },
  ]);

  const [upcomingDeadlines, setUpcomingDeadlines] = useState([
    { task: "Finish E-commerce Platform Frontend", deadline: "January 10, 2025" },
    { task: "Complete Documentation for Portfolio Website", deadline: "January 15, 2025" },
    { task: "Prepare for React Interview", deadline: "January 20, 2025" },
  ]);

  // Handle user input changes
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    setSkills(updatedSkills);
  };

  const handleDeadlineChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDeadlines = [...upcomingDeadlines];
    updatedDeadlines[index][name] = value;
    setUpcomingDeadlines(updatedDeadlines);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save updated info (e.g., API call)
    console.log("Updated Information:", { userInfo, skills, upcomingDeadlines });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Update Profile</h1>

          {/* Update User Info Section */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <FaUserEdit className="w-5 h-5 mr-2" />
                Personal Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userInfo.name}
                    onChange={handleUserInfoChange}
                    className="mt-2 w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleUserInfoChange}
                    className="mt-2 w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <FaCode className="w-5 h-5 mr-2" />
                Skills Progress
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="number"
                        name="progress"
                        value={skill.progress}
                        onChange={(e) => handleSkillChange(index, e)}
                        className="w-20 p-2 bg-gray-600 rounded-lg text-white"
                        placeholder="Progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Deadlines Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <FaCalendarAlt className="w-5 h-5 mr-2" />
                Upcoming Deadlines
              </h2>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        name="task"
                        value={deadline.task}
                        onChange={(e) => handleDeadlineChange(index, e)}
                        className="w-1/2 p-3 bg-gray-700 rounded-lg text-white"
                        placeholder="Task"
                      />
                      <input
                        type="text"
                        name="deadline"
                        value={deadline.deadline}
                        onChange={(e) => handleDeadlineChange(index, e)}
                        className="w-1/2 p-3 bg-gray-700 rounded-lg text-white"
                        placeholder="Deadline"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Save Changes Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
