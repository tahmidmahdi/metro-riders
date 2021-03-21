import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { routeContext, transportContext } from '../../App';
// import { transportContext } from '../../App';
import './Destination.css'
// import map from '../../images/Map.png'
// import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};




const Destination = () => {
  const [transport] = useContext(transportContext);
  const { type } = transport;



  const [routeDetails, setRouteDetails] = useContext(routeContext);
  console.log('route Details', routeDetails);



  const [destination, setDestination] = useState({})
  const { from, to } = destination;
  console.log(from, to);

  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const onSubmit = data => {


    console.log(data)
    setDestination(data);
    setRouteDetails(data);
    history.push(`/${type}/details`)


  };

  console.log(watch("example")); // watch input value by passing the name of it
  console.log('state', destination);

  return (



    <div className="d-flex justify-content-around mt-5 destination">

      <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="from" style={{ fontWeight: "700" }}>From</label>
        <input name="from" ref={register({ required: true })} placeholder='Journey Begins From...' />
        {errors.from && <span className='error'>From required</span>}
        <br />

        <label htmlFor="to" style={{ fontWeight: "700" }}>To</label>
        <input name="to" ref={register({ required: true })} placeholder='Journey Ends To...' />
        {errors.to && <span className='error'>To is required</span>}
        <br /> <br />
        <label for="Date" style={{ fontWeight: "700" }}>Travel Date:</label>
        <input type="date" id="birthday" name="Date"></input>
        <br /> <br />
        <input className="bg-warning" style={{ fontWeight: "700" }} type="submit" />
      </form>
      <div>
        {/* <img src={map} alt=""/> */}
        <LoadScript
          googleMapsApiKey="YOUR_API_KEY"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>

      </div>



    </div>

  );


};

export default Destination;