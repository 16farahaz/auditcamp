import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Securityo = () => {
  const { auditData, setAuditData } = useContext(StepperContext);
  const textAreaRef1 = useRef(null); // Ref for textarea 1
  const textAreaRef2 = useRef(null); // Ref for textarea 2
  const textAreaRef3 = useRef(null); // Ref for textarea 3
  const textAreaRef4 = useRef(null); // Ref for textarea 4
  const textAreaRef5 = useRef(null); // Ref for textarea 5
  const textAreaRef6 = useRef(null); // Ref for textarea 6
  const textAreaRef7 = useRef(null); // Ref for textarea 7

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setAuditData({ ...auditData, [event.target.name]: event.target.checked });
  };

  // Function to handle textarea change
  const handleTextAreaChange = (event) => {
    setAuditData({ ...auditData, [event.target.name]: event.target.value });
  };

  // Auto resize textarea based on content
  const resizeTextArea = (ref) => {
    if (ref.current) {
      ref.current.style.height = 'auto'; // Reset height before calculating
      ref.current.style.height = ref.current.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    resizeTextArea(textAreaRef1);
  }, [auditData.definedText]);

  useEffect(() => {
    resizeTextArea(textAreaRef2);
  }, [auditData.segText]);

  useEffect(() => {
    resizeTextArea(textAreaRef3);
  }, [auditData.bodyText]);

  useEffect(() => {
    resizeTextArea(textAreaRef4);
  }, [auditData.contactText]);

  useEffect(() => {
    resizeTextArea(textAreaRef5);
  }, [auditData.infoText]);

  useEffect(() => {
    resizeTextArea(textAreaRef6);
  }, [auditData.mobileText]);

  useEffect(() => {
    resizeTextArea(textAreaRef7);
  }, [auditData.policyText]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Organization of information security</h1>
        <h3>Information security roles and responsibilities</h3>
      </div>

      <div className='box1'>
        <label htmlFor="securityPoliciesExist">Roles and responsibilities defined?</label>
        <input
          type="checkbox"
          name="defined"
          id="defined"
          checked={auditData.defined || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="definedText"
          value={auditData.definedText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef1}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="approved">Segregation of duties defined?</label>
        <input
          type="checkbox"
          name="seg"
          id="seg"
          checked={auditData.seg || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="segText"
          value={auditData.segText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef2}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="body">Verification body / authority contacted for compliance verification?</label>
        <input
          type="checkbox"
          name="body"
          id="body"
          checked={auditData.body || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="bodyText"
          value={auditData.bodyText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef3}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="evidence">Establish contact with special interest groups regarding compliance?</label>
        <input
          type="checkbox"
          name="contact"
          id="contact"
          checked={auditData.contact || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="contactText"
          value={auditData.contactText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef4}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="info">Evidence of information security in project management?</label>
        <input
          type="checkbox"
          name="info"
          id="info"
          checked={auditData.info || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt5"
          name="infoText"
          value={auditData.infoText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef5}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='t1'>
        <h3>Mobile devices and teleworking</h3>
      </div>

      <div className='box1'>
        <label htmlFor="mobile">Defined policy for mobile devices?</label>
        <input
          type="checkbox"
          name="mobile"
          id="mobile"
          checked={auditData.mobile || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt6"
          name="mobileText"
          value={auditData.mobileText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef6}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="remotely">Defined policy for working remotely?</label>
        <input
          type="checkbox"
          name="policy"
          id="policy"
          checked={auditData.policy || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt7"
          name="policyText"
          value={auditData.policyText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef7}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
    </div>
  );
};

export default Securityo;
