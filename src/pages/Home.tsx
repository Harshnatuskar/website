import React from "react"; 
import Intro from "../components/Intro"; 
import Portfolio from "../components/Portfolio"; 
import Contact from "../components/Contact";



function Home(){
    
    return(
        <>
            <Intro />  
            <Portfolio />  
            <Contact /> 
        </>
    );
         
}

export default Home