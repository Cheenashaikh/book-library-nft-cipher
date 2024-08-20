import React from "react";
import "./Servuce.css";
import Mission from "./mission";
import Vision from "./vision";
import Values from "./values";
import Growth from "./growth";
import ServicsFooter from "./servics-footer";


function Service() {
  return (

    <div className="servics">
      <div className="container">
        <div className="aboutHeading">
          <h2>Who are we?</h2>
        </div>
      </div>
      <div className="container">
        <div className="para">
          <p>Founded in 2018, Excersys is a full-service technology company that has been at the forefront of creating game-changing, modern
            technology products with the latest technologies and techniques for clients across the world. The success of our business mainly lies in
            building a team of A-players, who work together and build together, and who crave perfection in everything they produce for our elite
            clients.</p>
        </div>
      </div>
      <Mission />
      <Vision/>
      <Values/>
      <Growth/>
      <ServicsFooter/>


    </div>

  );
}
export default Service;

