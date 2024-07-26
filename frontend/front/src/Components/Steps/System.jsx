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
    auditData.at162,
    auditData.at164,
    auditData.at166,
    auditData.at168,
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>System acquisition, development and maintenance</h1>
        <h3>Security requirements of information systems</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at161">Defined policy for information security requirements analysis and specification?</label>
        <input
          type="checkbox"
          name="at161"
          id="at161"
          checked={auditData.at161 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at162"
          value={auditData.at162 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at163">Defined policy for securing application services on public networks?</label>
        <input
          type="checkbox"
          name="at163"
          id="at163"
          checked={auditData.at163 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at164"
          value={auditData.at164 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at165">Defined policy for protecting application service transactions?</label>
        <input
          type="checkbox"
          name="at165"
          id="at165"
          checked={auditData.at165 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at166"
          value={auditData.at166 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='t1'>
        <h3>Security in development and support processes</h3>
      </div>
      <div className='box1'>
        <label htmlFor="at167">Defined policy for in-house development?</label>
        <input
          type="checkbox"
          name="at167"
          id="at167"
          checked={auditData.at167 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at168"
          value={auditData.at168 || ''}
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
