import React from 'react';
import'./CardWrapper.css';

function CardWrapper(props) {
    return (
        <div className='card-container'>
            <h2>{props.monster.name}</h2>
            <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&Size=180X180`}/>
            <p>{props.monster.email}</p>
            
        </div>
    )
}

export default CardWrapper;
