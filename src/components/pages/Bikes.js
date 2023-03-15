import React, { useState } from 'react'
import axios from 'axios';
import "./bikes.css"

export default function Bike() {
    // method setBikes initialize bikes with  returning data
    const [bikes, setBikes] = useState(null);
    //  create fetchData() function for extracting data from API.
    const fetchData = async () => {
        const response = await axios.get("https://api.tfl.gov.uk/BikePoint/")
        setBikes(response.data)
    }

    return (
        // returned data in here
        <div className='wrapper'>
            <div className='main-bike-title'>
                <h2>Get info about bikes</h2>
                <img src={require("./img/bicycle.png")} width="50px" alt='bike' className='icon'></img>
            </div>
            <button className='btn' onClick={fetchData}> Get street name</button>


            <ol className='bikes'>
                {bikes &&
                    bikes.map((bike, index) => {
                        const bikeStr = bike.commonName
                        // limited returning data 
                        while (index < 10) {
                            return (
                                <li className='bike' key={index}>Location is:<strong>{bikeStr}</strong></li>
                            )
                        }
                    })
                }
            </ol>
        </div>
    )
}
