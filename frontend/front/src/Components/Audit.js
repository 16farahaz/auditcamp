import React from "react"
import { useState } from "react";
import { StepperContext } from "./contexts/ContextStepper";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import Securityp from "./Steps/Securityp";
import Securityo from "./Steps/Securityo";
import Human_reso from "./Steps/Human_reso";
import Asset from "./Steps/Asset";
import Accesscontrol from "./Steps/Accesscontrol";
import Crypto from "./Steps/Crypto";
import Security_phy_env from "./Steps/Security_phy_env";
import Oper_security from "./Steps/Oper_security";
import Securityc from "./Steps/Securityc";
import System from "./Steps/System";
import Suppliers from "./Steps/Suppliers";
import Securityi from "./Steps/Securityi";
import Security_asp from "./Steps/Security_asp";
import Compliance from "./Steps/Compliance";
import Cong from "./Steps/Cong";
import Company from "./Steps/Company";
import "../index.css";
import axios from "axios";






  function Audit() {
    const [currentStep, setCurrentStep] = useState(1);
    const [auditData, setAuditData]=useState('');
    const [finalData,setFinalData]=useState([]);
    const steps = [
       "Company",
        "Policies",
        "Organization ",
        "HR ",
        "Asset ",
        "Access ",
        "Cryptography",
        "Areas",
        "Operations ",
        "Protection ",
        "development ",
        "Suppliers ",
        "incident management",
        "business ",
        "Compliance",
        "Final",
      ];

      const displayStep = (step) => {
         switch (step) {
          case 1:
            return <Company />;
          case 2:
            return <Securityp />;
          case 3:
            return <Securityo />;
          case 4:
            return <Human_reso />;
          case 5:
            return <Asset  />;
          case 6:
            return <Accesscontrol  />;
          case 7:
            return <Crypto  />;   
          case 8:
            return <Security_phy_env  />;
          case 9:
            return <Oper_security  />;
          case 10:
            return <Securityc  />;
          case 11:
            return <System  />;
          case 12:
            return <Suppliers  />;
          case 13:
            return <Securityi />;
          case 14:
            return <Security_asp  />;
          case 15:
            return <Compliance/>;
          case 16:
            return <Cong/>;
          default:
        } 
      };
const handleClick = (direction) => {
  let newStep = currentStep;

  // Determine the new step based on direction
  direction === "next" ? newStep++ : newStep--;

  // Check if newStep is within bounds
  if (newStep > 0 && newStep <= (steps ? steps.length : 0)) {
    setCurrentStep(newStep);
  }
}


const handleConfirm = async () => {
  console.log('Handling confirm...');
  console.log('Audit Data:', auditData); // Log auditData to check its content
  try {
    const response = await axios.post('http://localhost:5000/audit', auditData);
    console.log('Server Response:', response.data); // Log the response data
    if (response.status === 201) { // Ensure the status code indicates success
      alert('Audit submitted successfully!');
      return true; // Indicate success
    } else {
      alert('Unexpected response status: ' + response.status);
      return false; // Indicate failure
    }
  } catch (error) {
    console.error('Error submitting audit:', error);
    alert('Error submitting audit');
    return false; // Indicate failure
  }
};
    return(

       

        <div className=" container2 md:w-screen  shadow-xl rounded-2xl pb-2 bg-white">
         {/*stepper*/}
         <Stepper steps={steps} currentStep={currentStep}/>
         <div className="container horizontal mt-5"></div>
         {/*display compounents*/}
         {/* so now let's call the displaysteps so we can start callecting data from compounets to other using context et comme parametre on utilise currentstep pour les données de compounent */}
       <div className="my-10 p-10">
       <StepperContext.Provider value={{
                    auditData,
                    setAuditData,
                    finalData,
                    setFinalData

         }}> 
          {displayStep(currentStep)}
         </StepperContext.Provider>
       </div>





           {/* navigation button */}
           {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          handleConfirm={handleConfirm}
          currentStep={currentStep}
          steps={steps}
          
                 />
               )}
        </div>
    );





  }
export default Audit;