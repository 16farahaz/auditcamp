import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Securityc = () => {
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
    textAreaRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.height = 'auto'; // Reset height before calculating
        ref.style.height = ref.scrollHeight + 'px';
      }
    });
  }, [
    auditData.at146,
    auditData.at148,
    auditData.at150,
    auditData.at152,
    auditData.at154,
    auditData.at156,
    auditData.at158,
    auditData.at160,
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Communications security</h1>
        <h3>Network security management</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at145">Defined policy for network controls?</label>
        <input
          type="checkbox"
          name="at145"
          id="at145"
          checked={auditData.at145 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at146"
          value={auditData.at146 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at147">Defined policy for security of network services?</label>
        <input
          type="checkbox"
          name="at147"
          id="at147"
          checked={auditData.at147 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at148"
          value={auditData.at148 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at149">Defined policy for segregation in networks?</label>
        <input
          type="checkbox"
          name="at149"
          id="at149"
          checked={auditData.at149 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at150"
          value={auditData.at150 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='t1'>
        <h3>Information transfer</h3>
      </div>
      <div className='box1'>
        <label htmlFor="at151">Defined policy for information transfer policies and procedures?</label>
        <input
          type="checkbox"
          name="at151"
          id="at151"
          checked={auditData.at151 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at152"
          value={auditData.at152 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[3] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at153">Defined policy for agreements on information transfer?</label>
        <input
          type="checkbox"
          name="at153"
          id="at153"
          checked={auditData.at153 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at154"
          value={auditData.at154 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[4] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at155">Defined policy for electronic messaging?</label>
        <input
          type="checkbox"
          name="at155"
          id="at155"
          checked={auditData.at155 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at156"
          value={auditData.at156 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at157">Defined policy for confidentiality or non-disclosure agreements?</label>
        <input
          type="checkbox"
          name="at157"
          id="at157"
          checked={auditData.at157 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at158"
          value={auditData.at158 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[6] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at159">Defined policy for system acquisition, development, and maintenance?</label>
        <input
          type="checkbox"
          name="at159"
          id="at159"
          checked={auditData.at159 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at160"
          value={auditData.at160 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[7] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
    </div>
  );
};

export default Securityc;
