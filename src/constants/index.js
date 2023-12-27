import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  python,
  sqlite,
  django,
  flask,
  java,
 php,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
 
];

const services = [
  {
    title: 'Python Developer',
    icon: frontend,
  },
  {
    title: 'Project Management',
    icon: backend,
  },
  {
    title: 'CI/CD Pipeline',
    icon: ux,
  },
  {
    title: 'Deployment',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  // {
  //   name: 'React JS',
  //   icon: reactjs,
  // },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'sqlite',
    icon: sqlite,
  },
  {
    name: 'django',
    icon: django,
  },
  {
    name: 'flask',
    icon: flask,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'php',
    icon: php,
  },
];

const experiences = [
  {
    title: ' Bachelor in Engineering in Computer Engineering',
    company_name: 'CGPA : 8.39',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2021 - Present',
  },
  {
    title: 'Internship : Django Intern',
    company_name: 'Tech-fusion Technologies',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2023 - Aug 2023',
  },
  {
    title: 'Freelancer',
    company_name: ' Paid Projects',
    icon: kelhel,
    iconBg: '#333333',
    date: 'sep 2023 - Present',
  },
  {
    title: 'Diploma in Computer Engineering',
    company_name: 'CGPA : 9.34',
    icon: dcc,  
    iconBg: '#333333',
    date: 'Aug 2018 - Apr 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Face Recog. Attendance',
    description: 'Ateendance of students/employees is taken using Face recognition (Machine learning) .',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://youtu.be/DahAOse5GRo?si=TzK8qD6HsKCRjXGr',
    demo: 'https://facerecognitionattendances.w3spaces.com',
  },
  {
    id: 'project-2',
    name: 'Farmer management system',
    description:
      'Farmers can sell thier products by showing details of agro products to customers.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://farmermanagement.w3spaces.com/',
    demo: 'https://farmermanagement.w3spaces.com/',
  },
  // {
  //   id: 'project-3',
  //   name: 'Doctor Patient',
  //   description: 'Project aims to ease communication between Doctor and Patients',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://doctorpatient.w3spaces.com',
  //   demo: 'https://doctorpatient.w3spaces.com',
  // },
  {
    id: 'project-4',
    name: 'Talent hunt',
    description: `Talent hunt is aimed to upbring the talents of players to the platform on which they can be renowed as some players.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://talenthunt.w3spaces.com',
    demo: 'https://talenthunt.w3spaces.com',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
