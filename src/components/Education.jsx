import React, {useEffect} from 'react';
import Youtube from "../images/youtube.png";
import VTDT from "../images/unnamed.jpg"
import GitHub from "../images/images.jpeg"
import {FaArrowDown} from "react-icons/fa";
import {observer} from "../reuse/Observer";

const Education = () => {
    document.body.style.overflowX = 'hidden';
    // document.body.style.overflowY = 'hidden';


    useEffect(() => {
        const hiddenElementsLeft = document.querySelectorAll('.hidden-animate-left');
        hiddenElementsLeft.forEach((el) => observer.observe(el));
        const hiddenElementsBot = document.querySelectorAll('.hidden-animate-bot-delay');
        hiddenElementsBot.forEach((el) => observer.observe(el));
        const hiddenElementsRight = document.querySelectorAll('.hidden-animate-right');
        hiddenElementsRight.forEach((el) => observer.observe(el));

        return () => {
            hiddenElementsLeft.forEach((el) => observer.observe(el));
            hiddenElementsBot.forEach((el) => observer.observe(el));
            hiddenElementsRight.forEach((el) => observer.observe(el));
        };
    }, []);

    return (
        <div className="flex flex-col items-center md:p-10 p-4 relative h-fit min-h-screen max-w-screen" id = "education">
            <h1 className="md:text-7xl text-5xl font-bold text-violet-300">Education</h1>
            <div className="flex md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full p-4 gap-2 md:text-left text-center hidden-animate-left">
                    <h1 className="md:indent-4">Currently most of my WEB development knowledge has come from creating the
                        previously mentioned projects - <span className="text-green-300 font-bold">I believe the best way to learn is by doing</span>.
                    </h1>
                    <h1 className="md:indent-4">But I've also learned a lot of things from my peers and teachers at
                        the <span
                            className="text-violet-300 font-bold">Vidzemes Techology and Design Vocational school</span> -
                        I am currently in my 3rd year at this school and after summer I will be applying for internships
                        as a part of my school program.</h1>
                    <h1 className="md:indent-4">And apart from the school and projects - <span
                        className="text-blue-300 font-bold">I am also a very curious person</span> meaning whenever I
                        see a chance to learn anything, I take it and that includes topics of WEB development.</h1>
                </div>
                <div className="md:w-1/2 w-full cards hidden-animate-right">
                    <div className="card-group">
                        <div className="card bg-white rounded-lg shadow-xl flex items-center justify-center">
                            <img src={GitHub} alt=""/>
                        </div>
                        <div className="card bg-white rounded-lg shadow-xl flex items-center justify-center">
                            <img src={VTDT} alt=""/>
                        </div>
                        <div className="card bg-white rounded-lg shadow-xl flex items-center justify-center">
                            <img src={Youtube} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;