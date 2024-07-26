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
  }, [auditData.at8]);

  useEffect(() => {
    resizeTextArea(textAreaRef2);
  }, [auditData.a10]);

  useEffect(() => {
    resizeTextArea(textAreaRef3);
  }, [auditData.a12]);

  useEffect(() => {
    resizeTextArea(textAreaRef4);
  }, [auditData.a14]);

  useEffect(() => {
    resizeTextArea(textAreaRef5);
  }, [auditData.a16]);

  useEffect(() => {
    resizeTextArea(textAreaRef6);
  }, [auditData.a18]);

  useEffect(() => {
    resizeTextArea(textAreaRef7);
  }, [auditData.a20]);

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
          name="at7"
          id="at7"
          checked={auditData.at7 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at8"
          value={auditData.at8 || ''}
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
          name="at9"
          id="at9"
          checked={auditData.at9 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt5"
          name="at10"
          value={auditData.at10 || ''}
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
          name="at11"
          id="at11"
          checked={auditData.at11 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt6"
          name="at12"
          value={auditData.at12 || ''}
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
          name="at13"
          id="at13"
          checked={auditData.at13 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at14"
          value={auditData.at14 || ''}
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
          name="at15"
          id="at15"
          checked={auditData.at15 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt5"
          name="at16"
          value={auditData.at16 || ''}
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
          name="at17"
          id="at17"
          checked={auditData.at17|| false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt6"
          name="at18"
          value={auditData.at18 || ''}
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
          name="at19"
          id="at19"
          checked={auditData.at19 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt7"
          name="at20"
          value={auditData.at20 || ''}
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
