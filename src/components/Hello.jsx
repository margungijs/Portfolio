import React, {useEffect, useState} from 'react';
import {observerblur} from "../reuse/Observer";

const Hello = ({ showHello }) => {
    const [hello, setHello] = useState(false)

    const handleClick = () => {
        setHello(true)
        const timer = setTimeout(() => {
            showHello()
        }, 1000);
    }

    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden-animate');
        hiddenElements.forEach((el) => observerblur.observe(el));

        return () => {
            hiddenElements.forEach((el) => observerblur.unobserve(el));
        };
    }, []);

    return (
        <div className = {`flex flex-col justify-center items-center h-screen ${hello ? 'hidden-animate-top' : 'show-animate-blur'} `}>
            <h1
                onClick = {handleClick}
                className = {`text-5xl cursor-pointer hover:text-9xl transform duration-300 hover:tracking-wide blur-sm font-semibold hover:blur-0 hover-text-spiral hidden-animate ${hello ? 'text-spiral text-9xl' : ''}`}>
                Hello.
            </h1>
        </div>
    );
};

export default Hello;