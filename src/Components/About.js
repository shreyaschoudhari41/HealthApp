import React from "react";

function About() {
  return (
    <>
      <div className="container my-3">
      <h5 className="text-center text-light" style={{fontSize:"3rem"}}>About Us...</h5>
        <div className="card">
          <div className="card-body" style={{borderBottom: "1px solid rgba(0,0,0,.125)"}}>
            <h4 className="card-header" style={{fontSize:"2rem", fontFamily:"cursive"}}>Who are we?</h4>
            <p className="card-text" style={{fontSize:"1.2rem", fontFamily:"cursive", backgroundColor:"rgb(255 236 171 / 50%)"}}>
              {" "}
              We are a startup currently focussing on the health care sector. We
              are team of 200 people. We are partnered top news and blog
              websites to provide you the latest trends and information in the
              field of health care. We are constantly developing ourselves to meet the demand of the users
            </p>
          </div>

          <div className="card-header">
            <h4 className="card-header" style={{fontSize:"2rem", fontFamily:"cursive"}}>Our Aim</h4>
            <p className="card-text" style={{fontSize:"1.2rem", fontFamily:"cursive", backgroundColor:"rgb(255 236 171 / 50%)"}}>
              {" "}
              Our main aim is to make users life easier by providing them nessesary information about the current scenario with the help of top quality news and blogs. We aim to reach 1 million daily users on our website till the end of 2023. Along with this we are also targeting to provide best health facilities by connecting top-quality doctors directly with the patients.
            </p>
          </div>          
        </div>
      </div>
    </>
  );
}

export default About;
