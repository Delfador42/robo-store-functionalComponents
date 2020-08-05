import React from 'react'
import roboList from './robots'
import Card from './Card'
function CardList(props){
    return(
        <div className="tc ">

       {roboList.map((robot)=>{
           return(
                    <Card
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    username={robot.username}
                    email={robot.email}
                />
               
           );
       })}

       </div>
    );
}

export default CardList