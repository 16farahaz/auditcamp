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
    auditData.prText,
    auditData.mgText,
    auditData.foText,
    auditData.tsText,

    auditData.mlText,

    auditData.prrText,
    auditData.uppText,



    auditData.evText,
    auditData.ogText,
    auditData.adText,
    auditData.ckText,

    auditData.inText,

    auditData.vuText,
    auditData.trText,


    auditData.onText,




  
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Operations security</h1>
        <h3>Operational procedures and responsibilities</h3>
      </div>

      <div className='box1'>
        <label htmlFor="pp"> Defined policy for documented
                              operating procedures ? </label>
        <input
          type="checkbox"
          name="pr"
          id="pr"
          checked={auditData.pr || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="prText"
          value={auditData.prText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="acc">Defined policy for change
                             management ? </label>
        <input
          type="checkbox"
          name="mg"
          id="mg"
          checked={auditData.mg || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="mgText"
          value={auditData.mgText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="off">Defined policy for capacity
        management ?</label>
        <input
          type="checkbox"
          name="fo"
          id="fo"
          checked={auditData.fo || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="foText"
          value={auditData.foText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="def">Defined policy for separation of
                             development, testing and
                             operational environments ?</label>
        <input
          type="checkbox"
          name="ts"
          id="ts"
          checked={auditData.ts || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="tsText"
          value={auditData.tsText || ''}
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
        <label htmlFor="ml"> Defined policy for controls against
                             malware ?  </label>
        <input
          type="checkbox"
          name="ml"
          id="ml"
          checked={auditData.ml || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="mlText"
          value={auditData.mlText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[4] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>






       <br/>

      <div className='t1'>
        
        <h3>System Backup</h3>
      </div>

      <div className='box1'>
        <label htmlFor="prr"> Defined policy for backing up
                             systems ? </label>
        <input
          type="checkbox"
          name="prr"
          id="prr"
          checked={auditData.prr || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="prrText"
          value={auditData.prrText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="upp">Defined policy for information
                             backup? </label>
        <input
          type="checkbox"
          name="upp"
          id="upp"
          checked={auditData.upp || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="uppText"
          value={auditData.uppText || ''}
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
        <label htmlFor="pp"> Defined policy for event logging ? </label>
        <input
          type="checkbox"
          name="ev"
          id="ev"
          checked={auditData.ev || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="evText"
          value={auditData.evText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[7] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="acc">Defined policy for protection of
                             log information ? </label>
        <input
          type="checkbox"
          name="og"
          id="og"
          checked={auditData.og || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="ogText"
          value={auditData.ogText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[8] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="ad">Defined policy for administrator
                            and operator log ? </label>
        <input
          type="checkbox"
          name="ad"
          id="ad"
          checked={auditData.ad || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="adText"
          value={auditData.adText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[9] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="ck">Defined policy for clock
                             synchronization ?</label>
        <input
          type="checkbox"
          name="ck"
          id="ck"
          checked={auditData.ck || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="ckText"
          value={auditData.ckText || ''}
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
        <label htmlFor="in">Defined policy for installation of
        software on operational systems ?</label>
        <input
          type="checkbox"
          name="in"
          id="in"
          checked={auditData.in || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="inText"
          value={auditData.inText || ''}
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
        <label htmlFor="vu">Defined policy for management of
                            technical vulnerabilities ?</label>
        <input
          type="checkbox"
          name="vu"
          id="vu"
          checked={auditData.vu || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="vuText"
          value={auditData.vuText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[12] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="tr">Defined policy for restriction on
                            software installation ? </label>
        <input
          type="checkbox"
          name="tr"
          id="tr"
          checked={auditData.tr || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="trText"
          value={auditData.trText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[13] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>


      
      <br />
      <div className='t1'>
      <h3>Information systems audit considerations</h3>
      </div>

   


      <div className='box1'>
        <label htmlFor="on">Defined policy for information
                            system audit control ?</label>
        <input
          type="checkbox"
          name="on"
          id="on"
          checked={auditData.on || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="onText"
          value={auditData.onText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[14] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
    



    </div>
  );
};

export default Oper_security;












