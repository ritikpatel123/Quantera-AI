import React from 'react'
import { useState } from "react";
import img1 from './image/topwithoutlogo.png'
import './style.scss'
import img2 from './image/tickwrong.png'
import img3 from './image/player.png'
import img4 from './image/Screen Shot 2023-05-02 at 17.41.00.png'
import img5 from './image/Gmail.png'
import img6 from './image/adblock.png'
import img7 from './image/Light_toggle.png'
import img8 from './image/wavebgremove.png'
import img9 from './image/Logo.png'
import Greenbtn from '../Green-Btn/Btn'
import img10 from './image/Group 3.png'
import img11 from './image/Group 4.png'


export default function Landing() {

  // storing input data

  const initialValues = {
    email: ""
    
  };
  const [data, setData] = useState(initialValues);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const display = () => { console.log(data); }
// console.log(data)




  return (

    <div id='main'>

      {/* first div */}
      <div id='first-div'>
        <img src={img1}></img>
      </div>

      {/* first div close */}

      {/* extra div */}

      <div className="extradiv">
        <h className='heading'>Try Free for 45 days</h>
        <div className="search">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />

          <div className="btn">
            <Greenbtn onClick={display} className="custom-btn" buttonText={"Get Free Premium Report !"} />
          </div>
        </div>


        <div className="extrainner">
          <div className="dataone">
            <h1>120</h1>
            <p>Trusted</p>
          </div>
          <div className="datatwo">
            <h1>120</h1>
            <p>Trusted</p>
          </div>
          <div className="datathree">
            <h1>120</h1>
            <p>Trusted</p>
          </div>

        </div>

        <div className="innerpara">
          <h4>"These graph have been giving clarity like no other tool out there" </h4>
          <p>~Finance Professional</p>
        </div>

      </div>


      {/* extra div end */}

      {/* second div */}

      <div className='second-div'>

        <div className='second-left-div'>

          <img src={img10}></img>
        </div>


        <div className='second-right-div'>
          <div className='second-top-right-div'></div>
          <h1>Compare <br></br>companies and their <br></br> performence</h1>
          <p>Compare any company with any other company on all metric available</p>



        </div>

      </div>


      {/* second div close */}


      {/* third div */}
      <div className='third-div'>
        <div className='third-inner-div'></div>
        <div className='data'>
          <h1>Listen to earning, and their call transcript</h1>
          <p>Listen to earning available directly on the website</p>
        </div>
        <div className="btn">
          <Greenbtn
            buttonText={"Get Started"}
          />
        </div>


        <img src={img3}></img>

        <div className='bottom-data'>Informed</div>


      </div>

      {/* third div close */}



      {/* fourth div */}

      <div className='fourth-div'>
        <div className='main'>
          <h1>Earnings</h1>
        </div>


        <div className='fourth-mid-data'>

          <div className='left'>
            <p>Simple Synced to your <br></br> Calender</p>

          </div>


          <div className='right'>
            <img src={img4}></img>
          </div>

        </div>

        {/* <div className='fourth-last-data'>

          <div className='pic'>
            <img src={img5}></img>
          </div>
          <div className='right-data'>
            <h1>Delevered to  your inbox within miniutes</h1>
            <p>So you can act as quickly as possible</p>
          </div>
        </div> */}




      </div>

      {/* fourth div close */}



      {/* fifth div */}
      <div className='fifth-div'>
        <div className='fifth-div-down'>
          <h1>Full Cashflow Overview of your favrouit names</h1>
          <p>So how cash flow and debit play an important role in company growth and scale</p>



        </div>
        <div className='fifth-div-up'>
          <div className='fifth-inner-div'></div>
          <img src={img11}></img>

        </div>

      </div>

      {/* fifth div close */}




      {/* sixth div */}

      <div id='sixth-div'>
        <div className='inner'>
          <div className='sixth-inner-div'></div>
          <div className='main-sixth'>
            <p>Full historical data of  any stock</p>
          </div>
          <img src={img7}></img>
          <div className="btn">
            <Greenbtn
              buttonText={"Get Started"}
            />
          </div>

        </div>
        <img src={img8}></img>

      </div>

      {/* sixth div close */}



      {/* seven div */}
      <div className='seven-div'>
        <div className='seven-upper-div '></div>
        <div className='main-head-seven'><h1>Superinvestors</h1></div>


        <div className='inner-data-seven'>
          <div className='left-inner-seven'>
            <p>See what institution are doing with their money and watch the market mover </p>
          </div>
          <div className='right-inner-seven'>
            <p style={{ background: "#7FCBC4", width: "60%", margginBottom: "1px" }}>Dr Michel Burry</p>
            <p style={{ background: "#7FCBC4", width: "71%", marginLeft: "10rem" }}>Bills and melinda gates foundation</p>
            <p style={{ background: "#7FCBC4", width: "37%", marginLeft: "3rem" }}>Bill Ackman</p>
            <p style={{ background: "#7FCBC4", width: "35%", marginLeft: "13rem" }}>Tiger Global</p>
            <p style={{ background: "#7FCBC4", width: "49%", marginLeft: "6rem" }}>Carl lcahn and more</p>
          </div>
        </div>

        <div className='right-bottom-box'></div>


      </div>

      {/* seven div close */}



      {/* eightdiv */}

      <div className='eight-div'>
        <div className='inner-div'>
          <h1>Downlaod and share any chart , PDF or Permalink</h1>

          <p>Let people into your custom chart and reports</p>

          <div className="search">
            <input
              placeholder='Email'
              value={data.email}
              name="email"
              id="email2"
              autoComplete='email'
              onChange={handleChange}
            ></input>

            <div className="btn">
              <Greenbtn onClick={display} className="custom-btn" buttonText={"Get Free Premium Report !"} />
            </div>
          </div>



          <img src={img9}></img>
        </div>
      </div>

    </div>

  )
}
