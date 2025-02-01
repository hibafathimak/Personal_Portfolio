import React, { useEffect, useState } from "react";
import { FaCode, FaBriefcase, FaEnvelope, FaClock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import {
  addReminderAPI,
  allMessagesAPI,
  deleteReminderAPI,
  getAllProjectsAPI,
  getAllRemindersAPI,
  getAllSkillsAPI,
} from "../services/allAPI";
import { toast } from "react-toastify";
import { TbTrash } from "react-icons/tb";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [reminders, setReminders] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [recentMessages, setRecentMessages] = useState([]);
  const [totalmessages, settotalmessages] = useState();
  const [totalprojects, settotalprojects] = useState();
  const [totalskills, settotalskills] = useState();

  const fetchProjects = async () => {
    try {
      const response = await getAllProjectsAPI();
      settotalprojects(response.data.length);
    } catch (error) {
      console.error("Error fetching reminders", error);
    }
  };
  const fetchtotalMessages = async () => {
    try {
      const response = await allMessagesAPI();
      settotalmessages(response.data.length);
    } catch (error) {
      console.error("Error fetching reminders", error);
    }
  };
  const fetchSkills = async () => {
    try {
      const response = await getAllSkillsAPI();
      settotalskills(response.data.length);
    } catch (error) {
      console.error("Error fetching reminders", error);
    }
  };

  const fetchReminders = async () => {
    try {
      const response = await getAllRemindersAPI();
      setReminders(response.data);
    } catch (error) {
      console.error("Error fetching reminders", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await allMessagesAPI();
      const filteredMessages = response.data.reverse().slice(0, 4);
      setRecentMessages(filteredMessages);
    } catch (error) {
      console.error("Error fetching reminders", error);
    }
  };

  useEffect(() => {
    fetchReminders();
    fetchMessages();
    fetchProjects();
    fetchtotalMessages();
    fetchSkills();
  }, []);

  const handleAddReminder = async (e) => {
    e.preventDefault();

    if (!newTask || !newDueDate) return;

    try {
      const response = await addReminderAPI({
        task: newTask,
        dueDate: newDueDate,
      });
      fetchReminders();
      setReminders([...reminders, response.data]);
      setNewTask("");
      setNewDueDate("");
    } catch (error) {
      console.error("Error adding reminder", error);
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
      console.error("Error deleting reminder", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handlelogout = (e) => {
    e.preventDefault();
    logout();
    sessionStorage.clear();
    navigate("/");
    toast.success("Logout successful!");
  };

  return (
    <div className="h-screen bg-[#0A1817] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold ">Portfolio Dashboard</h1>
          <button
            onClick={handlelogout}
            className="border border-[#5DA49B] py-2 px-6  hover:shadow-sm hover:shadow-[#5DA49B]  rounded-full"
          >
            logout
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div
            onClick={() => {
              navigate("/updatepage");
            }}
            className="bg-[#0A1817] hover:shadow-md hover:shadow-[#5DA49B] border p-6 shadow-lg rounded-lg cursor-pointer"
          >
            <div className="flex items-center flex-col justify-center">
              <div className="p-3 text-3xl rounded-full bg-[#0A1817]">
                <FaBriefcase />
              </div>
              <p className="text-xl font-medium">Projects</p>
              <p className="text-2xl font-semibold mt-2">{totalprojects}</p>
            </div>
          </div>

          <div
            onClick={() => {
              navigate("/skills");
            }}
            className="bg-[#0A1817] border  hover:shadow-md hover:shadow-[#5DA49B]  p-6 shadow-lg rounded-lg cursor-pointer"
          >
            <div className="flex items-center flex-col justify-center">
              <div className="p-3 text-3xl rounded-full bg-[#0A1817]">
                <FaCode />
              </div>
              <p className="text-xl font-medium">Skills</p>
              <p className="text-2xl font-semibold mt-2">{totalskills}</p>
            </div>
          </div>

          <div
            onClick={() => {
              navigate("/messages");
            }}
            className="bg-[#0A1817] border  hover:shadow-md hover:shadow-[#5DA49B]  p-6 shadow-lg rounded-lg cursor-pointer"
          >
            <div className="flex items-center flex-col justify-center">
              <div className="p-3 text-3xl rounded-full bg-[#0A1817]">
                <FaEnvelope />
              </div>
              <p className="text-xl font-medium">Messages</p>

              <p className="text-2xl font-semibold mt-2">{totalmessages}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 ">
          <div className="bg-[#0A1817]  border p-6 shadow-lg rounded-lg mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2" />
                Recent Messages
              </h2>
              <Link
                to={"/messages"}
                className="border border-[#5DA49B] rounded-full px-4"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentMessages.map((message, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b last:border-0 pb-3 last:pb-0"
                >
                  <div>
                    <h3 className="font-lg">{message.message}</h3>
                    <p className="text-sm text-gray-400">{message.name}</p>
                  </div>
                  <span className="text-sm text-gray-400">
                    {formatDate(message.date)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className=" border p-8 shadow-xl rounded-lg mt-8 h-[50vh] ">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#5DA49B] flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                Reminders
              </h2>
            </div>

            <form onSubmit={handleAddReminder} className="mb-6 border-b-2 pb-4">
              <div className="flex space-x-4 items-center">
                <input
                  type="text"
                  placeholder="Task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="w-full  text-gray-600 p-3 bg-gray-200 border rounded-md focus:outline-none placeholder-gray-600"
                  required
                />
                <input
                  type="date"
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                  className="w-full text-gray-600 bg-gray-200 p-3 border rounded-md focus:outline-none "
                  required
                />
                <button
                  type="submit"
                  className="bg-[#5DA49B] text-white py-2 px-6 rounded-full hover:bg-[#4b8b7f] transition duration-300"
                >
                  Add
                </button>
              </div>
            </form>

            <div className="space-y-6 max-h-[50%] overflow-y-scroll transition duration-300">
              {reminders?.map((reminder) => (
                <div
                  key={reminder._id}
                  className="flex justify-between items-center mx-2 p-4  border border-[#5DA49B] rounded-md "
                >
                  <div>
                    <p className=" font-sm">{reminder.task}</p>
                  </div>
                  <div className="flex space-x-4">
                    <span className="text-sm text-gray-400">
                      {formatDate(reminder.date)}
                    </span>
                    <button
                      className="text-red-500 hover:text-red-700 text-xl transition duration-200"
                      onClick={() => handleDeleteReminder(reminder._id)}
                    >
                      <TbTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
