import React, {useEffect, useState} from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {observer} from "../reuse/Observer";

const Projects = () => {
    const [activeProject, setActiveProject] = useState(0);

    const projects = [
        {
            title: "Gira V2",
            description: "Gira V2 is a task managing web app - as the name suggests, something like Jira. Users were able to sign up to use Gira V2 to manage their tasks. Users were also able to invite other users to their manageable tasks and give the other users tasks. There were many features that made Gira V2 more functional such as the task calendar, task completion table and many more. Gira V2 was the first time I used Laravel and Tailwind. React was also user for the creation of Gira V2.",
            links: [
                { label: "Back-end Github", url: "https://github.com/fur1ozz/giraV2", color: "text-red-300" },
                { label: "Front-end Github", url: "https://github.com/margungijs/giraV2", color: "text-blue-300" }
            ]
        },
        {
            title: "Showmaker.",
            description: "Showmaker is a ticket selling and buying website. Users were able to buy tickets to show and even give users the chance to set up their own shows. Showmaker is my pride and joy, because it was the first project where people complimented my ability to style websites. For Showmaker I used Next.js, Laravel with Docker and Tailwind.",
            links: [
                { label: 'Github', url: 'https://github.com/margungijs/Showmaker', color: "text-violet-300"}
            ]
        },
        {
            title: "Hollow Blue",
            description: "Hollow Blue is an anime themed memory game. Users were able to log in and play different kinds of memory games such as match the cards, word memory game and number memory game. There were leaderboards for the best players and also users were able to buy in-game currency. For Hollow Blue, I also used React, Laravel and Tailwind.",
            links: [
                { label: "Back-end Github", url: "https://github.com/margungijs/HollowBlue-back", color: "text-red-300" },
                { label: "Front-end Github", url: "https://github.com/margungijs/HollowBlue-front", color: "text-blue-300" }
            ]
        },
        {
            title: "Mobile Game",
            description: "The Mobile Game is a dodging based game. The user had to play as an alien spaceship that has to dodge other alien spaceships flying towards the user. The game ended once the users lives ended and the score of the game was sent to the leaderboard and saved so users could battle against each other. Users were also able to buy in-game currency. The game was made with React-Native with expo andLaravel.",
            links: [
                { label: 'Github', url: 'https://github.com/ipa21alekssvelvelis/book-of-run', color: "text-violet-300"}
            ]
        }
    ];

    useEffect(() => {
        const hiddenElementsLeft = document.querySelectorAll('.hidden-animate-left');
        hiddenElementsLeft.forEach((el) => observer.observe(el));

        return () => {
            hiddenElementsLeft.forEach((el) => observer.observe(el));
        };
    }, []);

    const nextProject = () => {
        setActiveProject((prevProject) => (activeProject === 3 ? 0 : prevProject+1));
    };

    const prevProject = () => {
        setActiveProject((prevProject) => (activeProject === 0 ? 3 : prevProject-1));
    };

    const getTranslateX = (index) => {
        switch (index) {
            case 0:
                return '150%';
            case 1:
                return '50%';
            case 2:
                return '-50%';
            case 3:
                return '-150%';
            default:
                return '0%';
        }
    };

    return (
        <div className="flex flex-col p-10 md:text-3xl text-2xl items-center font-semibold relative h-fit min-h-screen max-w-screen" id="projects">
            <h1 className="md:text-7xl text-5xl font-bold text-green-300 mb-4">Projects</h1>
            <h1 className="text-center mb-4">As I said - I've made many projects whilst studying WEB development but these are the ones I'm most proud of.</h1>
            <FaArrowLeft onClick={prevProject} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-neutral-900 cursor-pointer text-white p-2 rounded-full"/>
            <div className="w-full flex justify-center items-center overflow-hidden hidden-animate-left">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:p-8 p-2 rounded-lg shadow-lg bg-neutral-800 w-full items-center gap-4 transition-transform duration-500 ease-in-out`}
                        style={{
                            transform: `translateX(${getTranslateX(activeProject)})`,
                            minWidth: '100%',
                        }}
                    >
                        <h1 className="text-red-300 font-bold md:text-6xl text-2xl">{project.title}</h1>
                        <h1 className="text-center md:indent-4 md:text-left">{project.description}</h1>
                        <div className="flex flex-row justify-between w-full">
                            {project.links.map((link, linkIndex) => (
                                <a key={linkIndex} className={link.color} href={link.url}>{link.label}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <FaArrowRight onClick={nextProject} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-neutral-900 cursor-pointer text-white p-2 rounded-full"/>
        </div>
    );
};

export default Projects;
