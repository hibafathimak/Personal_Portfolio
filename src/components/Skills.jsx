import React, { useState, useEffect } from 'react';
import { FaServer, FaTools, FaUsers } from 'react-icons/fa';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { getAllSkillsAPI } from '../services/allAPI';

const Skills = () => {
  const [category, setCategory] = useState('Frontend');
  const [skills, setSkills] = useState([]);
  
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

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };

  return (
    <div className="px-2 md:px-12 lg:px-32">
      <h1 className="text-4xl font-extrabold text-center mb-10" >
        Skills
      </h1>
      <div
        className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-2 gap-6 w-full lg:w-1/2">
          <div
            onClick={() => handleCategoryClick("Frontend")}
            className={`border cursor-pointer p-2 md:p-6 rounded-lg flex flex-col items-center space-y-4 transition ${
              category === "Frontend" ? "bg-[#4D8685] text-white" : "hover:bg-[#4D8685] hover:text-white"
            }`}
          >
            <FaWandMagicSparkles className="text-4xl" />
            <p className="text-sm md:text-lg  font-semibold">Frontend</p>
          </div>
          <div
            onClick={() => handleCategoryClick("Backend")}
            className={`border cursor-pointer p-2 md:p-6 rounded-lg flex flex-col items-center space-y-4 transition ${
              category === "Backend" ? "bg-[#4D8685] text-white" : "hover:bg-[#4D8685] hover:text-white"
            }`}
          >
            <FaServer className="text-4xl" />
            <p className="text-sm md:text-lg  font-semibold">Backend</p>
          </div>
          <div
            onClick={() => handleCategoryClick("Tools")}
            className={`border cursor-pointer p-2 md:p-6 rounded-lg flex flex-col items-center space-y-4 transition ${
              category === "Tools" ? "bg-[#4D8685] text-white" : "hover:bg-[#4D8685] hover:text-white"
            }`}
          >
            <FaTools className="text-4xl" />
            <p className="text-sm md:text-lg  font-semibold">Tools</p>
          </div>
          <div
            onClick={() => handleCategoryClick("Soft Skills")}
            className={`border cursor-pointer p-2 md:p-6 rounded-lg flex flex-col items-center space-y-4 transition ${
              category === "Soft Skills" ? "bg-[#4D8685] text-white" : "hover:bg-[#4D8685] hover:text-white"
            }`}
          >
            <FaUsers className="text-4xl" />
            <p className="text-sm md:text-lg  font-semibold">Soft Skills</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 border rounded-lg">
          <h3 className="text-xl font-bold p-5">{category}</h3>
          <hr />
          <div className="space-y-4 p-6">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div key={skill.name}>
                  <p className="text-sm">{skill.name}</p>
                  <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
                    <div
                      data-aos="zoom-in-right"
                      className="bg-[#4D8685] h-2 rounded"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
