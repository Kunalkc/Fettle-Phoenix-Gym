import React from "react";
import Imageslider from "./Imageslider"

export default function About(){

    const [width1 , setWidth1] = React.useState(window.innerWidth * 0.7)
    const [width2 , setWidth2] = React.useState(window.innerWidth * 0.6)
   
    React.useEffect(() => {
        const handleResize = () => {
            setWidth1(window.innerWidth * 0.7)
            setWidth2(window.innerWidth * 0.6)
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <div id="ABOUT" className="pt-15 mt-15 w-full h-auto flex flex-col gap-[4vw] items-center fade-in ">
        

            <Imageslider
            ID = {1}
            width = {width1}
            height = {500}
         />     
                <h1 className=" text-red-700 text-2xl font-bold italic fade-in">ABOUT</h1>
                 <p className="text-white text-center w-[70vw] fade-in">Welcome to Fettle Phoenix Gym – Rise Stronger! <br/>

At Fettle Phoenix Gym, we believe in transformation, resilience, and strength. Just like a phoenix rising from the ashes, we help you push past your limits and become the best version of yourself. Our state-of-the-art facility is equipped with top-tier workout equipment, expert trainers, and a motivating atmosphere to fuel your fitness journey. Whether you're a beginner or a seasoned athlete, we offer personalized training programs, group classes, and nutritional guidance to help you achieve your goals. Join the Fettle Phoenix community today and ignite your passion for fitness!</p>
                
         

         <div className="mt-15 p-15 w-full h-auto px-7 flex flex-col md:flex-row items-center justify-center fade-in bg-black rounded-3xl">
            <Imageslider
             ID = {2}
             width = {width2}
             height = {300}
           />

            <div className=" w-auto h-auto flex flex-col gap-[4vw] items-center justify-center" >
                 <h1 className=" text-red-700 text-2xl font-bold italic fade-in text-center mt-15">ABOUT NIRIT</h1>
                 <p className="text-white text-center w-auto md:w-[70vw] fade-in p-7">Nirit Jamwal is a renowned professional bodybuilder from Himachal Pradesh, known for his remarkable achievements in the world of bodybuilding. He is the proud owner of Fettle Phonix Gym, where he trains and inspires countless fitness enthusiasts. Nirit has earned the prestigious title of Mr. Himachal Overall Winner three times, in 2018, 2020, and 2023, marking his dominance in the state-level competitions. His talent and dedication have also earned him international recognition, securing a spot in the Top-10 at Mr. World and Top-10 at Mr. Asia championships, making him one of the most respected athletes in the Indian bodybuilding community.</p>
                
            </div>
         </div>
        </div> 
    )
}