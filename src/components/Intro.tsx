import React from 'react'; 
import "../styles/animations.css"

function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-10 pb-6 ">
            <h1 className='text-2xl md:text-5xl mb-1 md:mb-3 font-normal dark:text-white '>Harsh Natuskar</h1>
            <h2 className='text-[1rem] font-bold'>Designer and Developer</h2>
            <br />
            <section data-animate className="slide-enter-content text-sm max-w-xl mb-6 font-bold">
            <p>
            Hey, I'm a designer and software developer.
            I'm currently contributing to open source, and have previously worked as intern at <a className='underline' href='https://goast.ai' target="_blank">goast.ai</a>.
            When not immersed in code, you can find me delving into sci-fi and fantasy realms.
            </p>
            <br />
            <p>Things that i have built:</p>
            </section> 

        </div>
)}

export default Intro;
