import React from "react"; 
import Intro from "../components/Intro"; 
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Contact from "../components/Contact";



function Home(){
    
    return(
        <>
            <Intro />  
            <Portfolio />  
            <Contact />
            <Footer />
        </>
    );
         
}

export default Home