import React from 'react';

import icon from "./images/location-icon.png"


export default function Card (props){

return (
    <div className='container'>
        <img src={require(`./images/${props.img}`)} className="card--img" ></img>
        <div className='main-part'>
                <div className='location--atributes'>
                    <div className='location--icon--box'> 
                        <img src={icon} className=" location--icon" alt="location icon"></img>
                    </div>
                    <div className='location--box'> 
                        <h4 className="location">{props.location}</h4>
                    </div>
                    <div className='url--box'> 
                        <a href={props.googleMapsUrl} target={'blank'}>View on Google Maps</a>
                    </div>
                </div>
                <div className='description'>
                    <h1 className='paragraph--title'>{props.title}</h1>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="description--paragraph">{props.description}</p>
                </div>
        </div>
    </div>
)

}