import React, { useState } from "react";

function CustomSelect(){
    const [val,setVal]=useState('')
    const data=[
        "Java",
        "JavaScript",
        "React js",
        "Python",
        "C",
        "C++",
    ]
    return(
        <div className="main">
            <input list="data" onChange={(e)=>setVal(e.target.value)} placeholder="Search" />
            <datalist id="data">
                {/* <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option> */}
                {data.map((op)=><option>{op}</option>)}
            </datalist>

            <h1>{val}</h1>
        </div>
    );
}
export default CustomSelect;