import React from "react";

export default function App(){
    return(
        <div className="w-full">
            <header className="fixed w-full top-0 left-0 bg-black flex flex-row justify-between items-center">
                    <img className="px-2" src="/img/logo.png" width={50} height={50}></img>

                    <nav>
                        <ul className="px-2 flex flex-row flex-nowrap gap-[1vw] text-white">
                            <li><a className="hover:bg-amber-300" href="">About</a></li>
                            <li><a href="">Gyms</a></li>
                            <li><a href="">Membership</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
            </header>
        </div>
    )
}