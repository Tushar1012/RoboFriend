import React from 'react';

import "./components/Card.css"

import 'tachyons';
import Cardlist from './Cardlist';
import { robots } from './Robots';
const Card =(props)=>{
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            
            <img alt='robot' src={`https://robohash.org/${props.id}?150X150`} />
            <div >
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
            </div>
        </div>

    );

}

export default Card;