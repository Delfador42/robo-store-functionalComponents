import React from "react"
function search(){

    return(
        <input placeholder="Search Robots" className=" no-borHiLight ts-sans bg-light-gray w-100 bb" type="search" onChange={(event)=>{
            
            console.log(event.target.value)
        }}/>
    );
}

export default search