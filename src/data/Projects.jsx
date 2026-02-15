import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import wImage from '../imgs/weatherapp.png';
import tImage from '../imgs/todoapp.png';
import expense from '../imgs/expenseTrackerApp.png';
import showroom from '../imgs/showroom.png';
import animations from '../imgs/animations.png';
import crop from '../imgs/crop.png';
// import { FaN } from "react-icons/fa6";



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
            <IoLogoVercel size={30} fill="#e4e4e4" />,
            <SiRender size={30} fill="#e4e4e4" />,
        ]
    },
    {
        title: "Todo CRUD App",
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
            <RiSupabaseFill size={30} fill="#39ff64" />,
            <IoLogoVercel size={30} fill="#e4e4e4" />,
        ]
    },
    {
        title: "Expense Tracker App",
        description: "A full-stack expense tracking web application that allows users to manage their finances by adding, and deleting expenses, with real-time data persistence and user authentication.",
        highlights: [
            "",
            "",
            ""
        ],
        repo: "https://github.com/AxAnder0095/expenseapp",
        website: "https://www.youtube.com/watch?v=6yxDiHYA7wo",
        image: expense,
        techStack: [
            <FaReact size={30} fill="#46a6ff" />,
            <IoLogoFirebase size={30} fill="#FFCA28" />,
        ]
    },
    {
        title: "Aniamations Showcase",
        description: "A responsive website that highlights custom-built CSS animations for UI elements and effects.",
        highlights: [
            "",
            "",
            ""
        ],
        repo: "https://github.com/AxAnder0095/animations",
        website: "https://animations-feb82.web.app",
        image: animations,
        techStack: [
            <FaReact size={30} fill="#46a6ff" />,
            <FaCss3Alt size={30} fill="#264de4" />,
        ]
    },
    {
        title: "REST API Showroom",
        description: "A RESTful API built with Node.js and Express, designed to manage a showroom inventory system, allowing for efficient handling of products.",
        highlights: [
            "",
            "",
            ""
        ],
        repo: "https://github.com/AxAnder0095/restapipractice",
        website: "https://github.com/AxAnder0095/restapipractice",
        image: showroom,
        techStack: [
            <FaReact size={30} fill="#46a6ff" />,
            <FaNodeJs size={30} fill="#16bb00" />,
        ]
    },
    {
        title: "Image Cropper",
        description: "A web application that allows users to upload and crop images with a user-friendly interface.",
        highlights: [
            "",
            "",
            ""
        ],
        repo: "https://github.com/AxAnder0095/Image-Cropper",
        website: "https://github.com/AxAnder0095/Image-Cropper",
        image: crop,
        techStack: [
            <FaReact size={30} fill="#46a6ff" />,
        ]
    },
]