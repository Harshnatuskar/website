//quotes and fav essays
import React from 'react'; 

function Random(){ 
      
    return ( 
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 -mb-40">
            <h1 className='text-3xl md:text-7xl mb-1 mb:mb-3 font-medium dark:text-white'>Random</h1> 
            <br />
            <h2 className='text-base max-w-xl mb-6 font-bold'>Here are some of my favourate quotes</h2>
            <section className="max-w-lg mx-auto ">

            <blockquote >
               <p >Nothing will make you happier than ego an death.</p>
               <cite>-Sahil Lavingia</cite>
            </blockquote>
            <br />
            
            <blockquote >
               <p >Aim for the sun. That way if you miss, at least your arrow will fall far away, and the person it kills will likely be someone you don't know.</p>
               <cite>-Brandon Sanderson</cite>
            </blockquote>
            <br />

            <blockquote>
                <h3>You get what anybody gets - you get a lifetime. No more. No less.</h3>
                <cite>-Neil Gaiman</cite>
            </blockquote>
            <br />

            <blockquote>
                <h3>When you look at the greatest artists and creators, they have this ability to start over that nobody else does.</h3>
                <cite>-Naval Ravikanth</cite>
            </blockquote>
            <br />

            <blockquote>
                <h3>If you keep learning all the time you have a huge advantage.</h3>
                <cite>-Charlie Munger</cite>
            </blockquote>
            <br />

            <blockquote>
                <h3>The first principle is that you must not fool yourself and you are the easiest person to fool.</h3>
                <cite>-Richard Feymann</cite>
            </blockquote>
            <br />

            <blockquote>
                <h3>Hard Choices, easy life. Easy choices, hard life.</h3>
                <cite>-Jerzy Gregorek</cite>
            </blockquote> 
            <br /><br />

            <h2 className='font-bold'>Here are some of my favourate essays:</h2>
            <br />
            <section className='text-base'> 
                <p ><a className="no-underline hover:underline" href="https://charlieholtz.substack.com/p/charlies-guide-to-life">Charlie Munger's Guide to Life </a><a className="no-underline hover:underline" href="https://www.charlieholtz.com/">-Charlie Holtz</a></p>
                <p ><a className="no-underline hover:underline" href="https://levels.io/contact/">Why I'm unreachable and maybe you should be too </a><a className="no-underline hover:underline" href="https://www.levels.io">-Pieter Levels</a></p> 
                <p ><a className="no-underline hover:underline" href="https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short">The days are long ,but the decades are short </a><a className="no-underline hover:underline" href="https://blog.samaltman.com/">-Sam Altman</a></p> 
            </section>
             
                
            </section>
 
        </div>
    )
}
export default Random

