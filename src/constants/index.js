const navLinks = [
    {
    name: "About Me",
    link: "#aboutMe",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },

];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const aboutMe = [
  {
    name: "Soham Yashwant Surve",
    mentions: "SDE | Application Developer | AI Enthusiast",
    review:
      "Emerging Software Developer with expertise in Full-Stack Development (React, Node.js, Express, MongoDB) and AI-driven applications. Experienced in building scalable, high-performance solutions, improving system efficiency, and solving real-world challenges. I am skilled in cloud computing, REST APIs, data structures, and algorithmic problem-solving.",
    imgPath: "/images/Self_Pic.png",
  },
  
];

const counterItems = [
  { value: 8, suffix: "+", label: "Projects Done" },
  { value: 10, suffix: "+", label: "Tools & Tech" },
  { value: 3, suffix: "+", label: "Hackathons" },
  { value: 2, suffix: "+", label: "Certifications" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git Version Control",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
 
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
   {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Team Collaboration",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Soham brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/walmart_global_tech-logo.png",
    logoPath: "/images/wmlogo.png",
    title: "Application Developer Intern (Virtual)",
    date: "October 2024 - November 2024",
    responsibilities: [
      "Developed a Java-based heap data structure, optimizing shipping efficiency by 30%.",
      "Created UML diagrams and database models to enhance system architecture and data organization.", 
      "Applied algorithmic thinking and software design to improve performance, achieving 95% error-free performance in data processing and operations.", 
    ],
  },
 
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/wmlogo.png",
  },
];



const socialImgs = [
  {
    name: "insta",
    link: "#",
    imgPath: "/images/insta.png",
  },
  {
    name: "git",
    link: "https://www.github.com/Sohamsurve",
    imgPath: "/images/gitIcon.png",
  },
  {
    name: "x",
    link: "#",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/soham-surve",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  aboutMe,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
