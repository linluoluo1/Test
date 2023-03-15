import React, { useState } from 'react'
import axios from 'axios';
import "./vehicles.css"


export default function Vehicle() {
    // method setVehicles initialize vehicles with  returning data
    const [vehicles, setVehicles] = useState(null);
    //  create fetchData() function for extracting data from API.
    const fetchData = async () => {
        const response = await axios.get("https://api.tfl.gov.uk/AccidentStats/0x000007D9")
        setVehicles(response.data)
    }

    return (
        // returned data in here
        <div className='wrapper'>
            <div className='main-vehicle-title'>
                <h2>Info about accidents</h2>
                <img src={require("./img/car.png")} width="50px" alt='vehicle'></img>
            </div>
            <button className='btn-vehicle' onClick={fetchData}> Get info</button>


            <ol className='vehicles'>
                {vehicles &&
                    vehicles.map((vehicle, index) => {
                        const vehStation = vehicle.severity;
                        const vehId = vehicle.location;

                        // limited returning data 
                        while (index < 10) {
                            return (
                                <li className='vehicle' key={index}>Accident at <strong>{vehId}</strong> was <span>{vehStation}</span></li>
                            )
                        }
                    })
                }
            </ol>
        </div>
    )
}