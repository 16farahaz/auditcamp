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
    auditData.ideText,
    auditData.telText,
    auditData.corText,
    auditData.vacyText,
    auditData.regText,
   
    auditData.thText,
    auditData.chText,
    
    

  
  ]);

  return (
    <div className="bloc1">

     <div className='t1'>
     <h1>Compliance</h1>
      <h3>Compliance with legal and contractual requirements  </h3>
     </div>

     
      <div className='box1'>
        <label htmlFor="ide">Defined policy for identification of
applicable legislation and
contractual requirement ? </label>
        <input
          type="checkbox"
          name="ide"
          id="ide"
          checked={auditData.ide || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="ideText"
          value={auditData.ideText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="tel">Defined policy for intellectual
        property rights ? </label>
        <input
          type="checkbox"
          name="tel"
          id="tel"
          checked={auditData.tel || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="telText"
          value={auditData.telText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="cor">Defined policy for protection of
        records ? </label>
        <input
          type="checkbox"
          name="cor"
          id="cor"
          checked={auditData.cor || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="corText"
          value={auditData.corText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>

      <div className='box1'>
        <label htmlFor="vacy">Defined policy for privacy and
protection of personally
identifiable information ?</label>
        <input
          type="checkbox"
          name="vacy"
          id="vacy"
          checked={auditData.vacy || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="vacyText"
          value={auditData.vacyText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[3] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="reg">Defined policy for regulation of
        cryptographic control ?</label>
        <input
          type="checkbox"
          name="reg"
          id="reg"
          checked={auditData.reg || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="regText"
          value={auditData.regText || ''}
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
        <label htmlFor="th">Defined policy for compliance
        with security policies and
        standards ?</label>
        <input
          type="checkbox"
          name="th"
          id="th"
          checked={auditData.th || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="thText"
          value={auditData.thText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="ch">Defined policy for technical
        compliance review ? 
        </label>
        <input
          type="checkbox"
          name="ch"
          id="ch"
          checked={auditData.ch || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="chText"
          value={auditData.chText || ''}
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












