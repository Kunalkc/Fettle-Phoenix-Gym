import React from "react";
import Imageslider from "./Imageslider"

export default function About(){
    return(
        <div id="ABOUT" className=" w-full h-screen flex flex-col gap-[4vw] items-center">
                 
                 <h1 className="my-15 text-red-700 text-2xl font-bold italic fade-in">ABOUT</h1>
                 <p className="text-white text-center w-[70vw] fade-in">Fettle Phoenix Gym in Sundernagar, owned by pro bodybuilder Nirit, is a premier fitness hub designed for those who are serious about strength, endurance, and transformation. Equipped with cutting-edge machines, free weights, and specialized training zones, the gym offers a dynamic space for beginners and professionals alike. With Nirits expertise and personalized coaching, members receive top-tier guidance to achieve peak performance, whether it’s muscle building, fat loss, or overall fitness. At Fettle Phoenix Gym, every workout is a step toward redefining strength and resilience.</p>
                
         <Imageslider
            ID = {1}
            width = {500}
            height = {300}
         />
        </div> 
    )
}