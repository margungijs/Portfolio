import React, {useEffect, useState} from 'react';
import {observer} from "../reuse/Observer";
import { FaArrowDown } from "react-icons/fa";

const Main = ({scroll}) => {
    const [screen, setScreen] = useState(null)

    // document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';

    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden-animate-left-title');
        hiddenElements.forEach((el) => observer.observe(el));
        const hiddenElementsLeft = document.querySelectorAll('.hidden-animate-left-delay');
        hiddenElementsLeft.forEach((el) => observer.observe(el));
        const hiddenElementsRight = document.querySelectorAll('.hidden-animate-right-delay');
        hiddenElementsRight.forEach((el) => observer.observe(el));
        const hiddenElementsBot = document.querySelectorAll('.hidden-animate-bot-delay');
        hiddenElementsBot.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
            hiddenElementsLeft.forEach((el) => observer.observe(el));
            hiddenElementsRight.forEach((el) => observer.observe(el));
            hiddenElementsBot.forEach((el) => observer.observe(el));
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        console.log(element)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className = "flex flex-col items-center md:p-10 p-4 h-fit min-h-screen max-w-screen" id = "main">
            <div className = "flex flex-row md:text-6xl justify-center flex-wrap font-semibold gap-2">
                <h1 className = "hidden-animate-left-title">AND </h1>
                <h1 className = "hidden-animate-left-title">WELCOME </h1>
                <h1 className = "hidden-animate-left-title">TO </h1>
                <h1 className = "hidden-animate-left-title">MY </h1>
                <h1 className = "text-spiral hidden-animate-left-title">PORTFOLIO! </h1>
            </div>
            <div className = "flex flex-row font-semibold lg:w-full items-center relative">
                <div className = {`flex flex-col md:p-10 p-2 bg-neutral-800 w-full lg:w-1/2 text-center md:text-left rounded-lg m-10 gap-2 hidden-animate-left-delay transform duration-300`}>
                    <h1 className = "md:indent-4">My full name is <span className = "text-spiral font-bold">Mārcis Jansons</span>.</h1>
                    <h1 className = "md:indent-4">I am currently studying to become a <span className = "text-red-300 font-bold">full-stack WEB developer</span>.</h1>
                    <h1 className = "md:indent-4">I've grown significantly since I started studying WEB development - I've made many complicated projects, learned a new way of thinking, and in-short understood that <span className = "text-yellow-300 font-bold">anything is possible</span>.</h1>
                    <h1 className = "md:indent-4">But eventually I dream of building something much grander than a website - think <span className = "text-blue-300 font-bold">spaceship</span> or maybe even <span className = "text-violet-400 font-bold">something humanity hasn't seen before</span>.</h1>
                </div>
                <div
                    className={` flex-col text-center hidden lg:flex lg:w-1/2 h-full gap-10 justify-between items-center p-10 text-5xl hidden-animate-right-delay transform duration-300`}>
                    <h1 onClick={() => scrollToSection('projects')}
                        className="h-fit w-fit cursor-pointer transform duration-300 hover:text-green-300">Projects</h1>
                    <h1 onClick={() => scrollToSection('skills')}
                        className="h-fit w-fit cursor-pointer transform duration-300 hover:text-blue-300">Skills</h1>
                    <h1 onClick={() => scrollToSection('education')}
                        className="h-fit w-fit cursor-pointer transform duration-300 hover:text-violet-300">Education</h1>
                    <h1 onClick={() => scrollToSection('experience')}
                        className="h-fit w-fit cursor-pointer transform duration-300 hover:text-pink-300">Experience</h1>
                    <h1 onClick={() => scrollToSection('contact')}
                        className="h-fit w-fit cursor-pointer transform duration-300 hover:text-red-300">Contacts</h1>
                </div>
            </div>
        </div>

    );
};

export default Main;
