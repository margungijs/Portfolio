import React, {useEffect} from 'react';
import Ant from "../images/ant.png";
import {observer} from "../reuse/Observer";
import {FaArrowDown} from "react-icons/fa";

const Experience = () => {
    // document.body.style.overflowY = 'hidden';

    useEffect(() => {
        const hiddenElementsRight = document.querySelectorAll('.hidden-animate-right');
        hiddenElementsRight.forEach((el) => observer.observe(el));
        const hiddenElementsBot = document.querySelectorAll('.hidden-animate-bot-delay');
        hiddenElementsBot.forEach((el) => observer.observe(el));

        return () => {
            hiddenElementsRight.forEach((el) => observer.observe(el));
            hiddenElementsBot.forEach((el) => observer.observe(el));
        };
    }, []);

    return (
        <div className="flex flex-col gap-10 md:p-10 p-4 items-center relative h-fit min-h-screen max-w-screen" id="experience">
            <h1 className="md:text-7xl text-5xl font-bold text-pink-300">Experience</h1>
            <div className="flex md:flex-row flex-col w-full">
                <div className="md:w-1/2 w-full">
                    <img src={Ant} alt="" className="swirl-in-fwd"/>
                </div>
                <div className="md:w-1/2 w-full flex flex-col md:text-right text-center gap-2 hidden-animate-right p-4 md:p-0">
                    <h1>Sadly, I do not have any real work experience.</h1>
                    <h1>The only experience in programming I have are the previously mentioned <span
                        className="text-green-300 font-bold">projects</span> that I've made.</h1>
                    <h1>It doesn't sound like a lot but from those projects I learned many different <span
                        className="text-red-300 font-bold">WEB technologies</span>, learned <span
                        className="text-violet-300 font-bold">how to work in groups</span>, how to <span
                        className="text-blue-300 font-bold">set up and manage projects</span> and so on.</h1>
                    <h1>Currently I'm looking for chances to work for people - making them quality websites for pay or
                        for the experience of a working environment.</h1>
                </div>
            </div>
        </div>
    );
};

export default Experience;