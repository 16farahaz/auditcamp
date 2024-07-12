import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling
import Securityi from './Securityi';

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
    textAreaRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height = 'auto'; // Reset height before calculating
        ref.style.height = ref.scrollHeight + 'px';
      }
    });
  }, [
    auditData.netText,
    auditData.esText,
    auditData.egText,



    auditData.ceText,
    auditData.eeText,
    auditData.icText,
    auditData.meText,
    auditData.loText,
    

  
  ]);

  return (
    <div className="bloc1">

     <div className='t1'>
     <h1>Communications security</h1>
      <h3>Network security management</h3>
     </div>

     
      <div className='box1'>
        <label htmlFor="ls">Defined policy for network
        controls ?</label>
        <input
          type="checkbox"
          name="net"
          id="net"
          checked={auditData.net || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="netText"
          value={auditData.netText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="cy">Defined policy for security of
        network services ?</label>
        <input
          type="checkbox"
          name="es"
          id="es"
          checked={auditData.es || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="esText"
          value={auditData.esText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="eg">Defined policy for segregation in
                            networks ?</label>
        <input
          type="checkbox"
          name="eg"
          id="eg"
          checked={auditData.eg || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="egText"
          value={auditData.egText || ''}
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
        <label htmlFor="ce">Defined policy for information
        transfer policies and procedures ?</label>
        <input
          type="checkbox"
          name="ce"
          id="ce"
          checked={auditData.ce || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="ceText"
          value={auditData.ceText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[3] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="ee">Defined policy for agreements on
        information transfer ?</label>
        <input
          type="checkbox"
          name="ee"
          id="ee"
          checked={auditData.ee || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="eeText"
          value={auditData.eeText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[4] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="ic">Defined policy for electronic
        messaging ?</label>
        <input
          type="checkbox"
          name="ic"
          id="ic"
          checked={auditData.eg || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="icText"
          value={auditData.icText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="me">Defined policy for confidentiality
                            or non-disclosure agreements ?
        </label>
        <input
          type="checkbox"
          name="me"
          id="me"
          checked={auditData.me || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="meText"
          value={auditData.meText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[6] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>

      <br />
      <div className='box1'>
        <label htmlFor="lo">Defined policy for system
                            acquisition, development and
                            maintenance ? 
        </label>
        <input
          type="checkbox"
          name="lo"
          id="lo"
          checked={auditData.lo || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="loText"
          value={auditData.loText || ''}
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












