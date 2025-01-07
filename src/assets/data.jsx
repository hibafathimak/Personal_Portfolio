import p1 from './Html-Protfolio.png'
import p2 from './ziana.png'
import p3 from './project3.png'
import p4 from './project4.png'
import p5 from './project5.png'
import p6 from './project6.png'
import p7 from './project7.png'
import p8 from './project8.png'
import p9 from './project9.png'
import p10 from './project10.png'
import p11 from './project11.png'
import p12 from './project12.png'
import p13 from './project13.png'
import p14 from './project14.png'
import p15 from './project15.png'
import p16 from './Portfolio.png'



const data = {
  projects: [
    {
      id: 1,
      title: "Portfolio",
      description: "A static portfolio showcasing my skills and projects. It highlights design and layout expertise using HTML and CSS.",
      image: p1,
      technologies: ["HTML", "CSS"],
      sourceCode: "https://github.com/hibafathimak/portfolio",
      liveDemoLink: "https://portfolio-hiba-fathimas-projects-6c1dc5cc.vercel.app/",
      category: "Frontend",
    },
    {
      id: 2,
      title: "Static HTML Webpage",
      description: "A modern jewelry website with an elegant design. Built to showcase products effectively with clean visuals.",
      image: p2,
      technologies: ["HTML", "CSS"],
      sourceCode: "https://github.com/hibafathimak/ziana-jewellery",
      liveDemoLink: "https://ziana-jewellery-site.netlify.app/",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Responsive Website",
      description: "A responsive site compatible with various devices. Uses modern web technologies for seamless user experience.",
      image: p3,
      technologies: ["HTML", "CSS", "Media Queries"],
      sourceCode: "https://github.com/hibafathimak/responsive-website",
      liveDemoLink: "https://responsive-site-task2.netlify.app/",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Travel Blog",
      description: "A blog platform to explore and read about travel destinations. Built with Bootstrap for clean layouts and styling.",
      image: p4,
      technologies: ["HTML", "Bootstrap"],
      sourceCode: "https://github.com/hibafathimak/travel-blog",
      liveDemoLink: "https://travel-blog-fernweh.netlify.app/",
      category: "Frontend",
    },
    {
      id: 5,
      title: "Swiggy Clone",
      description: "A replica of Swiggy for food ordering services. Features intuitive design and Bootstrap-based styling.",
      image: p5,
      technologies: ["HTML", "CSS", "Bootstrap"],
      sourceCode: "https://github.com/hibafathimak/swiggy-clone",
      liveDemoLink: "https://swiggy-clone-task-4.netlify.app/",
      category: "Frontend",
    },
    {
      id: 6,
      title: "Parallax Effect",
      description: "A website showcasing parallax scrolling for interactive design. Adds depth and visual appeal to the user experience.",
      image: p6,
      technologies: ["HTML", "CSS", "JavaScript"],
      sourceCode: "https://github.com/hibafathimak/parallax",
      liveDemoLink: "https://parallax-effect-8719c0.netlify.app/",
      category: "Frontend",
    },
    {
      id: 7,
      title: "To-Do App",
      description: "A task management app to organize daily activities. Allows adding, editing, and deleting tasks with ease.",
      image: p7,
      technologies: ["HTML", "CSS", "JavaScript"],
      sourceCode: "https://github.com/hibafathimak/to-do",
      liveDemoLink: "https://to-do-app-a6ab4f.netlify.app/",
      category: "Frontend",
    },
    {
      id: 8,
      title: "Dynamic Pottery",
      description: "An interactive site for pottery-making with dynamic effects. Uses JavaScript to create engaging user experiences.",
      image: p8,
      technologies: ["HTML", "CSS", "JavaScript"],
      sourceCode: "https://github.com/hibafathimak/dynamic-pottery-js",
      liveDemoLink: "https://pottery-dynamic-f5c0fd.netlify.app/",
      category: "Frontend",
    },
    {
      id: 9,
      title: "Memory Game",
      description: "A fun card-matching game to test memory skills. Built with JavaScript for interactivity and smooth gameplay.",
      image: p9,
      technologies: ["HTML", "CSS", "JavaScript"],
      sourceCode: "https://github.com/hibafathimak/memory-game",
      liveDemoLink: "https://memory-matching-game-4bfa70.netlify.app/",
      category: "Frontend",
    },
    {
      id: 10,
      title: " React Static",
      description: "A static site built with React . Demonstrates React's component-based architecture effectively.",
      image: p10,
      technologies: ["React.js"],
      sourceCode: "https://github.com/hibafathimak/rosebud-react-static",
      liveDemoLink: "https://rosebud-static-react-42e0ff.netlify.app/",
      category: "Frontend",
    },
    {
      id: 11,
      title: "React Weather App",
      description: "A weather app displaying real-time updates using APIs. Built with React for dynamic and responsive design.",
      image: p11,
      technologies: ["React.js", "Weather API"],
      sourceCode: "https://github.com/hibafathimak/react-weather-app",
      liveDemoLink: "https://react-weather-app-5173-six.vercel.app/",
      category: "Frontend",
    },
    {
      id: 12,
      title: "React Parallax",
      description: "A React app demonstrating parallax scrolling effects. Enhances web design with depth and smooth transitions.",
      image: p12,
      technologies: ["React.js"],
      sourceCode: "https://github.com/hibafathimak/ReactParallax",
      liveDemoLink: "https://react-parallax-gold.vercel.app/",
      category: "Frontend",
    },
    {
      id: 13,
      title: "Project Fair",
      description: "A platform for developers to showcase and share projects. Built with MERN stack for dynamic functionality.",
      image: p13,
      technologies: ["React.js", "MongoDB", "Express.js", "Node.js"],
      sourceCode: "https://github.com/hibafathimak/projectFair",
      liveDemoLink: "https://project-fair-beige.vercel.app/",
      category: "Full Stack",
    },
    {
      id: 14,
      title: "NovelNest Bookstore",
      description: "A MERN-based bookstore for buying and selling books. Features advanced search and secure payment integration.",
      image: p14,
      technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "Razorpay"],
      sourceCode: "https://github.com/hibafathimak/NovelNest_frontend",
      liveDemoLink: "https://novel-nest-bookstore.vercel.app/",
      category: "Full Stack",
    },
    {
      id: 15,
      title: "Journal/Diary App",
      description: "A journaling app with reminders and a vision board. Uses a JSON server for efficient data management.",
      image: p15,
      technologies: ["React", "JSON-Server"],
      sourceCode: "https://github.com/hibafathimak/ReactJournal",
      liveDemoLink: "https://react-journal-seven.vercel.app/",
      category: "Full Stack",
    },
    {
      id: 16,
      title: "Personal Portfolio",
      description: "A portfolio showcasing my work, built with React. Styled using Tailwind and integrated with Firebase.",
      image: p16,
      technologies: ["React", "Firebase", "TailwindCSS"],
      sourceCode: "",
      liveDemoLink: "",
      category: "Full Stack",
    },
  ],
  
  
  
  
  contactInfo: {
    email: import.meta.env.VITE_CONTACT_EMAIL,
    phone: import.meta.env.VITE_CONTACT_PHONE,
    linkedin: import.meta.env.VITE_CONTACT_LINKEDIN,
    instagram: import.meta.env.VITE_CONTACT_INSTAGRAM,
    github: import.meta.env.VITE_CONTACT_GITHUB,
  },
  skills: [
    {
      name: "HTML5",
      level: 80,
      category: "Frontend",
    },
    {
      name: "CSS",
      level: 90,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      level: 70,
      category: "Frontend",
    },
    {
      name: "React.js",
      level: 80,
      category: "Frontend",
    },
    {
      name: "Angular",
      level: 75,
      category: "Frontend",
    },
    {
      name: "Node.js",
      level: 60,
      category: "Backend",
    },
    {
      name: "Express.js",
      level: 65,
      category: "Backend",
    },
    {
      name: "MongoDB",
      level: 60,
      category: "Backend",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      category: "Tools",
    },
    {
      name: "Git",
      level: 80,
      category: "Tools",
    },
    {
      name: "Bootstrap",
      level: 90,
      category: "Tools",
    },
    {
      name: "Firebase",
      level: 70,
      category: "Tools",
    },
    {
      name: "Communication",
      level: 60,
      category: "Soft Skills",
    },
    {
      name: "Teamwork",
      level: 80,
      category: "Soft Skills",
    },
    {
      name: "Problem Solving",
      level: 90,
      category: "Soft Skills",
    },
    {
      name: "Adaptability",
      level: 80,
      category: "Soft Skills",
    },
  ],
};

export default data;
