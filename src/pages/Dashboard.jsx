import React, { useEffect, useState } from 'react';
import { FaCode, FaBriefcase, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addReminderAPI, deleteReminderAPI, getAllRemindersAPI } from '../services/allAPI';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const stats = [
    {
      title: "Total Projects",
      value: "12",
      icon: <FaBriefcase />,
      trend: "2 in progress",
      color: "text-[#5DA49B]",
    },
    {
      title: "Skills",
      value: "15",
      icon: <FaCode />,
      trend: "3 learning",
      color: "text-[#DD2468]",
    },
    {
      title: "Messages",
      value: "28",
      icon: <FaEnvelope />,
      trend: "5 unread",
      color: "text-[#5DA49B]",
    },
  ];

  const skills = [
    { name: "Frontend", level: "Advanced", progress: "w-[85%]" },
    { name: "Backend", level: "Intermediate", progress: "w-[70%]" },
    { name: "Tools", level: "Advanced", progress: "w-[90%]" },
    { name: "Soft Skills", level: "Advanced", progress: "w-[90%]" },
  ];

  const recentProjects = [
    { name: "E-commerce Platform", tech: "React, Node.js, MongoDB" },
    { name: "Portfolio Website", tech: "Next.js, Tailwind CSS" },
    { name: "Task Management App", tech: "React Native, Firebase" },
  ];

  const recentMessages = [
    { sender: "John Doe", subject: "Project Update", date: "Jan 7, 2025" },
    { sender: "Jane Smith", subject: "Meeting Reminder", date: "Jan 6, 2025" },
    { sender: "Client A", subject: "Invoice Query", date: "Jan 5, 2025" },
  ];

  const [reminders, setReminders] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  // Fetch reminders from the backend
  const fetchReminders = async () => {
    try {
      const response = await getAllRemindersAPI();
      setReminders(response.data);
    } catch (error) {
      console.error('Error fetching reminders', error);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  // Add reminder API call
  const handleAddReminder = async (e) => {
    e.preventDefault();

    if (!newTask || !newDueDate) return;

    try {
      const response = await addReminderAPI({ task: newTask, dueDate: newDueDate });
      fetchReminders();
      setReminders([...reminders, response.data]);
      setNewTask('');
      setNewDueDate('');
    } catch (error) {
      console.error('Error adding reminder', error);
    }
  };

  const handleDeleteReminder = async (id) => {
    try {
      const res = await deleteReminderAPI(id);
      if (res.status === 200) {
        toast.success(res.data);
      }
      setReminders(reminders.filter((reminder) => reminder._id !== id));
    } catch (error) {
      console.error('Error deleting reminder', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1817] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Portfolio Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#0A1817] border p-6 shadow-lg rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                  <p className={`text-sm ${stat.color} mt-2`}>{stat.trend}</p>
                </div>
                <div className={`p-3 rounded-full bg-[#0A1817]`}>{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Messages Section */}
        <div className="bg-[#0A1817] border p-6 shadow-lg rounded-lg mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <FaEnvelope className="w-5 h-5 mr-2" />
              Recent Messages
            </h2>
            <Link to={'/messages'} className="border border-[#5DA49B] rounded-full px-4">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentMessages.map((message, index) => (
              <div key={index} className="flex justify-between border-b last:border-0 pb-3 last:pb-0">
                <div>
                  <h3 className="font-medium">{message.sender}</h3>
                  <p className="text-sm text-gray-400">{message.subject}</p>
                </div>
                <span className="text-sm text-gray-400">{message.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Skills Section */}
          <div className="bg-[#0A1817] border p-6 shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <FaCode className="w-5 h-5 mr-2" />
                Skills Progress
              </h2>
              <Link to={'/skills'} className="border border-[#5DA49B] rounded-full px-4">
                View All
              </Link>
            </div>
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

          {/* Projects Section */}
          <div className="bg-[#0A1817] border p-6 shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <FaBriefcase className="w-5 h-5 mr-2" />
                Recent Projects
              </h2>
              <Link to={'/updatePage'} className="border border-[#5DA49B] rounded-full px-4">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div key={index} className="border-b last:border-0 pb-3 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{project.name}</h3>
                      <p className="text-sm text-gray-400">{project.tech}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reminder Section */}
<div className=" border p-8 shadow-xl rounded-lg mt-8">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-semibold text-[#5DA49B] flex items-center">
      <FaClock className="w-5 h-5 mr-2" />
      Reminders
    </h2>
  </div>

  {/* Add Reminder Form */}
  <form onSubmit={handleAddReminder} className="mb-6 border-b-2 pb-4">
    <div className="flex space-x-4 items-center">
      <input
        type="text"
        placeholder="Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="w-full p-3 border border-[#5DA49B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DA49B] placeholder-gray-400"
        required
      />
      <input
        type="date"
        value={newDueDate}
        onChange={(e) => setNewDueDate(e.target.value)}
        className="w-full p-3 border border-[#5DA49B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DA49B]"
        required
      />
      <button
        type="submit"
        className="bg-[#5DA49B] text-white py-2 px-6 rounded-md hover:bg-[#4b8b7f] transition duration-300"
      >
        Add Reminder
      </button>
    </div>
  </form>

  {/* List of Reminders */}
  <div className="space-y-6">
    {reminders?.map((reminder) => (
      <div
        key={reminder._id}
        className="flex justify-between items-center p-4  border border-[#5DA49B] rounded-md "
      >
        <div>
          <p className="text-lg font-medium">{reminder.task}</p>
        </div>
        <span className="text-sm ">{reminder.date}</span>
        <button
          className="text-red-500 hover:text-red-700 text-sm transition duration-200"
          onClick={() => handleDeleteReminder(reminder._id)}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
