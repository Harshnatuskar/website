//quotes and fav essays
import React from 'react'; 
import "../styles/animations.css"

function Random(){ 

    return ( 
        <div className="flex items-center justify-center flex-col text-center pt-10 pb-6 -mb-40">
            <h1 className='text-2xl md:text-5xl mb-1 md:mb-3 font-normal dark:text-white'>Random</h1>
            <h2 className='text-[1rem] font-bold'>Here are some of my favourate quotes</h2>
            <section data-animate className="slide-enter-content max-w-xl mx-auto text-center font-semibold px-7 py-7">

            <blockquote >
                <p >Nothing will make you happier than an ego death.</p>
                <cite>-Sahil Lavingia</cite>
            </blockquote>
            <br />
            
            <blockquote >
                <p >A ship is safe in harbor, but that's not what ships are made for.</p>
                <cite>-John A. Shedd</cite>
            </blockquote>
            <br />

            <blockquote >
                <p >Aim for the sun. That way if you miss, at least your arrow will fall far away, and the person it kills will likely be someone you don't know.</p>
                <cite>-Brandon Sanderson</cite>
            </blockquote>
            <br />

            <blockquote>
                <p>You get what anybody gets - you get a lifetime. No more. No less.</p>
                <cite>-Neil Gaiman</cite>
            </blockquote>
            <br />

            <blockquote>
                <p>When you look at the greatest artists and creators, they have this ability to start over that nobody else does.</p>
                <cite>-Naval Ravikant</cite>
            </blockquote>
            <br />

            <blockquote>
                <p>If you keep learning all the time you have a huge advantage.</p>
                <cite>-Charlie Munger</cite>
            </blockquote>
            <br />

            <blockquote>
                <p>The first principle is that you must not fool yourself and you are the easiest person to fool.</p>
                <cite>-Richard Feymann</cite>
            </blockquote>
            <br />

            <blockquote>
                <p>Hard Choices, easy life. Easy choices, hard life.</p>
                <cite>-Jerzy Gregorek</cite>
            </blockquote> 
            <br />

            <blockquote>
                <p>“Someday” is a disease that will take your dreams to the grave with you.</p>
                <cite>-Timothy Ferriss</cite>
            </blockquote>
            <br />

            <blockquote>
                <p>I dont stop when i'm tired. I stop when i'm done.</p>
                <cite>-David Goggins</cite>
            </blockquote>
            <br />

            <blockquote>
                <p>You are what you read.</p>
                <cite>-Balaji Srinivasana</cite>
            </blockquote>
            <br />

            <blockquote>
                <p>The best revenge is not to be like that.</p>
                <cite>-Marcus Aurelius</cite>
            </blockquote>
            <br />
                
            <blockquote>
                <p>If code scripts machines, media scripts human beings.</p>
                <cite>-Balaji Srinivasan</cite>
            </blockquote>
            <br />
            
                
            </section>

        </div>
    )
}
export default Random

