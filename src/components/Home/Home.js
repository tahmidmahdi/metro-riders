import React, { useEffect, useState } from 'react';
import background from "../../images/Bg.png"
import './Home.css'
import data from '../../data/data.json'
import Transport from '../Transport/Transport';


const Home = () => {
    const[transports, setTransport] =  useState([])
    useEffect(()=>{
        setTransport(data);
    },[])
    console.log(transports);
    return (
    
        <div>
            <div className='bg'><img className="bg-img img-fluid " src={background} alt=""/></div>
            <div className='centered'>
                {
                    transports.map(transport => <Transport transport={transport} key={transport.key}></Transport>)
                }
            </div>

        </div>




    );
};

export default Home;