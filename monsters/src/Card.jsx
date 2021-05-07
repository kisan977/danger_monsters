import React from 'react';
import'./Card.css';
import CardWrapper from './CardWrapper';

function Card(props) {
    return (
        <div className='card-list'>
            {
                props.monsters.map((monster)=>(
                    <CardWrapper key={monster.id}  monster={monster}/>
                ))
            }
           
            
        </div>
    )
}

export default Card;
