import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Securityp = () => {
  const { auditData, setAuditData } = useContext(StepperContext);
  const textAreaRef1 = useRef(null); // Ref for textarea 1
  const textAreaRef2 = useRef(null); // Ref for textarea 2
  const textAreaRef3 = useRef(null); // Ref for textarea 3

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setAuditData({ ...auditData, [event.target.name]: event.target.checked });
  };

  // Function to handle textarea change
  const handleTextAreaChange = (event) => {
    setAuditData({ ...auditData, [event.target.name]: event.target.value });
  };

  // Auto resize textarea based on content
  useEffect(() => {
    if (textAreaRef1.current) {
      textAreaRef1.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef1.current.style.height = textAreaRef1.current.scrollHeight + 'px';
    }
  }, [auditData.at2]); // Trigger effect when recommendations change

  useEffect(() => {
    if (textAreaRef2.current) {
      textAreaRef2.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef2.current.style.height = textAreaRef2.current.scrollHeight + 'px';
    }
  }, [auditData.at4]); // Trigger effect when approvedText changes

  useEffect(() => {
    if (textAreaRef3.current) {
      textAreaRef3.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef3.current.style.height = textAreaRef3.current.scrollHeight + 'px';
    }
  }, [auditData.at6]); // Trigger effect when evidenceText changes

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1> Information Security Policies</h1>
        <h3>Management direction for information security</h3>
      </div>

      <div className='box1'>
        <label htmlFor="securityPoliciesExist">Security Policies Exist?</label>
        <input
          type="checkbox"
          name="at1"
          id="at1"
          checked={auditData.at1 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="at2"
          value={auditData.at2 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef1}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="approved">Verify All Policies Approved by Management?</label>
        <input
          type="checkbox"
          name="at3"
          id="at3"
          checked={auditData.at3 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="at4"
          value={auditData.at4 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef2}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at5">Evidence of Compliance?</label>
        <input
          type="checkbox"
          name="at5"
          id="at5"
          checked={auditData.at5 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="at6"
          value={auditData.at6 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef3}
          placeholder='Any recommendations'
        ></textarea>
      </div>
    </div>
  );
};

export default Securityp;
