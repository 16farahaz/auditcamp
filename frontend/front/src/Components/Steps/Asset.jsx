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
    auditData.listText,
    auditData.ownershipText,
    auditData.useText,
    auditData.defText,
    auditData.infooText,
    auditData.labText,
    auditData.forhText,
    auditData.mediaText,
    auditData.dispoText,
    auditData.phyText,
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Asset Management</h1>
        <h3>Responsibilities for Assets</h3>
      </div>

      <div className='box1'>
        <label htmlFor="list">Complete inventory list of assets?</label>
        <input
          type="checkbox"
          name="list"
          id="list"
          checked={auditData.list || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="listText"
          value={auditData.listText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="ownership">Complete ownership list of assets?</label>
        <input
          type="checkbox"
          name="ownership"
          id="ownership"
          checked={auditData.ownership || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="ownershipText"
          value={auditData.ownershipText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="use">Defined "acceptable use" of assets policy?</label>
        <input
          type="checkbox"
          name="use"
          id="use"
          checked={auditData.use || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="useText"
          value={auditData.useText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="def">Defined return of assets policy?</label>
        <input
          type="checkbox"
          name="def"
          id="def"
          checked={auditData.def || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="defText"
          value={auditData.defText || ''}
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
        <label htmlFor="infoo">Defined policy for classification of information?</label>
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
        <label htmlFor="lab">Defined policy for labeling information?</label>
        <input
          type="checkbox"
          name="lab"
          id="lab"
          checked={auditData.lab || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt6"
          name="labText"
          value={auditData.labText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="forh">Defined policy for handling of assets?</label>
        <input
          type="checkbox"
          name="forh"
          id="forh"
          checked={auditData.forh || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt7"
          name="forhText"
          value={auditData.forhText || ''}
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
        <label htmlFor="media">Defined policy for management of removable media?</label>
        <input
          type="checkbox"
          name="media"
          id="media"
          checked={auditData.media || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt8"
          name="mediaText"
          value={auditData.mediaText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[7] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="dispo">Defined policy for disposal of media?</label>
        <input
          type="checkbox"
          name="dispo"
          id="dispo"
          checked={auditData.dispo || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt9"
          name="dispoText"
          value={auditData.dispoText || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[8] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
<br />
      <div className='box1'>
        <label htmlFor="phy">Defined policy for physical media transfer?</label>
        <input
          type="checkbox"
          name="phy"
          id="phy"
          checked={auditData.phy || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt10"
          name="phyText"
          value={auditData.phyText || ''}
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
