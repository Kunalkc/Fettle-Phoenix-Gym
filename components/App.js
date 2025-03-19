import React from "react";
import Header from "./Header"

export default function App(){

    const mainRef = React.useRef(); 

    return(
        <div className="w-full"
        ref={mainRef}
        >
            <Header/>
            <main>
                <div className=" relative w-full h-screen bg-[url(/img/cover.png)] object-cover bg-center">
                
                <h1 className="absolute bottom-100 right-50 text-red-700 text-5xl font-bold italic drop-shadow-md fade-in-static">FETTLE PHOENIX GYM</h1>
                
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-[rgb(31,27,27)]"></div>
                </div>
                <div id="ABOUT" className=" w-full h-screen flex flex-col gap-[4vw] items-center">
                 
                 <h1 className="my-15 text-red-700 text-2xl font-bold italic fade-in">ABOUT</h1>
                 <p className="text-white text-center w-[70vw] fade-in">Fettle Phoenix Gym in Sundernagar, owned by pro bodybuilder Nirit, is a premier fitness hub designed for those who are serious about strength, endurance, and transformation. Equipped with cutting-edge machines, free weights, and specialized training zones, the gym offers a dynamic space for beginners and professionals alike. With Nirits expertise and personalized coaching, members receive top-tier guidance to achieve peak performance, whether it’s muscle building, fat loss, or overall fitness. At Fettle Phoenix Gym, every workout is a step toward redefining strength and resilience.</p>
                
                </div>  
                <div id="GYMS" className=" w-full h-screen">
           
                
                </div>
                <div id="MEM" className=" w-full h-screen">
           
                
                </div>
                <div id="CONTACT" className=" w-full h-screen">
           
                
                </div>
            </main>
        </div>
    )
}