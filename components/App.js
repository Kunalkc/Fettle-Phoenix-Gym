import React from "react";
import Header from "./Header"
import Landing from "./Landing";
import Gyms from "./Gyms"
import About from "./About"

export default function App(){

    const mainRef = React.useRef(); 
    const [gym , setgym] = React.useState(0)

    function changegym(number){
        console.log(number)
        setgym(number)
    }

    return(
        <div className="w-full"
        ref={mainRef}
        >
            <Header/>
            <main>
                <Landing/>
                <About/>
                <Gyms
                   opengym = {gym}
                   changegym = {changegym}
                />
                <div id="MEM" className=" w-full h-screen flex flex-col items-center justify-center gap-5 fade-in">
           
                   <h1 className="mt-15 text-red-700 text-2xl font-bold italic fade-in">MEMBERSHIPS</h1>
                <table className="table-fixed w-5/6 bg-black p-10 rounded-lg h-2/3 shadow-md shadow-red-500 overflow-hidden ">
                     <thead >
                       <tr className="bg-gray-900 rounded-lg border-b-1 border-red-600">
                        <th></th>
                         <th className="text-center text-white py-5">BOYS</th>
                         <th className="text-center text-white py-5">GIRLS</th>
                         <th className="text-center text-white py-5">COUPLE</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                        <th className="text-center text-white border-r-1 border-red-600">Registration</th>
                         <td className="text-center text-white">200</td>
                         <td className="text-center text-white">100</td>
                         <td className="text-center text-white">200</td>
                       </tr>
                       <tr>
                       <th className="text-center text-white border-r-1 border-red-600">Monthy</th>
                         <td className="text-center text-white">1000</td>
                         <td className="text-center text-white">1000</td>
                         <td className="text-center text-white">1800</td>
                       </tr>
                       <tr>
                       <th className="text-center text-white border-r-1 border-red-600">3 Months</th>
                          <td className="text-center text-white">2700</td>
                         <td className="text-center text-white">2700</td>
                         <td className="text-center text-white">4800</td>
                       </tr>
                       <tr>
                       <th className="text-center text-white border-r-1 border-red-600">6 Months</th>
                          <td className="text-center text-white">2700</td>
                         <td className="text-center text-white"> 2700</td>
                         <td className="text-center text-white">4800</td>
                       </tr>
                       <tr>
                       <th className="text-center text-white border-r-1 border-red-600">1 Year</th>
                          <td className="text-center text-white">7200</td>
                         <td className="text-center text-white">7200</td>
                         <td className="text-center text-white">14000</td>
                       </tr>
                     </tbody>
                   </table>
                  
                </div>
                <div id="CONTACT" className="w-full h-auto pt-10 pb-10 bg-black flex flex-col items-center md:flex-row gap-3.5 md:items-start justify-around">

                 <div className="flex flex-col gap-1 items-center justify-center">
                      <h2 className="text-red-500 italic text-center">Fettle Phoenix Gym 1</h2>
                      <address className="text-white text-center">Pungh, near Amit Emporium, Sundar Nagar,<br/> Mandi, Himachal Pradesh<br/> 175018</address>
                      <a  href="https://maps.app.goo.gl/rbDCkWGKr8FbvwDw6"><img src="./img/googlemaps.png" width={30} height={30}/></a>
                 </div>
                 <div className="flex flex-col gap-1 items-center justify-center">
                      <h2 className="text-red-500 italic text-center" >Fettle Phoenix Gym 2</h2>
                      <address className="text-white text-center">Near Dental collage, Sundernagar, <br/> Mandi,Himachal Pradesh<br/> 175018</address>
                      <a  href="https://maps.app.goo.gl/rbDCkWGKr8FbvwDw6"><img src="./img/googlemaps.png" width={30} height={30}/></a>
                 </div>
                 <div className="flex flex-col gap-1 items-center justify-center">
                      <h2 className="text-red-500 italic text-center" >Contact details</h2>
                      <a className="text-white" href="mailto:example@email.com">example@email.com</a>
                      <a  className="text-white" href="tel:+911234567890">+91 12345 67890</a>
                 </div>
                </div>
            </main>
        </div>
    )
}