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
    auditData.polText,
    auditData.accText,
    auditData.regText,
    auditData.deffText,
    auditData.infoooText,
    auditData.defffText,
    auditData.autText,
    auditData.remText,


    auditData.usText,

    
    auditData.resText,
    auditData.logText,
    auditData.passText,
    auditData.pgText,
    auditData.ctText,
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Access control</h1>
        <h3>Responsibilities for assets</h3>
      </div>

      <div className='box1'>
        <label htmlFor="list">Defined policy for access
                              control policy ?</label>
        <input
          type="checkbox"
          name="pol"
          id="pol"
          checked={auditData.pol || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="polText"
          value={auditData.polText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="acc">Defined policy for access to
                             networks and network services?</label>
        <input
          type="checkbox"
          name="acc"
          id="acc"
          checked={auditData.acc || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="accText"
          value={auditData.accText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="infooo">Defined policy for user asset
        registration and de-registration ?</label>
        <input
          type="checkbox"
          name="infooo"
          id="infooo"
          checked={auditData.reg || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="infoooText"
          value={auditData.infoooText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="def">Defined policy for user access
                             provisioning ? </label>
        <input
          type="checkbox"
          name="defff"
          id="defff"
          checked={auditData.defff || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="defffText"
          value={auditData.defffText || ''}
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
        <label htmlFor="infoo">Defined policy for management
                               of privileged access rights ? </label>
        <input
          type="checkbox"
          name="infoo"
          id="infoo"
          checked={auditData.infoo || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt5"
          name="infooText"
          value={auditData.infooText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[4] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      
      <br />
      <div className='box1'>
        <label htmlFor="lab">Defined policy for management
                             of secret authentication
                             information of users ?</label>
        <input
          type="checkbox"
          name="aut"
          id="aut"
          checked={auditData.aut || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt6"
          name="autText"
          value={auditData.autText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="forh"> Defined policy for removal or
        adjustment of access rights ?</label>
        <input
          type="checkbox"
          name="rem"
          id="rem"
          checked={auditData.rem || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt7"
          name="remText"
          value={auditData.remText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[6] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>

















      <br />
      <div className='t1'>
        <h3>User Responsbilities</h3>
      </div>

      <div className='box1'>
        <label htmlFor="media">Defined policy for use of secret
        authentication information ?  </label>
        <input
          type="checkbox"
          name="us"
          id="us"
          checked={auditData.us || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt8"
          name="usText"
          value={auditData.usText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[7] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>


















      <br />
      <div className='t1'>
        <h3>System and application access control</h3>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="res">Defined policy for information
                               access restrictions ? 
        </label>
        <input
          type="checkbox"
          name="res"
          id="res"
          checked={auditData.res || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt9"
          name="resText"
          value={auditData.resText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[8] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />

<div className='box1'>
        <label htmlFor="log">Defined policy for secure log-in
        procedures ?</label>
        <input
          type="checkbox"
          name="log"
          id="log"
          checked={auditData.log || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt10"
          name="logText"
          value={auditData.logText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[9] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="pass">Defined policy for password
        management systems ?</label>
        <input
          type="checkbox"
          name="pass"
          id="pass"
          checked={auditData.pass || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt10"
          name="passText"
          value={auditData.passText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[10] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="pg">Defined policy for use of
        privileged utility programs ?</label>
        <input
          type="checkbox"
          name="pg"
          id="pg"
          checked={auditData.pg || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt11"
          name="pgText"
          value={auditData.pgText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[11] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="ct">Defined policy for access control
        to program source code ?</label>
        <input
          type="checkbox"
          name="ct"
          id="ct"
          checked={auditData.phy || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt12"
          name="ctText"
          value={auditData.ctText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[12] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>

    </div>
  );
};

export default Asset;

