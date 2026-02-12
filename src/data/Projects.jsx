import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import wImage from '../imgs/weatherapp.png';
import tImage from '../imgs/todoapp.png';



export const Projects = [
    {
        title: "Weather Application",
        description: "A full-stack weather forecasting web application that retrieves real-time weather data using U.S. zip codes.",
        highlights: [
            "Integrated the OpenWeatherMap API to fetch and display current weather conditions based on user input.",
            "Utilized Node.js and Express for backend development, and deployed the backend on Render.",
            "Website deployed with Vercel, ensuring fast load times and a seamless user experience."
        ],
        repo: "https://github.com/AxAnder0095/Weather-Application",
        website: "https://weather-application-indol-tau.vercel.app", 
        image: wImage,
        techStack: [
            <FaReact size={30} fill="#46a6ff" />,
            <SiExpress size={30} fill="#009e00" />,
            <IoLogoVercel size={30} fill="#e4e4e4"/>,
            <SiRender size={30} fill="#e4e4e4"/>,
        ]
    },
    {
        title: "Authenticated Todo CRUD Application",
        description: "A secure, full-stack task management web application with authentication, protected routes, and real time database integration. ",
        highlights: [
            "Built full CRUD functionality with Supabase PostgreSQL and persistent authentication",
            "Implemented protected routes, global auth state (Context API), and client-side form validation.",
            "Deployed production-ready application using Vercel CI/CD."
        ],
        repo: "https://github.com/AxAnder0095/SupabaseCRUDAuth",
        website: "https://supabase-crud-auth-bice.vercel.app", 
        image: tImage,
        techStack: [
            <FaReact size={30} fill="#46a6ff" />,
            <RiSupabaseFill size={30} fill="#39ff64"/>,
            <IoLogoVercel size={30} fill="#e4e4e4"/>,
        ]
    },
    {
        title: "Authenticated Todo CRUD Application",
        description: "A secure, full-stack task management web application with authentication, protected routes, and real time database integration. ",
        highlights: [
            "Built full CRUD functionality with Supabase PostgreSQL and persistent authentication",
            "Implemented protected routes, global auth state (Context API), and client-side form validation.",
            "Deployed production-ready application using Vercel CI/CD."
        ],
        repo: "https://github.com/AxAnder0095/SupabaseCRUDAuth",
        website: "https://supabase-crud-auth-bice.vercel.app", 
        image: tImage,
        techStack: [
            <FaReact size={30} fill="#46a6ff" />,
            <RiSupabaseFill size={30} fill="#39ff64"/>,
            <IoLogoVercel size={30} fill="#e4e4e4"/>,
        ]
    },
    {
        title: "Authenticated Todo CRUD Application",
        description: "A secure, full-stack task management web application with authentication, protected routes, and real time database integration. ",
        highlights: [
            "Built full CRUD functionality with Supabase PostgreSQL and persistent authentication",
            "Implemented protected routes, global auth state (Context API), and client-side form validation.",
            "Deployed production-ready application using Vercel CI/CD."
        ],
        repo: "https://github.com/AxAnder0095/SupabaseCRUDAuth",
        website: "https://supabase-crud-auth-bice.vercel.app", 
        image: tImage,
        techStack: [
            <FaReact size={30} fill="#46a6ff" />,
            <RiSupabaseFill size={30} fill="#39ff64"/>,
            <IoLogoVercel size={30} fill="#e4e4e4"/>,
        ]
    },
]