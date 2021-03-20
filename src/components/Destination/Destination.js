import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { transportContext } from '../../App';
import './Destination.css'
import map from '../../images/Map.png'
import { Link } from 'react-router-dom';



const Destination = () => {
  // const [transport, setTransport] = useContext(transportContext);
  // console.log('transport', transport);
  const {type}= useParams()
  console.log('params', type);

  const[destination, setDestination] =  useState({})
    const {from, to} = destination;
    console.log(from, to);

    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => {


      console.log(data)
      setDestination(data)
      history.push(`/${type}/details`)
      
      
      };
  
    console.log(watch("example")); // watch input value by passing the name of it
    console.log('state', destination);
  
    return (
     
     <div className="d-flex justify-content-around mt-5">
          
          <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="from">From</label>
            <input name="from" ref={register({ required: true })} />
            {errors.from && <span className='error'>From required</span>}
            <br/>

            <label htmlFor="to">To</label>
            <input name="to" ref={register({ required: true })} />
            {errors.to && <span className='error'>To is required</span>}
            <br/>
           <input style={{backgroundColor:'salmon'}} type="submit" />
          </form>
          <div>
              {/* <img src={map} alt=""/> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036944850868!2d90.3671072375646!3d23.74705004442601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1616230975848!5m2!1sen!2sbd" width="800px" height="550" style={{border:"0;"}} allowfullscreen="" loading="lazy"></iframe>
          </div>
         
          
          
     </div>
    );
  
    
};

export default Destination;