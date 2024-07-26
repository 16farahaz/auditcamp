import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Oper_security = () => {
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
    auditData.at116,
    auditData.at118,
    auditData.at120,
    auditData.at122,
    auditData.at124,
    auditData.at126,
    auditData.at128,
    auditData.at130,
    auditData.at132,
    auditData.at134,
    auditData.at136,
    auditData.at138,
    auditData.at140,
    auditData.at142,
    auditData.at144,
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Operations security</h1>
        <h3>Operational procedures and responsibilities</h3>
      </div>

      <div className='box1'>
        <label htmlFor="pp">Defined policy for documented operating procedures?</label>
        <input
          type="checkbox"
          name="at115"
          id="at115"
          checked={auditData.at115 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="at116"
          value={auditData.at116 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="acc">Defined policy for change management?</label>
        <input
          type="checkbox"
          name="at117"
          id="at117"
          checked={auditData.at117 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="at118"
          value={auditData.at118 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="off">Defined policy for capacity management?</label>
        <input
          type="checkbox"
          name="at119"
          id="at119"
          checked={auditData.at119 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="at120"
          value={auditData.at120 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="def">Defined policy for separation of development, testing and operational environments?</label>
        <input
          type="checkbox"
          name="at121"
          id="at121"
          checked={auditData.at121 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at122"
          value={auditData.at122 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[3] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='t1'>
        <h1>Protection from malware</h1>
      </div>

      <div className='box1'>
        <label htmlFor="ml">Defined policy for controls against malware?</label>
        <input
          type="checkbox"
          name="at123"
          id="at123"
          checked={auditData.at123 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="at124"
          value={auditData.at124 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[4] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='t1'>
        <h3>System Backup</h3>
      </div>

      <div className='box1'>
        <label htmlFor="prr">Defined policy for backing up systems?</label>
        <input
          type="checkbox"
          name="at125"
          id="at125"
          checked={auditData.at125 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="at126"
          value={auditData.at126 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="upp">Defined policy for information backup?</label>
        <input
          type="checkbox"
          name="at127"
          id="at127"
          checked={auditData.at127 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="at128"
          value={auditData.at128 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[6] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='t1'>
        <h3>Logging and Monitoring</h3>
      </div>

      <div className='box1'>
        <label htmlFor="pp">Defined policy for event logging?</label>
        <input
          type="checkbox"
          name="at129"
          id="at129"
          checked={auditData.at129 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="at130"
          value={auditData.at130 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[7] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="acc">Defined policy for protection of log information?</label>
        <input
          type="checkbox"
          name="at131"
          id="at131"
          checked={auditData.at131 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="at132"
          value={auditData.at132 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[8] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="ad">Defined policy for administrator and operator log?</label>
        <input
          type="checkbox"
          name="at133"
          id="at133"
          checked={auditData.at133 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="at134"
          value={auditData.at134 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[9] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="ck">Defined policy for clock synchronization?</label>
        <input
          type="checkbox"
          name="at135"
          id="at135"
          checked={auditData.at135 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at136"
          value={auditData.at136 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[10] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='t1'>
        <h3>Control of operational software</h3>
      </div>

      <div className='box1'>
        <label htmlFor="ml">Defined policy for installation of software on operational systems?</label>
        <input
          type="checkbox"
          name="at137"
          id="at137"
          checked={auditData.at137 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="at138"
          value={auditData.at138 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[11] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='t1'>
        <h3>Technical vulnerability management</h3>
      </div>

      <div className='box1'>
        <label htmlFor="prr">Defined policy for technical vulnerability management?</label>
        <input
          type="checkbox"
          name="at139"
          id="at139"
          checked={auditData.at139 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="at140"
          value={auditData.at140 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[12] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='t1'>
        <h3>Information systems audit considerations</h3>
      </div>

      <div className='box1'>
        <label htmlFor="upp">Defined policy for information systems audit?</label>
        <input
          type="checkbox"
          name="at141"
          id="at141"
          checked={auditData.at141 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="at142"
          value={auditData.at142 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[13] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="ev">Defined policy for protecting audit tools?</label>
        <input
          type="checkbox"
          name="at143"
          id="at143"
          checked={auditData.at143 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="at144"
          value={auditData.at144 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[14] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
    </div>
  );
};

export default Oper_security;
