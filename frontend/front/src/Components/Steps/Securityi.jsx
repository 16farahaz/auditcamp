import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling


const Securityi = () => {
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
    auditData.emText,
  
   

  
  ]);

  return (
    <div className="bloc1">

     <div className='t1'>
     <h1>Information security incident management</h1>
   
     </div>

     
      <div className='box1'>
        <label htmlFor="em">Defined policy for information
                            security management ?  </label>
        <input
          type="checkbox"
          name="em"
          id="em"
          checked={auditData.em || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="emText"
          value={auditData.emText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
     
     
    
     


    </div>
  );
};

export default Securityi;












