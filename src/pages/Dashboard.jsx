import React from 'react';
import { FaCode, FaBriefcase, FaEnvelope, FaBrain, FaStar, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    {
      title: "Total Projects",
      value: "12",
      icon: <FaBriefcase />,
      trend: "2 in progress",
      color: "text-[#5DA49B]", // Updated color
    },
    {
      title: "Skills",
      value: "15",
      icon: <FaBrain />,
      trend: "3 learning",
      color: "text-[#DD2468]", // Updated color
    },
    {
      title: "Messages",
      value: "28",
      icon: <FaEnvelope />,
      trend: "5 unread",
      color: "text-[#5DA49B]", // Updated color
    },
    {
      title: "Recent Activities",
      value: "5",
      icon: <FaStar />,
      trend: "new tasks completed",
      color: "text-[#DD2468]", // Updated color
    },
  ];

  const skills = [
    { name: "React", level: "Advanced", progress: "w-[85%]" },
    { name: "Node.js", level: "Intermediate", progress: "w-[70%]" },
    { name: "Python", level: "Advanced", progress: "w-[90%]" },
  ];

  const recentProjects = [
    {
      name: "E-commerce Platform",
      tech: "React, Node.js, MongoDB",
      status: "In Progress",
    },
    {
      name: "Portfolio Website",
      tech: "Next.js, Tailwind CSS",
      status: "Completed",
    },
    {
      name: "Task Management App",
      tech: "React Native, Firebase",
      status: "Planning",
    },
  ];

  const upcomingDeadlines = [
    {
      task: "Finish E-commerce Platform Frontend",
      deadline: "January 10, 2025",
    },
    {
      task: "Complete Documentation for Portfolio Website",
      deadline: "January 15, 2025",
    },
    {
      task: "Prepare for React Interview",
      deadline: "January 20, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1817] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Developer Dashboard</h1>
          <Link to={'/updatepage'} className="px-4 py-2 bg-[#4D8685] text-white rounded-lg hover:bg-[#426A6F]">
            Update Profile
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#0A1817] border p-6 shadow-lg rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                  <p className={`text-sm ${stat.color} mt-2`}>{stat.trend}</p>
                </div>
                <div className={`p-3 rounded-full bg-[#0A1817]`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills and Projects Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Skills */}
          <div className="bg-[#0A1817] border p-6 shadow-lg rounded-lg">
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
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className={`bg-[#5DA49B] h-2 rounded-full ${skill.progress}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Projects */}
          <div className="bg-[#0A1817] border p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FaBriefcase className="w-5 h-5 mr-2" />
              Recent Projects
            </h2>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div key={index} className="border-b last:border-0 pb-3 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{project.name}</h3>
                      <p className="text-sm text-gray-400">{project.tech}</p>
                    </div>
                    <span
                      className={`text-sm px-2 py-1 rounded ${
                        project.status === "Completed"
                          ? "bg-green-700 text-green-100"
                          : project.status === "In Progress"
                          ? "bg-[#426A6F] text-white"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines Section */}
        <div className="bg-[#0A1817] border p-6 shadow-lg rounded-lg mt-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaCalendarAlt className="w-5 h-5 mr-2" />
            Upcoming Deadlines
          </h2>
          <div className="space-y-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="flex items-center justify-between border-b last:border-0 pb-3 last:pb-0">
                <div className="flex items-center space-x-3">
                  <FaClock className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="font-medium">{deadline.task}</p>
                    <p className="text-sm text-gray-400">{deadline.deadline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
