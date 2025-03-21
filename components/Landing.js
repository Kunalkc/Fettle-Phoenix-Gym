import React from "react";

export default function Landing(){

    return(
    <div className=" relative w-full h-screen bg-[url(/img/cover.png)] object-cover bg-center bg-no-repeat">

        <div className="absolute bottom-65 right-50 flex flex-col gap-1.5 items-center justify-center fade-in-static">        
        <img className="pl-10 pt-3" src="/img/gymlogo.png" width={200} height={180}></img>        
        <h1 className=" text-red-700 text-5xl font-bold italic drop-shadow-md ">FETTLE PHOENIX GYM</h1>
        <img className="pl-10 pt-3" src="/img/barbel.png" width={200} height={180}></img>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-[rgb(31,27,27)]"></div>
    </div>
)
    
}