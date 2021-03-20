import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { transportContext } from '../../App';
import './Transport.css'


const Transport = (props) => {
    const {type,id,image} = props.transport
    const [transport, setTransport] = useContext(transportContext);
    
    console.log(id);
    return (
        <div className='main'>
            <Link to={`/destination/${type}`}>
                <div onClick={()=> setTransport(props.transport)} className="transport">
                    <img src={image} alt=""/>
                    <h5>{type}</h5>
                </div>
            </Link>
        </div>
    );
};

export default Transport;