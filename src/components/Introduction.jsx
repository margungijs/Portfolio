import React, {useEffect, useState} from 'react';
import {observer} from "../reuse/Observer";

const Introduction = ({ showIntroduction }) => {
    const [show, setShow] = useState(false)
    const [ellipsis, setEllipsis] = useState('');
    const [next, setNext] = useState(false)

    const handleClick = () => {
        setNext(true)
        const timer = setTimeout(() => {
            showIntroduction()
        }, 1000);
    }

    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden-animate');
        hiddenElements.forEach((el) => observer.observe(el));

        const timer = setTimeout(() => {
            setShow(true);
        }, 3000);

        const ellipsisInterval = setInterval(() => {
            setEllipsis((prev) => {
                if (prev === '') return '.';
                if (prev === '.') return '..';
                if (prev === '..') return '...';
                return '';
            });
        }, 500);

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
            clearTimeout(timer); // Clear the timeout on component unmount
            clearInterval(ellipsisInterval);
        };
    }, [show]);

    return (
        <div className={`flex flex-col justify-center transition duration-300 items-center h-screen ${next ? "hidden-animate-top" : "show-animate"}`}>
            <h1 className=" md:text-7xl text-5xl mb-10 duration-300 font-semibold hidden-animate">My name is{show ? "" : ellipsis}</h1>
            {show && <h1
                onClick={handleClick}
                className={`hidden-animate cursor-pointer hover:tracking-wide text-spiral font-bold transform duration-300 ${show ? 'md:text-9xl text-6xl' : 'text-3xl'}`}
            >MARCIS
            </h1>}
        </div>
    );
};

export default Introduction;