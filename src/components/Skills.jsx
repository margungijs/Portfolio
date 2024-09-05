import React, {useEffect} from 'react';
import React1 from "../images/React_Logo_SVG.svg.png"
import Laravel from "../images/800px-Laravel.svg.png"
import Docker from "../images/download (1).png";
import Python from "../images/Python-logo-notext.svg.png";
import Tailwind from "../images/tailwind.png"
import {FaArrowDown} from "react-icons/fa";
import {observer} from "../reuse/Observer";

const Skills = () => {
    document.body.style.overflowX = 'hidden';
    // document.body.style.overflowY = 'hidden';


    useEffect(() => {
        const hiddenElementsLeft = document.querySelectorAll('.hidden-animate-left');
        hiddenElementsLeft.forEach((el) => observer.observe(el));
        const hiddenElementsBot = document.querySelectorAll('.hidden-animate-bot-delay');
        hiddenElementsBot.forEach((el) => observer.observe(el));

        return () => {
            hiddenElementsLeft.forEach((el) => observer.observe(el));
            hiddenElementsBot.forEach((el) => observer.observe(el));
        };
    }, []);

    return (
        <div className="flex flex-col p-10 text-center relative h-fit min-h-screen max-w-screen" id = "skills">
            <h1 className = "md:text-7xl text-5xl font-bold text-blue-300">Skills</h1>
            <h1 className="md:text-3xl text-2xl font-semibold">I've learned many technical skills whilst studying WEB development and these are the most prominent ones.</h1>
            <div className="card-list text-4xl hidden-animate-left">
                <div className="skill-card bg-neutral-900 text-center">
                    <h1 className="font-semibold mb-4">Laravel & PHP</h1>
                    <img src={Laravel} alt="" className="w-full h-auto mx-auto my-auto" style={{ maxWidth: '200px' }} />
                </div>
                <div className="skill-card bg-neutral-900 text-center">
                    <h1 className="font-semibold mb-4">Javascript libraries</h1>
                    <img src={React1} alt="" className="w-full h-auto mx-auto my-auto" style={{ maxWidth: '200px' }} />
                </div>
                <div className="skill-card bg-neutral-900 text-center">
                    <h1 className="font-semibold">Docker</h1>
                    <img src={Docker} alt="" className="w-full h-auto mx-auto my-auto" style={{ maxWidth: '200px' }} />
                </div>
                <div className="skill-card bg-neutral-900 text-center">
                    <h1 className="font-semibold">Python</h1>
                    <img src={Python} alt="" className="w-full h-auto mx-auto my-auto" style={{ maxWidth: '200px' }} />
                </div>
                <div className="skill-card bg-neutral-900 text-center">
                    <h1 className="font-semibold">CSS Libraries</h1>
                    <img src={Tailwind} alt="" className="w-full h-auto mx-auto my-auto" style={{ maxWidth: '200px' }} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
