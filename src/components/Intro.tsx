import React from 'react'; 
function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-10 pb-6 ">
            <h1 className='text-2xl md:text-5xl mb-1 md:mb-3 font-normal dark:text-white '>Harsh Natuskar</h1>
            <br />
            <section className='mb-6 text-medium font-bold break-words'>
            Hii, I am a designer and a developer currently working as an intern at <a href="https://goast.ai/" target="_blank" className='hover:underline'>goast.ai</a>.
            <br />
            I also like to read(and sometimes write) sci-fi fantasy and running.
            <br /> <br />
            <p>Things that i have built:</p>
            </section> 

        </div> 


        
    )
}

export default Intro;
