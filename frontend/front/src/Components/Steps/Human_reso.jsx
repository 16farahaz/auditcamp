import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Human_reso = () => {
  const { auditData, setAuditData } = useContext(StepperContext);
  const textAreaRef1 = useRef(null); // Ref for textarea 1
  const textAreaRef2 = useRef(null); // Ref for textarea 2
  const textAreaRef3 = useRef(null); // Ref for textarea 3
  const textAreaRef4 = useRef(null); // Ref for textarea 4
  const textAreaRef5 = useRef(null); // Ref for textarea 5
  const textAreaRef6 = useRef(null); // Ref for textarea 6

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
  }, [auditData.at22]);

  useEffect(() => {
    if (textAreaRef2.current) {
      textAreaRef2.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef2.current.style.height = textAreaRef2.current.scrollHeight + 'px';
    }
  }, [auditData.at24]);

  useEffect(() => {
    if (textAreaRef3.current) {
      textAreaRef3.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef3.current.style.height = textAreaRef3.current.scrollHeight + 'px';
    }
  }, [auditData.at26]);

  useEffect(() => {
    if (textAreaRef4.current) {
      textAreaRef4.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef4.current.style.height = textAreaRef4.current.scrollHeight + 'px';
    }
  }, [auditData.at28]);

  useEffect(() => {
    if (textAreaRef5.current) {
      textAreaRef5.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef5.current.style.height = textAreaRef5.current.scrollHeight + 'px';
    }
  }, [auditData.at30]);

  useEffect(() => {
    if (textAreaRef6.current) {
      textAreaRef6.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef6.current.style.height = textAreaRef6.current.scrollHeight + 'px';
    }
  }, [auditData.at32]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Human Resource Security</h1>
        <h3>Prior to Employment</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at21">Defined policy for screening employees prior to employment?</label>
        <input
          type="checkbox"
          name="at21"
          id="at21"
          checked={auditData.at21 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at22"
          name="at22"
          value={auditData.at22 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef1}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at23">Defined policy for HR terms and conditions of employment?</label>
        <input
          type="checkbox"
          name="at23"
          id="at23"
          checked={auditData.at23 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at24"
          name="at24"
          value={auditData.at24 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef2}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='t1'>
        <h3>During Employment</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at25">Defined policy for management responsibilities?</label>
        <input
          type="checkbox"
          name="at25"
          id="at25"
          checked={auditData.at25 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at26"
          name="at26"
          value={auditData.at26 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef3}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at27">Defined policy for information security awareness, education, and training?</label>
        <input
          type="checkbox"
          name="at27"
          id="at27"
          checked={auditData.at27 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at28"
          name="at28"
          value={auditData.at28 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef4}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at29">Defined policy for disciplinary process regarding information security?</label>
        <input
          type="checkbox"
          name="at29"
          id="at29"
          checked={auditData.at29 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at30"
          name="at30"
          value={auditData.at30 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef5}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at31">Defined policy for HR termination or change-of-employment policy regarding information security?</label>
        <input
          type="checkbox"
          name="at31"
          id="at31"
          checked={auditData.at31 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at32"
          name="at32"
          value={auditData.at32 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef6}
          placeholder='Any recommendations'
        ></textarea>
      </div>
    </div>
  );
};

export default Human_reso;
