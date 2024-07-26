import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Compliance = () => {
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
    auditData.at178,
    auditData.at180,
    auditData.at182,
    auditData.at184,
    auditData.at186,
    auditData.at188,
    auditData.at190,
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Compliance</h1>
        <h3>Compliance with legal and contractual requirements</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at177">Defined policy for identification of applicable legislation and contractual requirements?</label>
        <input
          type="checkbox"
          name="at177"
          id="at177"
          checked={auditData.at177 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at178"
          value={auditData.at178 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at179">Defined policy for intellectual property rights?</label>
        <input
          type="checkbox"
          name="at179"
          id="at179"
          checked={auditData.at179 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at180"
          value={auditData.at180 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at181">Defined policy for protection of records?</label>
        <input
          type="checkbox"
          name="at181"
          id="at181"
          checked={auditData.at181 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at182"
          value={auditData.at182 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at183">Defined policy for privacy and protection of personally identifiable information?</label>
        <input
          type="checkbox"
          name="at183"
          id="at183"
          checked={auditData.at183 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at184"
          value={auditData.at184 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[3] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at185">Defined policy for regulation of cryptographic control?</label>
        <input
          type="checkbox"
          name="at185"
          id="at185"
          checked={auditData.at185 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at186"
          value={auditData.at186 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[4] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='t1'>
        <h3>Independent review of information security</h3>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at187">Defined policy for compliance with security policies and standards?</label>
        <input
          type="checkbox"
          name="at187"
          id="at187"
          checked={auditData.at187 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at188"
          value={auditData.at188 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at189">Defined policy for technical compliance review?</label>
        <input
          type="checkbox"
          name="at189"
          id="at189"
          checked={auditData.at189 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at190"
          value={auditData.at190 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[6] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
    </div>
  );
};

export default Compliance;
