import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Crypto = () => {
  const { auditData, setAuditData } = useContext(StepperContext);
  const textAreaRef11 = useRef(null); // Ref for textarea 1
  const textAreaRef12 = useRef(null); // Ref for textarea 2


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
    if (textAreaRef11.current) {
      textAreaRef11.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef11.current.style.height = textAreaRef11.current.scrollHeight + 'px';
    }
  }, [auditData.recText]); // Trigger effect when recommendations change

  useEffect(() => {
    if (textAreaRef12.current) {
      textAreaRef12.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef12.current.style.height = textAreaRef12.current.scrollHeight + 'px';
    }
  }, [auditData.aText]); // Trigger effect when approvedText changes

 

  return (


    <div className="bloc1">
      <div className='t1'>
        <h1> Cryptography</h1>
        <h3>Cryptographic controls</h3>
      </div>

      <div className='box1'>
        <label htmlFor="rec">Defined policy for use of
        cryptographic controls ?</label>
        <input
          type="checkbox"
          name="rec"
          id="rec"
          checked={auditData.rec || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="recText"
          value={auditData.recText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef11}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="a">Defined policy for key
        management ?</label>
        <input
          type="checkbox"
          name="a"
          id="a"
          checked={auditData.a || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="aText"
          value={auditData.aText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef12}
          placeholder='Any recommendations'
        ></textarea>
      </div>

    </div>
  );
};

export default Crypto;

