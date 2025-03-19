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
           
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-[rgb(31,27,27)]"></div>
                </div>
                <div id="ABOUT" className=" w-full h-screen">
           
                
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