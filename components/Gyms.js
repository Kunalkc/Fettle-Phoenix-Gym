import React from "react";
import Imageslider from "./Imageslider"

export default function gyms(props){

    const [width1 , setWidth1] = React.useState(window.innerWidth * 0.8)
  
       
        React.useEffect(() => {
            const handleResize = () => {
                setWidth1(window.innerWidth * 0.8)
           
            };
    
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

    return(
        <div id="GYMS" className=" w-full h-auto flex flex-col justify-center items-center gap-10 fade-in">
                 

             <h1 className="mt-25 text-red-700 text-2xl font-bold italic fade-in">GYMS</h1>    
            <nav className="bg-black  px-3 w-[170px] h-[40px] flex flex-row items-center justify-around rounded-xl gap-3">
                    <p onClick={()=>props.changegym(0)} className={` text-nowrap font-bold ${props.opengym ? "text-white" : "text-red-500 "}`}>
                        GYM 1.0 
                    </p>
                    <p onClick={()=>props.changegym(1)} className={` text-nowrap font-bold ${!props.opengym ? "text-white" : "text-red-500 "}`}>
                        GYM 2.0 
                    </p>
            </nav>
              

            <div className="w-auto h-auto bg-black flex flex-col gap-5 items-center justify-center rounded-xl">
                {props.opengym ? 
                <Imageslider
                ID = {4}
                width = {width1}
                height = {300}
             />
                : <Imageslider
                             ID = {3}
                             width = {width1}
                             height = {300}
                />}

                {
                    props.opengym ? <div style={{ width: `${width1}px` }} className="h-auto ">
                        <h1 className="text-red-500 italic font-bold text-center">FETTLE PHOENIX GYM 2.0</h1>
                        <p className="text-white text-center p-5">Fettle Phoenix Gym 2 marks the next chapter in our commitment to premium fitness, bringing top-tier equipment, expert trainers, and a high-energy atmosphere to a brand-new location. Designed to elevate your workouts, this facility offers expanded training zones, innovative programs, and a supportive community to help you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, Fettle Phoenix Gym 2 provides the perfect space to push your limits and redefine your strength.</p>
                    </div> : <div style={{ width: `${width1}px` }} className="  w-auto  h-auto ">
                        <h1 className="text-red-500 italic font-bold text-center">FETTLE PHOENIX GYM 1.0</h1>
                        <p className="text-white text-center p-5">Fettle Phoenix Gym set the foundation for a new era of fitness, combining cutting-edge equipment, expert coaching, and a motivating community. As our first branch, it became a hub for fitness enthusiasts seeking personalized training, dynamic workout programs, and a results-driven approach. With a strong reputation for excellence, it continues to inspire members to push their limits and achieve their goals, paving the way for the expansion of the Fettle Phoenix legacy.</p>
                    </div> 

                }
            </div>
        </div> 
    )
}