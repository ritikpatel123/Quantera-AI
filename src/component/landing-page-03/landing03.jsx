import React from 'react'
import { useState } from 'react'
import img1 from './assets/Group 3.png'
import img2 from './assets/top.png'
import './style.scss'
import Greenbtn from '../Green-Btn/Btn'





export default function Landing03() {

    const initialvalues = {
        email: ""
    }

    const [data, setData] = useState(initialvalues);

    const handleChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }

    const display = () => {
        console.log(data.email)
    }


    return (

        <div className='firstdiv'>
            <div className="downimg">
                <img src={img2} />
            </div>
            
            <h4>Try for free</h4>
            <div className="extrdiv">
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />


                <Greenbtn onClick={display} className="custom-btn" buttonText={"Get Free Premium Report !"} />

            </div>

        </div>
    )
}
