import React from "react";
import Imageslider from "./Imageslider"

export default function Supps(props){

    const [width1 , setWidth1] = React.useState(window.innerWidth * 0.8)
  
       
        React.useEffect(() => {
            const handleResize = () => {
                setWidth1(window.innerWidth * 0.7)
           
            };
    
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

    return(
        <div id="GYMS" className=" w-full h-auto flex flex-col justify-center items-center gap-10 fade-in">
                 

             <h1 className="mt-25 text-red-700 text-2xl font-bold italic fade-in">SUPPLIMENTS</h1>    
           
              

            <div className="w-auto h-auto bg-black flex flex-col gap-5 items-center justify-center rounded-xl">
                <Imageslider
                             ID = {5}
                             width = {width1}
                             height = {300}
                />

               <div style={{ width: `${width1}px` }} className="  w-auto  h-auto ">
                        <h1 className="text-red-500 italic font-bold text-center">Right place to get your supplements</h1>
                        <p className="text-white text-center p-5">Fuel Your Workout with the Right Supplements Boost your fitness journey with high-quality supplements designed to support muscle growth, endurance, and recovery. Whether you're looking to build muscle, burn fat, or enhance performance, the right supplements can help you reach your goals faster.</p>
                    </div> 

                
            </div>
        </div> 
    )
}