import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Security_asp = () => {
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
    auditData.at174,
    auditData.at176,
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Information security aspects of business continuity management</h1>
        <h3>Information security continuity</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at173">Defined policy for information security continuity?</label>
        <input
          type="checkbox"
          name="at173"
          id="at173"
          checked={auditData.at173 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at174"
          value={auditData.at174 || ''}
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
        <label htmlFor="at175">Defined policy for redundancies?</label>
        <input
          type="checkbox"
          name="at175"
          id="at175"
          checked={auditData.at175 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at176"
          value={auditData.at176 || ''}
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
