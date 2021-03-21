import React, { useContext } from 'react';
import './DestinationDetails.css'
import { transportContext } from '../../App';
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DestinationDetails = () => {
    const [transport] = useContext(transportContext)
    const { image, type, person, price } = transport;
    console.log(transport);


    return (
        <div classNameName="d-flex justify-content-around">
            <div class="container">
                <div class="wrapper">
                    <h1> Route Description  😇 </h1>
                    <ul class="sessions">
                        <li>
                            <div class="time">09:00 AM</div>
                            <p>Dhanmondi 🤯🤯</p>
                        </li>
                        <li>
                            <div class="time">10:05 AM</div>
                            <p>Mirpur -11 🤷..</p>
                        </li>

                    </ul>
                    <div className='layout d-flex justify-content-around'>
                        <img src={image} alt="" />
                        <p>{type}</p>
                        <h5>{person}   <FontAwesomeIcon icon={faUsers} /></h5>
                        <p>{price}</p>
                    </div>
                    <div className='layout d-flex justify-content-around'>
                        <img src={image} alt="" />
                        <p>{type}</p>
                        <h5>{person}   <FontAwesomeIcon icon={faUsers} /></h5>
                        <p>{price}</p>
                    </div>
                    <div className='layout d-flex justify-content-around'>
                        <img src={image} alt="" />
                        <p>{type}</p>
                        <h5>{person}   <FontAwesomeIcon icon={faUsers} /></h5>
                        <p>{price}</p>
                    </div>
                </div>





            </div>



            <div className="mt-5 text-center">
                {/* <img src={map} alt="" /> */}
                <iframe title="gmap"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036944850868!2d90.3671072375646!3d23.74705004442601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1616230975848!5m2!1sen!2sbd" width="100%" height="450" style={{border:"0;"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>



    )
}

export default DestinationDetails;