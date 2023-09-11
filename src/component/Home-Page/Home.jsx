import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import img3 from "./image/img3.png";
import img4 from "./image/Discover_features.png";
import img5 from "./image/main.png";
import img6 from "./image/Group 21.png";
import img7 from "./image/Group 22.png";
import img8 from "./image/Group 23.png";
import img9 from "./image/Group 24.png";
import img10 from "./image/Group 25.png";
import img11 from "./image/Group 26.png";
import img12 from "./image/Empowering.png";
import img13 from "./image/2.png";
import img14 from "./image/3.png";
import img15 from "./image/detail.png";
import img17 from "./image/Untitled_Artwork_4 (1).png";
import GreenBtn from "../Green-Btn/Btn";
import Footer from "../Footer/footer";
import "./Home.scss";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(email); // This will log the current state of the email input field
  };

  return (
    <div className="main">
      <div className="div-1" style={{ backgroundImage: `url(${img17})` }}>
        <NavBar />
        <div className="Top-div">
          <img src={img12} alt="" />
        </div>
        <div className="mid-div">
          <h4 className="mid-div-h1-1">
            Eliminate hours wasted finding, researching, visualizing and
            transforming data <br /> using the power of AI.
          </h4>
          <br />
          <br />
          <h4 className="mid-div-h1__2">
            Receive a free premium report by signing up
          </h4>
        </div>
        <div className="email-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
          <GreenBtn
            buttonText={"Get Premium Report"}
            onClick={handleButtonClick}
          />
        </div>

        <img className="mainUI" src={img5} height={900} width={1100} alt="" />
      </div>

      <div className="div-2">
        <div className="top-div">
          <h1>In partnership with</h1>
        </div>
        <div className="mid-div">
          <h1>
            We have saved countless hours! Our insights are shaping how
            investors can get the most by <br /> saving them time.
          </h1>
        </div>
        <div className="bottom-div">
          <div className="bottom-first">
            <div className="first-bottom-first">
              <h1 className="first-bottom_h1">2</h1>
              <img src={img1} alt="" />
            </div>
            <div className="second-bottom-first">
              <h1>
                Clicks away are all your <br /> answers.
              </h1>
            </div>
          </div>
          <div className="bottom-second">
            <div className="first-bottom-second">
              <h1>2385</h1>
              <img src={img2} alt="" />
            </div>
            <div className="second-bottom-second">
              <h1>
                Publically traded <br /> companies.
              </h1>
            </div>
          </div>
          <div className="bottom-third">
            <div className="first-bottom-third">
              <h1>8x</h1>
              <img src={img3} alt="" />{" "}
            </div>
            <div className="second-bottom-third">
              <h1>
                Speeden your research <br /> by many folds.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="div-3">
        <div className="top-div">
          <h1>
            “This tool is going to level the finance space for <br />
            everyone.”
          </h1>
        </div>
        <div className="bottom-div">
          <h1>- private equity advisor</h1>
        </div>
      </div>
      <div className="div-4">
        <div className="top-div"></div>
        <div className="mid-div"></div>
        <img src={img4} alt="" />
      </div>
      <div className="div-5">
        <div className="top-div">
          <h1>…features that work for you.</h1>
        </div>
        <div className="bottom-div">
          <div className="bottom-first-div">
            <div className="bottom-first-div-top">
              <img src={img6} alt="" height={53} width={53} />
              <h1>
                Compare company <br />
                performance
              </h1>
              <h5>From any company with another</h5>
            </div>
            <div className="bottom-first-div-bottom">
              <img src={img9} alt="" height={53} width={53} />
              <h1>
                Superinvestors and <br /> portfolio tracking
              </h1>
              <h5>
                Track Institutional investors that invest over <br /> $100M in a
                stock or own more than 5% of a <br /> company
              </h5>
            </div>
            <div />
          </div>
          <div className="bottom-second-div">
            <div className="bottom-second-div-top">
              <img src={img8} alt="" height={53} width={53} />
              <h1>
                Share reports via <br /> permalink
              </h1>
              <h5>
                Share your custom reports to be viewed by <br /> others
              </h5>
            </div>
            <div className="bottom-second-div-bottom">
              <img src={img7} alt="" height={53} width={53} />
              <h1>
                Full historical <br /> performance
              </h1>
              <h5>Access all past data</h5>
            </div>
          </div>
          <div className="bottom-third-div">
            <div className="bottom-third-div-top">
              <img src={img10} alt="" height={53} width={53} />
              <h1>
                Listen to quaterly <br /> earnings
              </h1>
              <h5>Tune in to live earnings and call transcript</h5>
            </div>
            <div className="bottom-third-div-bottom">
              <img src={img11} alt="" height={53} width={53} />
              <h1>Straight to inbox</h1>
              <h5>Get notified by all the stocks that you follow</h5>
            </div>
          </div>
        </div>
        <div className="last-div">
          <h3>…and much more</h3>
        </div>
      </div>
      <div className="div-6">
        <div className="top-div">
          <div className="first-top-div">
            <h1>Streamline your workflow. </h1>
            <h6>A platform that will smoothly integrate in your workstream.</h6>
          </div>
          <div className="second-top-div">
            <h5>★★★★★</h5>
            <h5>
              The platform has been able to make <br /> insights the easiest
              thing to get.
            </h5>
            <h6>Investment fund manager</h6>
          </div>
        </div>
        <div className="bottom-div">
          <img src={img13} alt="" />
        </div>
      </div>
      <div className="div-7">
        <div className="top-div">
          <img src={img14} alt="" height={180} width={600} />
        </div>
        <div className="bottom-div">
          <img src={img15} alt="" />
        </div>
      </div>
      <div className="div-8">
        <div className="top-div">
          <h1>
            Are you a professional or a student <br /> looking for bulk
            licenses?
          </h1>
          <h6 style={{ marginBottom: 20 }}>
            Students must be enrolled in a university program and <br />
            be able to show proof of enrolment.
          </h6>
          <GreenBtn buttonText={"Get in touch →"} />
        </div>
        <div className="bottom-div">
          <div className="first-bottom-div">
            <h2>Frequently asked questions?</h2>
            <h6>
              We assembled some of the most common <br /> questions
            </h6>
          </div>
          <div className="second-bottom-div">
            <details>
              <summary role="button" tabindex="0">
                Do you use my data for anything?
              </summary>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </details>
            <details>
              <summary role="button" tabindex="0">
                Can I cancel my subscription anytime?
              </summary>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </details>
            <details>
              <summary role="button" tabindex="0">
                I would like to request a feature!
              </summary>
              <p>
                Of couse, we are always happy to hear from people who <br />{" "}
                have ideas! Send them along to contact@quantera.com.
              </p>
            </details>
            <details>
              <summary role="button" tabindex="0">
                When does my discount apply?
              </summary>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </details>
          </div>
        </div>
      </div>
      <div className="div-9">
        <Footer />
      </div>
    </div>
  );
}
