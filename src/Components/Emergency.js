import React from 'react'
import { Link } from 'react-router-dom'

function Emergency() {


    const openNews = ()=>{
        window.open("https://www.who.int/emergencies/overview","_blank")
    }
  return (
    <>
      <div className="container my-3">
      <h6 className="text-center text-light" style={{fontSize:"2rem", marginBottom:"1.5rem"}}>WHO Health Emergency Programme</h6>
        <div className="card">
          <div className="" style={{margin:"1rem"}}>
            <h4 className="card-header" style={{fontSize:"1.6rem", fontFamily:"cursive"}}>Who are we?</h4>
            <p className="card-text" style={{fontSize:"1.2rem", fontFamily:"cursive", backgroundColor:"rgb(255 236 171 / 50%)", padding: "1rem"}}>
              {" "}
              WHO’s Health Emergencies Programme works with all countries and partners to ensure the world is better prepared for all-hazards health emergencies that threaten global health security. WHO works around the world to research, prevent and manage epidemic and pandemic-prone diseases; to strengthen and expand systems to rapidly detect, investigate and assess potential threats to public health; and to respond immediately and systematically to manage acute emergencies.
            </p>
          </div>

          <div className="" style={{margin:"1rem"}}>
            <h4 className="card-header" style={{fontSize:"1.6rem", fontFamily:"cursive"}}>Health emergency preparedness</h4>
            <p className="card-text" style={{fontSize:"1.2rem", fontFamily:"cursive", backgroundColor:"rgb(255 236 171 / 50%)", padding: "1rem"}}>
              {" "}
              All countries face risks and potential health threats from an increasing range of hazards, including infectious diseases, chemical and radio nuclear incidents, food contamination, and threats associated with climate change including extreme weather events and deforestation. WHO supports Member States to evaluate, develop and strengthen core capacities laid out in the International Health Regulations, to detect, assess, notify and report events and to respond promptly and effectively to public health emergencies.
            </p>
          </div>

          <div className="" style={{margin:"1rem"}}>
            <h4 className="card-header" style={{fontSize:"1.6rem", fontFamily:"cursive"}}>Health emergency prevention</h4>
            <p className="card-text" style={{fontSize:"1.2rem", fontFamily:"cursive", backgroundColor:"rgb(255 236 171 / 50%)", padding: "1rem"}}>
              {" "}
              WHO works to prevent and lessen the impact of epidemics and pandemics by consolidating scientific evidence from a wide range of disciplines and sectors, translating them into comprehensive and scalable interventions for priority diseases.
            </p>
          </div>
        </div>

        <Link className="btn my-4 btn-lg btn-block" style={{backgroundColor:"white", color:"black"}} onClick={openNews} pathname="https://www.who.int/emergencies/overview" role="button">Know More</Link>
        
      </div>
    </>
  )
}

export default Emergency