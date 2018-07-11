import React from 'react'; 



const teamNfo = (props) => (
    <div className="articleTeamHeader">  
        <div className="leftt" style={{background: `url('/images/teams/${props.team.logo}')`}}> 

        </div> 
        <div className="right"> 
            <div> <span>{props.team.city} {props.team.name}  </span> </div>
        </div>
        <div> <strong>W{props.team.stats[0].wins}-L{props.team.stats[0].defeats} </strong> </div>
    </div>
)


export default teamNfo;