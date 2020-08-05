import React from 'react';

function Card(props){
    return(
        <div className=" ba br4 ma2 dib tc">
        <img src={"https://robohash.org/" + props.id} alt="none"/>
        <h1>{props.name}</h1>
        <h3>{props.username}</h3>
        <p>{props.email}</p>
    </div>

    );
}

export default Card