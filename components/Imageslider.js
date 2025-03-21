import React from "react";
import imgdata from "./images"

export default function slider(props){
    let imgarr 
    for(let i=0;i<imgdata.length;i++ ){
        if(props.ID === imgdata[i].ID){
            imgarr = imgdata[i]
        }
    }

    const [currentimgno , setCurrentimgno] = React.useState(1)
    let currimgurl = imgarr.img[currentimgno-1].url

    const imgselector = imgarr.img.map((item)=>{
        return(
            <div onClick={()=>selectimg(item.ID)} className={`w-[10px] h-[10px] mx-4 rounded-xl ${currentimgno === item.ID ? "bg-red-500" : "bg-white"}`}>
            </div>
        )
    })

    function selectimg(number){
        console.log(number)
        setCurrentimgno(number)
    }

    React.useEffect(()=>{
       
        currimgurl = imgarr.img[currentimgno-1].url

    },[currentimgno])
    
    console.log(currimgurl)
    return (
        <div style={{ width: props.width, height: props.height }} className="relative shadow-md shadow-red-500 overflow-hidden flex flex-row justify-center items-end" >
 
         <img src={currimgurl} className="absolute top-0 left-0 w-full h-full object-cover"/>

        <div className="   w-auto h-[10%] rounded-lg bg-black flex flex-row justify-around items-center z-10">
         {imgselector}
        </div>

        </div>
    )
     
}