import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Asset = () => {
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
    auditData.at34,
    auditData.at36,
    auditData.at38,
    auditData.at40,
    auditData.at42,
    auditData.at44,
    auditData.at46,
    auditData.at48,
    auditData.at50,
    auditData.at52,
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Asset Management</h1>
        <h3>Responsibilities for Assets</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at33">Complete inventory list of assets?</label>
        <input
          type="checkbox"
          name="at33"
          id="at33"
          checked={auditData.at33 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at34"
          name="at34"
          value={auditData.at34 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at35">Complete ownership list of assets?</label>
        <input
          type="checkbox"
          name="at35"
          id="at35"
          checked={auditData.at35 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at36"
          name="at36"
          value={auditData.at36 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at37">Defined "acceptable use" of assets policy?</label>
        <input
          type="checkbox"
          name="at37"
          id="at37"
          checked={auditData.at37 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at38"
          name="at38"
          value={auditData.at38 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at39">Defined return of assets policy?</label>
        <input
          type="checkbox"
          name="at39"
          id="at39"
          checked={auditData.at39 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at40"
          name="at40"
          value={auditData.at40 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[3] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='t1'>
        <h3>Information Classification</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at41">Defined policy for classification of information?</label>
        <input
          type="checkbox"
          name="at41"
          id="at41"
          checked={auditData.at41 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at42"
          name="at42"
          value={auditData.at42 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[4] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at43">Defined policy for labeling information?</label>
        <input
          type="checkbox"
          name="at43"
          id="at43"
          checked={auditData.at43 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at44"
          name="at44"
          value={auditData.at44 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at45">Defined policy for handling of assets?</label>
        <input
          type="checkbox"
          name="at45"
          id="at45"
          checked={auditData.at45 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at46"
          name="at46"
          value={auditData.at46 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[6] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='t1'>
        <h3>Media Handling</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at47">Defined policy for management of removable media?</label>
        <input
          type="checkbox"
          name="at47"
          id="at47"
          checked={auditData.at47 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at48"
          name="at48"
          value={auditData.at48 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[7] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at49">Defined policy for disposal of media?</label>
        <input
          type="checkbox"
          name="at49"
          id="at49"
          checked={auditData.at49 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at50"
          name="at50"
          value={auditData.at50 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[8] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at51">Defined policy for physical media transfer?</label>
        <input
          type="checkbox"
          name="at51"
          id="at51"
          checked={auditData.at51 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at52"
          name="at52"
          value={auditData.at52 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[9] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
    </div>
  );
};

export default Asset;
