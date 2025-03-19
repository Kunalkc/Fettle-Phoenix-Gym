import React from "react";

export default function header(){
   
    const [barcolor, setBarcolor] = React.useState(0);

    React.useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY >= 70) {
              setBarcolor(1);
            } else {
              setBarcolor(0);
            }
          }
      
          window.addEventListener("scroll", handleScroll);
          
          // Cleanup the event listener on unmount
          return () => {
            window.removeEventListener("scroll", handleScroll);
          }
    },[]);
        
    

    return(
        <header className={`z-1000 fixed w-full top-0 left-0 flex flex-row justify-between items-center rounded-b-md transition duration-300 ${barcolor ? "bg-[#1f1b1b]" : "bg-transparent"}`}>
           <img className="pl-10 pt-3" src="/img/logo.png" width={150} height={150}></img>

           <nav>
              <ul className="pr-20 flex flex-row flex-nowrap gap-[2vw] text-white text-lg italic">
                <li><a className="hover:underline" href="#ABOUT">ABOUT</a></li>
                <li><a className="hover:underline" href="#GYMS">GYMS</a></li>
                <li><a className="hover:underline" href="#MEM">MEMBERSHIPS</a></li>
                <li><a className="hover:underline" href="#CONTACT">CONTACT</a></li>
              </ul>
           </nav>

          { barcolor ? <a className="fixed right-10 bottom-6" href="#"><img src="/img/backtotop.png" alt="Back to Top" width={30} height={30} /></a> : <></>}
        </header>
    )
}