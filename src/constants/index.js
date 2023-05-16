import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Software Developer",
    icon: web,
  },
  {
    title: "Front End  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Administrator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Konza Silicon Company Limited",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining Consumable Rest APIs as per the BPMN using Python Django and Django rest framework.",
      "Active DevOps. i.e., Deploying, Building and monitoring of Back-End Applications via docker swarm and docker compose.",
      "Developing and maintaining Nginx web server gateway to support load balancing, reverse proxy and HTTP Cache.",
      "Handling internal and external systems integrations.",
      "Developing analytics of rising solutions in software.",
      "Developing and maintaining automated tests.",
      "Conducting unit tests, code reviews, refactoring and documentation.",
      "Assessing and improving software performance.",
    ],
  },
  {
    title: "Senior Full Stack Software Developer",
    company_name: "Ministry of Lands and Physical Planning",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Sep 2019",
    points: [
      "Led a team of developers in the analysis, design, and implementation of SaaS and PaaS solutions for clients.",
      "Collaborated closely with stakeholders to gather requirements, provide technical guidance, and ensure alignment with business objectives.",
      "Architected scalable and high-performance software systems using Python, Django, and JavaScript frameworks, adhering to best practices and industry standards.",
      "Mentored and coached junior developers, fostering their professional growth and promoting knowledge sharing within the team.",
      "Implemented advanced features and complex functionality, leveraging expertise in Python, Django, and React to deliver robust and elegant solutions.",
      "Conducted code reviews and performed thorough testing to maintain code quality, optimize performance, and minimize bugs and issues.",
      "Developed and maintained CI/CD pipelines to automate testing, deployment, and monitoring processes, increasing efficiency and reducing time to market.",
    ],
  },

  {
    title: "Senior Software Developer, Trainer",
    company_name: "Loyal Computer Services and Training Company Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2014 - March 2018",
    points: [
      "Collaborated with product management and business stakeholders to define and prioritize product features, ensuring alignment with customer needs and market trends.",
      "Led the design and implementation of microservices architecture, utilizing Python, Django, and React to develop scalable and modular components.",
      "Implemented and optimized algorithms and data structures to improve system efficiency and performance.",
      "Conducted code refactoring and technical debt reduction initiatives to enhance code quality, maintainability, and extensibility.",
      "Implemented robust security measures, including encryption, authentication, and authorization mechanisms, to protect sensitive data and ensure compliance with industry standards.",
      "Implemented and maintained automated testing frameworks, such as unit tests, integration tests, and end-to-end tests, to ensure software reliability and quality."
    //   "Conducted performance profiling and optimization of software systems, identifying bottlenecks and implementing improvements to enhance response times and scalability.",
    //   "Collaborated with data scientists and machine learning engineers to integrate AI and ML capabilities into software solutions, enabling intelligent data analysis and predictive functionalities.",
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
