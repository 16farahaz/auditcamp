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
import "../index.css";






  function Audit() {
    const [currentStep, setCurrentStep] = useState(1);
    const [auditData, setAuditData]=useState('');
    const [finalData,setFinalData]=useState([]);
    const steps = [
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
            return <Securityp />;
          case 2:
            return <Securityo />;
          case 3:
            return <Human_reso />;
          case 4:
            return <Asset  />;
          case 5:
            return <Accesscontrol  />;
          case 6:
            return <Crypto  />;   
          case 7:
            return <Security_phy_env  />;
          case 8:
            return <Oper_security  />;
          case 9:
            return <Securityc  />;
          case 10:
            return <System  />;
          case 11:
            return <Suppliers  />;
          case 12:
            return <Securityi />;
          case 13:
            return <Security_asp  />;
          case 14:
            return <Compliance/>;
          case 15:
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
          currentStep={currentStep}
          steps={steps}
                 />
               )}
        </div>
    );





  }
export default Audit;