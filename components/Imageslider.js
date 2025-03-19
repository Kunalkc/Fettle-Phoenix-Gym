import React from "react";
import imgdata from "./images"

export default function slider(props){
    let imgarr = []
    for(let i=0;i<imgdata.length;i++ ){
        if(props.ID === imgdata[i].ID){
            imgarr = imgdata[i]
        }
    }
       
     
}