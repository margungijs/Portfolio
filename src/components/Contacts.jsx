import React, {useEffect} from 'react';
import Marcis from "../images/marcis.jpg";
import {observer} from "../reuse/Observer";

const Contacts = () => {
    useEffect(() => {
        const hiddenElementsLeft = document.querySelectorAll('.hidden-animate-left');
        hiddenElementsLeft.forEach((el) => observer.observe(el));
        const hiddenElementsRight = document.querySelectorAll('.hidden-animate-right');
        hiddenElementsRight.forEach((el) => observer.observe(el));

        return () => {
            hiddenElementsLeft.forEach((el) => observer.observe(el));
            hiddenElementsRight.forEach((el) => observer.observe(el));
        };
    }, []);

    return (
        <div className="flex flex-col md:p-10 p-4 items-center h-fit min-h-screen max-w-screen" id = "contact">
            <h1 className="md:text-7xl text-5xl font-bold text-red-300 text-center">Contact me</h1>
            <div className="flex md:flex-row flex-col md:items-center w-full h-full md:p-10 p-2 gap-4">
                <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center hidden-animate-left">
                    <h1 className="text-center">If you have a message to send me, feel free to contact me at either of these forms of communication!</h1>
                    <h1 className="md:indent-4">Phone number:</h1>
                    <h1 className="text-center md:text-5xl text-3xl font-bold text-blue-300">+371 26684646</h1>
                    <h1 className="md:indent-4">E-mail:</h1>
                    <h1 className="text-center md:text-5xl text-3xl font-bold text-red-300 break-all">marcis.jansons@gmail.com</h1>
                    <h1 className = "md:mt-10 mt-4 text-center">This is the end of my portfolio! Have a good day!</h1>
                </div>
                <div className="md:w-1/2 w-full h-full hidden-animate-right">
                    <img src={Marcis} alt="Marcis" className="w-full h-full rounded-lg object-cover shadow-lg"/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
