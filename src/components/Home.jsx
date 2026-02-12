import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Icons } from '../data/Icons.jsx'
import { Stack } from '../data/Stack.jsx'
import { Projects } from '../data/Projects.jsx'
import myImage from '../imgs/thumb2.jpg'
import '../styles/Home.scss'

export const Home = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Date().toLocaleString('en-us', {
                minute: '2-digit',
                hour: '2-digit',
                second: '2-digit',
            });

            setTime(currentTime);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='home'>
            <header className='home-header'>
                <nav className='nav'>
                    <p className='email'>balexander310@yahoo.com</p>
                    <p className='time'>{time}</p>
                </nav>
            </header>
            <main className='main'>
                <section className='center'>
                    <article className='intro'>
                        <div className='intro-left'>
                            <div className='img-container'>
                                <div className='cover' />
                                <img src={myImage} alt="Alexander Brown" className='me-img' />
                            </div>
                            <div className='social-links'>
                                <a
                                    href="https://github.com/AxAnder0095"
                                    className='social-icon'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <p>Github</p>
                                    <p>{Icons.github}</p>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/alexander-brown-543337216/"
                                    className='social-icon'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <p>LinkedIn</p>
                                    <p>{Icons.linkedin}</p>
                                </a>
                            </div>
                        </div>
                        <div className='intro-right'>
                            <a
                                href="/ABrownResume.pdf"
                                className='resume-icon'
                                download="ABrownResume.pdf"
                                target="_blank"
                                rel="noopener noreferrer">
                                <p className='resume'>Resume</p>
                                <p>{Icons.resume}</p>
                            </a>
                            <p className='name'>Alexander Brown</p>
                            <p className='profession'>Full-Stack Dev | Front End Focus</p>
                            <p className='bio'>{"I’m a front-end and full-stack developer passionate about building responsive, user-focused web applications that deliver meaningful user experiences. I’m committed to continuously expanding my skills through hands-on projects, staying current with modern technologies, and writing scalable, maintainable code."}</p>
                        </div>
                    </article>
                    <article className='tech-stack'>
                        <div className='tech-header'>
                            <div className='tech-icon-title'>
                                {Icons.react}
                            </div>
                            <p className='tech-title'>Tech Stack</p>
                        </div>
                        <div className='stack-types'>
                            <div className='stack-type'>
                                {Stack.map((item, index) => {
                                    const name = Object.keys(item)[0];   // "github"
                                    const icon = item[name];             // <FaGithub />

                                    return (
                                        <div key={name} className="stack-item">
                                            {icon}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </article>
                    <article className='projects-section'>
                        <div className='projects-header'>
                            <div className='projects-icon-title'>
                                {Icons.githubTitle}
                            </div>
                            <p className='projects-title'>Projects</p>
                        </div>
                        <div className='projects-container'>
                            <div className='project-wrapper'>
                                {Projects.map((project, index) => (
                                    <div key={index} className='project-card'>
                                        <img src={project.image} alt={project.title} className='project-image' />
                                        <div className='project-content'>
                                            <div className='project-stack'>
                                                {project.techStack.map((tech, idx) => (
                                                    <span key={idx}>{tech}</span>
                                                ))}
                                            </div>
                                            <h3 className='project-title'>{project.title}</h3>
                                            <p className='project-description'>{project.description}</p>
                                            {/* <h4 className='highlights'>Highlights</h4>
                                            <ul className='project-highlights'>
                                                {project.highlights.map((highlight, idx) => (
                                                    <li key={idx}>{highlight}</li>
                                                ))}
                                            </ul> */}
                                            <a href={project.repo} className='project-link' target="_blank" rel="noopener noreferrer">Repo</a>
                                            <a href={project.website} className='project-link' target="_blank" rel="noopener noreferrer">Live Site</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}