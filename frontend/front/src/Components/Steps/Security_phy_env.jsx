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
  auditData.at86,
  auditData.at88,
  auditData.at90,
  auditData.at92,
  auditData.at94,
  auditData.at96,
  auditData.at98,
  auditData.at100,
  auditData.at102,
  auditData.at104,
  auditData.at106,
  auditData.at108,
  auditData.at110,
  auditData.at112,
  auditData.at114,
  
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Physical and environmental security</h1>
        <h3>Secure areas</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at85">Defined policy for physical security
                              perimeter ? </label>
        <input
          type="checkbox"
          name="at85"// i put that to make u understand what to chage and how  this match with attribut at85:{type:Boolean}
          id="at85"
          checked={auditData.at85 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt100"
          name="at86"// this what you put and declare that in the top matching with attribut at86 {type:String}
          value={auditData.at86 || ''}
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
          name="at87"
          id="at87"
          checked={auditData.at87 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt101"
          name="at88"
          value={auditData.at88 || ''}
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
          name="at89"
          id="at89"
          checked={auditData.at89 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at90"
          name="at90"
          value={auditData.at90 || ''}
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
          name="at91"
          id="at91"
          checked={auditData.at91 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="at92"
          name="at92"
          value={auditData.at92 || ''}
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
          name="at93"
          id="at93"
          checked={auditData.at94|| false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt104"
          name="at94"
          value={auditData.at94 || ''}
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
          name="at95"
          id="at95"
          checked={auditData.at95 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt105"
          name="at96"
          value={auditData.at96 || ''}
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
          name="at97"
          id="at97"
          checked={auditData.at97 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="text106"
          name="at98"
          value={auditData.at98 || ''}
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
          name="at99"
          id="text107"
          checked={auditData.at99 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="text108"
          name="at100"
          value={auditData.at100 || ''}
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
          name="at101"
          id="at101"
          checked={auditData.at101 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt109"
          name="at102"
          value={auditData.at102 || ''}
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
          name="at103"
          id="txt110"
          checked={auditData.at103 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt111"
          name="at104"
          value={auditData.at104 || ''}
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
          name="at105"
          id="at105"
          checked={auditData.at105 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt112"
          name="at106"
          value={auditData.at106 || ''}
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
          name="at107"
          id="at107"
          checked={auditData.at107 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt113"
          name="at108"
          value={auditData.at108 || ''}
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
          name="at109"
          id="at109"
          checked={auditData.at109 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt114"
          name="at110"
          value={auditData.at110 || ''}
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
          name="at111"
          id="at111"
          checked={auditData.at111 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt115"
          name="at112"
          value={auditData.at112 || ''}
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
          name="at113"
          id="at113"
          checked={auditData.at113 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt116"
          name="at114"
          value={auditData.at114 || ''}
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






