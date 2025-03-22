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
    let currdesc = imgarr.img[currentimgno-1].tiledesc

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

    function buttonpress(number){
        if(number){
    // Right button
            setCurrentimgno((prevState)=>{
                if(prevState < imgarr.img.length){
                    console.log(prevState + 1)
                    return prevState + 1
                }
                else{
                    console.log(1)
                    return 1
                }
            })
        }else{
    // Left button
                setCurrentimgno((prevState)=>{
                    if(prevState > 1){
                        console.log(prevState - 1)
                       return prevState - 1
                    }
                    else{
                       console.log(imgarr.img.length)
                       return imgarr.img.length
                   }
                  })
        }
    }

    React.useEffect(()=>{
       
        currimgurl = imgarr.img[currentimgno-1].url
        currdesc = imgarr.img[currentimgno-1].tiledesc

    },[currentimgno])
    
    console.log(currimgurl)
    return (
        <div style={{ width: props.width, height: props.height }} className="relative shadow-md shadow-red-500  flex flex-row justify-center items-end rounded-lg" >
        
      

        <button onClick={()=>buttonpress(0)}><img src="./img/leftarrow.png" alt="left arrow" width={20} height={20} className="absolute left-0 top-1/2 z-10 hover:scale-125"/></button>
        <button onClick={()=>buttonpress(1)}><img src="./img/rightarrow.png" alt="right arrow" width={20} height={20} className="absolute right-0 top-1/2 z-10 hover:scale-125"/></button>
         <img src={currimgurl} className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"/>
        
        <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden flex flex-row justify-center items-center">
         <p className= " text-white text-[200%] p-4 bg-black/50  rounded-lg" >{currdesc}</p>
        </div>

        <div className="w-auto h-[10%] rounded-lg bg-black flex flex-row justify-around items-center z-10">
         {imgselector}
        </div>

        </div>
    )
     
}