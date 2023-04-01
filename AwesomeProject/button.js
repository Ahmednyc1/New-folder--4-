import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function clickME(){
    alert('You Clicked me!');

}

export default function button(){
return(
    
    <div>
    <button OnClick={clickME}>
     
    Button
    
    </button>



    </div>
)

}