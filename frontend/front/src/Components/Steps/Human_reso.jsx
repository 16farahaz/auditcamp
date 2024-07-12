import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const  Human_reso= () => {
  const { auditData, setAuditData } = useContext(StepperContext);
  const textAreaRef1 = useRef(null); // Ref for textarea 1
  const textAreaRef2 = useRef(null); // Ref for textarea 2

  const textAreaRef3 = useRef(null); // Ref for textarea 3
  const textAreaRef4 = useRef(null); // Ref for textarea 4
  const textAreaRef5 = useRef(null); // Ref for textarea 5
  const textAreaRef6 = useRef(null); // Ref for textarea 4


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
  }, [auditData.definedText]); // Trigger effect when recommendations change

  useEffect(() => {
    if (textAreaRef2.current) {
      textAreaRef2.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef2.current.style.height = textAreaRef2.current.scrollHeight + 'px';
    }
  }, [auditData.hrText]); // Trigger effect when approvedText changes

  useEffect(() => {
    if (textAreaRef3.current) {
      textAreaRef3.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef3.current.style.height = textAreaRef3.current.scrollHeight + 'px';
    }
  }, [auditData.policyyText]); // Trigger effect when evidenceText changes


  useEffect(() => {
    if (textAreaRef4.current) {
      textAreaRef4.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef4.current.style.height = textAreaRef4.current.scrollHeight + 'px';
    }
  }, [auditData.trainingText]); // Trigger effect when evidenceText changes


  useEffect(() => {
    if (textAreaRef5.current) {
      textAreaRef5.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef5.current.style.height = textAreaRef5.current.scrollHeight + 'px';
    }
  }, [auditData.infooText]); // Trigger effect when evidenceText changes

  useEffect(() => {
    if (textAreaRef6.current) {
      textAreaRef6.current.style.height = 'auto'; // Reset height before calculating
      textAreaRef6.current.style.height = textAreaRef6.current.scrollHeight + 'px';
    }
  }, [auditData.mobileeText]); // Trigger effect when evidenceText changes



  return (
    <div className="bloc1">
      <div className='t1'>
        <h1> Human resource security</h1>
        <h3>Prior to employment</h3>
      </div>

      <div className='box1'>
        <label htmlFor="securityPoliciesExist">Defined policy for screening
        employees prior to employment ?</label>
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
        <label htmlFor="approved">Defined policy for HR terms and
                                  conditions of employment ?</label>
        <input
          type="checkbox"
          name="hr"
          id="hr"
          checked={auditData.hr || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="hrText"
          value={auditData.hrText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef2}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='t1'>
        <h3>During employment</h3>
      </div>
   

      <div className='box1'>
        <label htmlFor="body">Defined policy for management
        responsibilities ?</label>
        <input
          type="checkbox"
          name="policyy"
          id="policyy"
          checked={auditData.policyy || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="policyyText"
          value={auditData.policyyText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef3}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="evidence">Defined policy for information
                                  security awareness, education,
                                  and training ?</label>
        <input
          type="checkbox"
          name="training"
          id="training"
          checked={auditData.training || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="trainingText"
          value={auditData.trainingText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef4}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />


        <div className='box1'>
        <label htmlFor="info">Defined policy for
                              disciplinary process regarding
                              information security ?</label>
        <input
          type="checkbox"
          name="infoo"
          id="infoo"
          checked={auditData.infoo || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="infooText"
          value={auditData.infooText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef5}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      



<br />
      

        <div className='box1'>
        <label htmlFor="mobile">Defined policy for HR termination
                                or change-of-employment policy
                                regarding information security ?
        </label>
        <input
          type="checkbox"
          name="mobilee"
          id="mobilee"
          checked={auditData.mobilee || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="mobileeText"
          value={auditData.mobileeText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={textAreaRef6}
          placeholder='Any recommendations'
        ></textarea>
      </div>
         



    </div>
  );
};

export default Human_reso
