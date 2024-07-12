import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Security_phy_env = () => {
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
    auditData.ppText,
    auditData.entText,
    auditData.offText,
    auditData.extfText,
    auditData.wrkText,
    auditData.dellText,
    auditData.eqText,
    auditData.spText,


    auditData.cbText,

    
    auditData.maText,
    auditData.asText,
    auditData.osText,
    auditData.rsText,
    auditData.unText,
    auditData.clText,
  
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Physical and environmental security</h1>
        <h3>Secure areas</h3>
      </div>

      <div className='box1'>
        <label htmlFor="pp">Defined policy for physical security
                              perimeter ? </label>
        <input
          type="checkbox"
          name="pp"
          id="pp"
          checked={auditData.pp || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="ppText"
          value={auditData.ppText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="acc">Defined policy for physical entry
        controls ? </label>
        <input
          type="checkbox"
          name="ent"
          id="ent"
          checked={auditData.ent || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="entText"
          value={auditData.entText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="off">Defined policy for securing offices,
        rooms and facilities ?</label>
        <input
          type="checkbox"
          name="off"
          id="off"
          checked={auditData.off || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="offText"
          value={auditData.offText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="def">Defined policy for protection
                             against external and
                            environmental threats ? </label>
        <input
          type="checkbox"
          name="ext"
          id="ext"
          checked={auditData.ext || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="extText"
          value={auditData.extText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[3] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />


      <div className='box1'>
        <label htmlFor="wrk">Defined policy for working in
                                secure areas ? </label>
        <input
          type="checkbox"
          name="wrk"
          id="wrk"
          checked={auditData.wrk || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt5"
          name="wrkText"
          value={auditData.wrkText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[4] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      
      <br />
      <div className='box1'>
        <label htmlFor="dell">Defined policy for delivery and
                             loading areas? </label>
        <input
          type="checkbox"
          name="dell"
          id="dell"
          checked={auditData.dell || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt6"
          name="dellText"
          value={auditData.dellText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>








      <br />
      <div className='t1'>
        <h3>Equipment</h3>
      </div>




<br />
      <div className='box1'>
        <label htmlFor="eq"> Defined policy for equipment sitting
        and protection?</label>
        <input
          type="checkbox"
          name="eq"
          id="eq"
          checked={auditData.eq || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt7"
          name="eqText"
          value={auditData.eqText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[6] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>

      <div className='box1'>
        <label htmlFor="sp">Defined policy for supporting
        utilities ?   </label>
        <input
          type="checkbox"
          name="sp"
          id="sp"
          checked={auditData.sp || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt8"
          name="spText"
          value={auditData.spText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[7] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>

<br />
      <div className='box1'>
        <label htmlFor="cb">Defined policy for cabling
        security ?
        </label>
        <input
          type="checkbox"
          name="cb"
          id="cb"
          checked={auditData.cb || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt9"
          name="cbText"
          value={auditData.cbText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[8] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />

<div className='box1'>
        <label htmlFor="ma">Defined policy for equipment
        maintenance ?</label>
        <input
          type="checkbox"
          name="ma"
          id="ma"
          checked={auditData.ma || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt10"
          name="maText"
          value={auditData.maText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[9] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="as">Defined policy for removal of
        assets ? </label>
        <input
          type="checkbox"
          name="as"
          id="as"
          checked={auditData.as || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt10"
          name="asText"
          value={auditData.asText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[10] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="os">Defined policy for security of
        equipment and assets off-premises ?</label>
        <input
          type="checkbox"
          name="os"
          id="os"
          checked={auditData.os || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt11"
          name="osText"
          value={auditData.osText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[11] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="rs">Secure disposal or re-use of
        equipment ?</label>
        <input
          type="checkbox"
          name="rs"
          id="rs"
          checked={auditData.rs || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt12"
          name="rsText"
          value={auditData.ctText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[12] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="un">Defined policy for unattended user
        equipment ?</label>
        <input
          type="checkbox"
          name="un"
          id="un"
          checked={auditData.un || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt12"
          name="unText"
          value={auditData.unText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[13] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="cl">Defined policy for clear desk and
        clear screen policy? </label>
        <input
          type="checkbox"
          name="cl"
          id="cl"
          checked={auditData.cl || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt12"
          name="clText"
          value={auditData.clText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[14] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
     

    </div>
  );
};

export default Security_phy_env;






