import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling


const System = () => {
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
    auditData.anaText,
    auditData.tionText,
    auditData.ineText,



    auditData.houText,
   

  
  ]);

  return (
    <div className="bloc1">

     <div className='t1'>
     <h1>System acquisition, development and maintenance</h1>
      <h3>Security requirements of information systems</h3>
     </div>

     
      <div className='box1'>
        <label htmlFor="ana">Defined policy for information
                            security requirements analysis and
                            specification ?</label>
        <input
          type="checkbox"
          name="ana"
          id="ana"
          checked={auditData.ana || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="anaText"
          value={auditData.netText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="tion">Defined policy for securing
                            application services on public
                            networks ?</label>
        <input
          type="checkbox"
          name="tion"
          id="tion"
          checked={auditData.tion || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="tionText"
          value={auditData.tionText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="ine">Defined policy for protecting
                            application service transactions ?</label>
        <input
          type="checkbox"
          name="ine"
          id="ine"
          checked={auditData.ine || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="ineText"
          value={auditData.ineText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>


















      <br />
      <div className='t1'>
      <h3>Security in development and support processes
      </h3>
      </div>
      <div className='box1'>
        <label htmlFor="hou">Defined policy for in-house
                            development ?</label>
        <input
          type="checkbox"
          name="hou"
          id="hou"
          checked={auditData.hou || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="houText"
          value={auditData.houText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[3] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
     
    
     


    </div>
  );
};

export default System;












