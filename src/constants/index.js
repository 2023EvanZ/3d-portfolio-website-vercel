import { meta, shopify, starbucks, tesla, fairfax_collegiate } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Lead Instructor",
        company_name: "Fairfax Collegiate",
        icon: fairfax_collegiate,
        iconBg: "#accbe1",
        date: "June 2024 - August 2024",
        points: [
            "Lead two different classes on intermediate coding algorithms and geometry to over 50 middle school students.",
            "Checked in individually with all students often to determine whether additional help was needed to digest the content.",
            "Responsible for handling all communications with parents, including weekly reports of overall student progress.",
        ],
    },
    {
        title: "Assistant Lead Developer",
        company_name: "Pangu Start-up",
        icon: react,
        iconBg: "#accbe1",
        date: "May 2024 - August 2024",
        points: [
            "Built a platform to provide a marketplace of thrift clothes to local college students.",
            "Implemented 10+ frontend features and 5+ backend features. Incorporated modern industry technology like Supabase and Express.",
            "Helped keep team organized and on-schedule, and assisted teammates with technical issues they encountered.",
        ],
    },
    {
        title: "Paid Teacher Assistant",
        company_name: "Fairfax Collegiate",
        icon: fairfax_collegiate,
        iconBg: "#accbe1",
        date: "July 2023 - August 2023",
        points: [
            "Worked individually with students of various skill levels and taught them to program complex algorithms and games in Python.",
            "Assisted teacher with lectures by making sure no mistakes were made and gave impromptu ones to students struggling with concepts.",
            "Acted as a substitute teacher whenever needed and monitored students during break time to ensure their safety.",
        ],
    },
    {
        title: "Paid Intern",
        company_name: "AirTac Customs",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "June 2022 - August 2022",
        points: [
            "Maintained company website by updating product pictures and descriptions, designed custom themes and tasks in Ruby, and made sure the database accurately reflected company inventory.",
            "Managed company inventory, worked in customer support, and designed advertisements/social media posts promoting new products.",
            "Helped with assembly and packaging of products, sometimes building custom shipping containers for global customers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/2023EvanZ',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/evan-zhang-1a2616167/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'GoLoco',
        description: 'Short-form platform for users to discover local small businesses by providing local business owners a platform to promote themselves on.',
        link: 'https://github.com/2023EvanZ/wics-sp2025',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'News App',
        description: 'Created a news app that allows users to use voice commands to query through a wide array of relevant news channels.',
        link: 'https://evan-zhang-news-app.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Gym App',
        description: 'Developed a web application for anyone to quickly search for exercises by muscle group and get video tutorials for various exercises.',
        link: 'https://evan-zhang-gym.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Custom Task App',
        description: 'App built with a React front-end and Flask back-end that allows users to update, add, and delete tasks they want to do in life.',
        link: 'https://github.com/2023EvanZ/react_task_app'
    }
];