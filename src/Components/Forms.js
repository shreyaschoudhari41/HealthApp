import React, { useState } from "react";


function Forms() {

  const [age, setage] = useState(0);
  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);
  const [BMR, setBMR] = useState(0);

  const changeAge = (event) => {
    setage(event.target.value);   
  };

  const changeHeight = (event) => {
    setheight(event.target.value);
  };

  const changeWeight = (event) => {
    setweight(event.target.value);           
  };

  const Malebmr = () => {
    let bmr = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
    setBMR(Math.round(bmr));
  };

  const Femalebmr = () => {
    let bmr = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
    setBMR(Math.round(bmr));
  };

  return (

    <>
      <h2 className="my-4 text-white text-center">Enter your details here</h2>
      <div className="container bg-light text-dark" style={{padding: "2rem",borderRadius: "1rem",}}>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Age</label>
            <input
              type="number"
              className="form-control"
              // id="exampleInputEmail1"
              // aria-describedby="emailHelp"
              placeholder="Enter your age"
              onChange={changeAge}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Weight</label>
            <input
              type="number"
              className="form-control"
              // id="exampleInputEmail1"
              // aria-describedby="emailHelp"
              placeholder="Enter your weight in kg"
              onChange={changeWeight}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Height</label>
            <input
              type="number"
              className="form-control"
              // id="exampleInputEmail1"
              // aria-describedby="emailHelp"
              placeholder="Enter your height in cm"
              onChange={changeHeight}
            />
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
            //   id="inlineRadio1"
              value="option1"
              onClick={Malebmr}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
            //   id="inlineRadio2"
              value="option2"
              onClick={Femalebmr}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Female
            </label>
          </div>

          {/* <div>
          <button type="button" class="btn btn-primary" onClick={clearForm}>Clear Form</button>
          </div> */}
          <div className="my-2">
          <button type="submit" className="btn btn-primary">Clear</button>
          </div>
        </form>
      </div>

      <div className="my-1 container" style={{padding : "0.5rem", color: "white"}}>
            <h4>{BMR> 0? `Your BMR is ${BMR}` :"" }</h4>
      </div>
      
    </>
  );
}

export default Forms;
