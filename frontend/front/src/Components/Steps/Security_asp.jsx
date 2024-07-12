import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling


const Security_asp= () => {
  const { auditData, setAuditData } = useContext(StepperContext);
  const textAreaRefs = useRef([]);
  
  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setAuditData({ ...auditData, [event.target.name]: event.target.checked });
  };

  // Function to handle textarea change
  const handleTextAreaChange = (event) => {
    setAuditData({ ...auditData, [event.target.name]: event.target.value });
  };

  // Auto resize textareas based on content
  useEffect(() => {
    textAreaRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height = 'auto'; // Reset height before calculating
        ref.style.height = ref.scrollHeight + 'px';
      }
    });
  }, [
    auditData.nuText,
    auditData.redText,
  
   

  
  ]);

  return (
    <div className="bloc1">

     <div className='t1'>
     <h1>Information security aspects of business continuity management
     </h1>
     <h3>Information security continuity</h3>
     </div>

     
      <div className='box1'>
        <label htmlFor="nu">Defined policy for information
        security continuity ?</label>
        <input
          type="checkbox"
          name="nu"
          id="nu"
          checked={auditData.nu || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="nuText"
          value={auditData.nuText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
     
      <div className='t1'>
     <h3>Redundancies</h3>
     </div>
      <div className='box1'>
        <label htmlFor="red">Defined policy for redundancies ?  </label>
        <input
          type="checkbox"
          name="red"
          id="red"
          checked={auditData.red || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="redText"
          value={auditData.redText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
     
     
    
     


    </div>
  );
};

export default Security_asp;












