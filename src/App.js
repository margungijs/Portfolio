import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import Introduction from "./components/Introduction";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";

function App() {
    const [hello, setHello] = useState(true);
    const [introduction, setIntroduction] = useState(!hello);

    useEffect(() => {
        setIntroduction(!hello);
    }, [hello]);

    document.body.style.overflowX = 'hidden';

    return (
        <div className="md:text-3xl text-2xl bg-neutral-900 flex flex-col h-fit text-white">
            {hello && <Hello showHello={() => setHello(false)} />}
            {introduction && <Introduction showIntroduction = {() => setIntroduction(false)} />}
            {!hello && !introduction && <Main />}
            {!hello && !introduction && <Projects />}
            {!hello && !introduction && <Skills />}
            {!hello && !introduction && <Education />}
            {!hello && !introduction && <Experience />}
            {!hello && !introduction && <Contacts />}
        </div>
    );
}

export default App;
