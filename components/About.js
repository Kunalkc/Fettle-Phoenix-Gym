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
                 <p className="text-white text-center w-[70vw] fade-in">Fettle Phoenix Gym in Sundernagar, owned by pro bodybuilder Nirit, is a premier fitness hub designed for those who are serious about strength, endurance, and transformation. Equipped with cutting-edge machines, free weights, and specialized training zones, the gym offers a dynamic space for beginners and professionals alike. With Nirits expertise and personalized coaching, members receive top-tier guidance to achieve peak performance, whether it’s muscle building, fat loss, or overall fitness. At Fettle Phoenix Gym, every workout is a step toward redefining strength and resilience.</p>
                
         

         <div className="mt-15 p-15 w-full h-auto px-7 flex flex-col md:flex-row items-center justify-center fade-in bg-black rounded-3xl">
            <Imageslider
             ID = {1}
             width = {width2}
             height = {300}
           />

            <div className=" w-auto h-auto flex flex-col gap-[4vw] items-center justify-center" >
                 <h1 className=" text-red-700 text-2xl font-bold italic fade-in text-center mt-15">ABOUT NIRIT</h1>
                 <p className="text-white text-center w-auto md:w-[70vw] fade-in p-7">Fettle Phoenix Gym in Sundernagar, owned by pro bodybuilder Nirit, is a premier fitness hub designed for those who are serious about strength, endurance, and transformation. Equipped with cutting-edge machines, free weights, and specialized training zones, the gym offers a dynamic space for beginners and professionals alike. With Nirits expertise and personalized coaching, members receive top-tier guidance to achieve peak performance, whether it’s muscle building, fat loss, or overall fitness. At Fettle Phoenix Gym, every workout is a step toward redefining strength and resilience.</p>
                
            </div>
         </div>
        </div> 
    )
}