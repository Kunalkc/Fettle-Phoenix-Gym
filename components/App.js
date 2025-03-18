import React from "react";

export default function App(){
    return(
        <div className="w-full">
            <header className="fixed w-full top-0 left-0 bg-transparent flex flex-row justify-between items-center">
                    <img className="pl-10 pt-3" src="/img/logo.png" width={150} height={150}></img>

                    <nav>
                        <ul className="pr-10 flex flex-row flex-nowrap gap-[1vw] text-white">
                            <li><a className="hover:underline" href="">About</a></li>
                            <li><a className="hover:underline" href="">Gyms</a></li>
                            <li><a className="hover:underline" href="">Membership</a></li>
                            <li><a className="hover:underline" href="">Contact</a></li>
                        </ul>
                    </nav>
            </header>
            <main>
                <div className=" w-full h-screen bg-[url(/img/cover.png)] object-cover bg-center">
           
                
                </div>
            </main>
        </div>
    )
}