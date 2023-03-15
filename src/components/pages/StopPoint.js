import React from 'react'
import { useState } from 'react';
import "./stoppoints.css"
import axios from 'axios';

export default function StopPoint() {
    // method setPoints initialize points with  returning data
    const [points, setPoints] = useState(null);
    //  create fetchData() function for extracting data from API.
    const fetchData = async () => {
        const response = await axios.get("https://api.tfl.gov.uk/StopPoint/Meta/Categories")
        setPoints(response.data)
    }

    return (
        // returned data in here
        <div className='wrapper'>
            <div className='main-points-title'>
                <h2>Learn about stopPoints</h2>
                <img src={require("./img/pit-stop.png")} width="50px" alt='pitstop' className='icon'></img>
            </div>
            <button className='btn' onClick={fetchData}> Get StopPoints</button>


            <ol className='points'>
                {points &&
                    points.map((point, index) => {
                        return (
                            <li className='point' key={index}> <span>{point.category}</span></li>
                        )

                    })
                }
            </ol>
        </div>
    )
}
