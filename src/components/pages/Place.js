import React, { useState } from 'react'
import axios from 'axios';
import "./place.css"

export default function Main() {
    // method setPlaces initialize places with  returning data
    const [places, setPlaces] = useState(null);
    //  create fetchData() function for extracting data from API.
    const fetchData = async () => {
        const response = await axios.get("https://api.tfl.gov.uk/Place/Meta/PlaceTypes")
        setPlaces(response.data)
    }

    return (
        // returned data in here
        <div className='wrapper'>
            <div className='main-place-title'>
                <h2>Learn about places</h2>
                <img src={require("./img/map-pin.png")} width="50px" alt='places' className='icon'></img>
            </div>
            <button className='btn-places' onClick={fetchData}> Get places</button>


            <ol className='places'>
                {places &&
                    places.map((place, index) => {
                        // limited returning data
                        while (index < 10) {
                            return (
                                <li className='place' key={index}> <span>{place}</span></li>
                            )
                        }
                    })
                }
            </ol>
        </div>
    )
}
