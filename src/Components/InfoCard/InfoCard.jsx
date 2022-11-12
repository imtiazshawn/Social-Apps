import React, {useState} from 'react';
import './InfoCard.css';
import {UilPen} from '@iconscout/react-unicons';
import {Link} from 'react-router-dom';


const InfoCard = () => {

    const [modelOpened, setModelOpened] =useState(false);

  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
                <UilPen width = '2rem' height = '1.2rem' onClick={()=>setModelOpened(true)}/>
            </div>
        </div>

        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>in Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>Chittagong</span>
        </div>
        <div className="info">
            <span>
                <b>Works At </b>
            </span>
            <span>React JS</span>
        </div>

        <Link to="/Auth" className='button logout-button'>Logout</Link>
        
    </div>
  )
}

export default InfoCard;