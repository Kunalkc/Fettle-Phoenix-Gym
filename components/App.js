import React from "react";
import Header from "./Header"
import Landing from "./Landing";
import Gyms from "./Gyms"
import About from "./About"

export default function App(){

    const mainRef = React.useRef(); 

    return(
        <div className="w-full"
        ref={mainRef}
        >
            <Header/>
            <main>
                <Landing/>
                <About/>
                <Gyms/>
                <div id="MEM" className=" w-full h-screen">
           
                  
                </div>
                <div id="CONTACT" className="w-full h-[50vh] bg-black flex flex-row gap-3.5 items-center justify-around">

                 <div className="flex flex-col gap-1 items-center justify-center">
                      <h2 className="text-red-500 italic text-center">Fettle Phoenix Gym 1</h2>
                      <address className="text-white">Pungh, near Amit Emporium, Sundar Nagar,<br/> Mandi, Himachal Pradesh<br/> 175018</address>
                      <a className="self-start" href="https://maps.app.goo.gl/rbDCkWGKr8FbvwDw6"><img src="./img/googlemaps.png" width={30} height={30}/></a>
                 </div>
                 <div className="flex flex-col gap-1 items-center justify-center">
                      <h2 className="text-red-500 italic text-center" >Fettle Phoenix Gym 2</h2>
                      <address className="text-white">Near Dental collage, Sundernagar, <br/> Mandi,Himachal Pradesh<br/> 175018</address>
                      <a className="self-start" href="https://maps.app.goo.gl/rbDCkWGKr8FbvwDw6"><img src="./img/googlemaps.png" width={30} height={30}/></a>
                 </div>
                
                </div>
            </main>
        </div>
    )
}