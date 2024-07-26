import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Accesscontrol = () => {
  const { auditData, setAuditData } = useContext(StepperContext);
  const textAreaRefs = useRef([]);
  
  // Fonction pour gérer les changements de cases à cocher
  const handleCheckboxChange = (event) => {
    setAuditData({ ...auditData, [event.target.name]: event.target.checked });
  };

  // Fonction pour gérer les changements dans les zones de texte
  const handleTextAreaChange = (event) => {
    setAuditData({ ...auditData, [event.target.name]: event.target.value });
  };

  // Redimensionner automatiquement les zones de texte en fonction du contenu
  useEffect(() => {
    textAreaRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height = 'auto'; // Réinitialiser la hauteur avant le calcul
        ref.style.height = ref.scrollHeight + 'px';
      }
    });
  }, [
    auditData.at54,
    auditData.at56,
    auditData.at58,
    auditData.at60,
    auditData.at62,
    auditData.at64,
    auditData.at66,
    auditData.at68,
    auditData.at70,
    auditData.at72,
    auditData.at74,
    auditData.at76,
    auditData.at78,
    auditData.at80,
  ]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Access Control</h1>
        <h3>Responsibilities for Assets</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at53">Defined policy for access control policy?</label>
        <input
          type="checkbox"
          name="at53"
          id="at53"
          checked={auditData.at53 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="at54"
          value={auditData.at54 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at55">Defined policy for access to networks and network services?</label>
        <input
          type="checkbox"
          name="at55"
          id="at55"
          checked={auditData.at55 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="at56"
          value={auditData.at56 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='t1'>
        <h3>Responsibilities for Assets</h3>
      </div>
      <div className='box1'>
        <label htmlFor="at57">Defined policy for user asset registration and de-registration?</label>
        <input
          type="checkbox"
          name="at57"
          id="at57"
          checked={auditData.at57 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt3"
          name="at58"
          value={auditData.at58 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[2] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at59">Defined policy for user access provisioning?</label>
        <input
          type="checkbox"
          name="at59"
          id="at59"
          checked={auditData.at59 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt4"
          name="at60"
          value={auditData.at60 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[3] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at61">Defined policy for management of privileged access rights?</label>
        <input
          type="checkbox"
          name="at61"
          id="at61"
          checked={auditData.at61 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt5"
          name="at62"
          value={auditData.at62 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[4] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at63">Defined policy for management of secret authentication information of users?</label>
        <input
          type="checkbox"
          name="at63"
          id="at63"
          checked={auditData.at63 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt6"
          name="at64"
          value={auditData.at64 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[5] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at65">Defined policy for removal or adjustment of access rights?</label>
        <input
          type="checkbox"
          name="at65"
          id="at65"
          checked={auditData.at65 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt7"
          name="at66"
          value={auditData.at66 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[6] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at67">Defined policy for review of user access rights?</label>
        <input
          type="checkbox"
          name="at67"
          id="at67"
          checked={auditData.at67 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt8"
          name="at68"
          value={auditData.at68 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[7] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='t1'>
        <h3>User Responsibilities</h3>
      </div>
      <div className='box1'>
        <label htmlFor="at69">Defined policy for use of secret authentication information?</label>
        <input
          type="checkbox"
          name="at69"
          id="at69"
          checked={auditData.at69 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt9"
          name="at70"
          value={auditData.at70 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[8] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='t1'>
        <h3>System and Application Access Control</h3>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at71">Defined policy for information access restrictions?</label>
        <input
          type="checkbox"
          name="at71"
          id="at71"
          checked={auditData.at71 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt10"
          name="at72"
          value={auditData.at72 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[9] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at73">Defined policy for secure log-in procedures?</label>
        <input
          type="checkbox"
          name="at73"
          id="at73"
          checked={auditData.at73 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt11"
          name="at74"
          value={auditData.at74 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[10] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at75">Defined policy for password management systems?</label>
        <input
          type="checkbox"
          name="at75"
          id="at75"
          checked={auditData.at75 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt12"
          name="at76"
          value={auditData.at76 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[11] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at77">Defined policy for use of privileged utility programs?</label>
        <input
          type="checkbox"
          name="at77"
          id="at77"
          checked={auditData.at77 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt13"
          name="at78"
          value={auditData.at78 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[12] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />
      <div className='box1'>
        <label htmlFor="at79">Defined policy for access control to program source code?</label>
        <input
          type="checkbox"
          name="at79"
          id="at79"
          checked={auditData.at79 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt14"
          name="at80"
          value={auditData.at80 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[13] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
    </div>
  );
};

export default Accesscontrol;
