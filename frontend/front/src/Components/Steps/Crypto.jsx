import React, { useContext, useEffect, useRef } from 'react';
import { StepperContext } from '../contexts/ContextStepper';
import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

const Crypto = () => {
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
  }, [auditData.at82, auditData.at84]);

  return (
    <div className="bloc1">
      <div className='t1'>
        <h1>Cryptography</h1>
        <h3>Cryptographic Controls</h3>
      </div>

      <div className='box1'>
        <label htmlFor="at81">Defined policy for use of cryptographic controls?</label>
        <input
          type="checkbox"
          name="at81"
          id="at81"
          checked={auditData.at81 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt1"
          name="at82"
          value={auditData.at82 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[0] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
      <br />

      <div className='box1'>
        <label htmlFor="at83">Defined policy for key management?</label>
        <input
          type="checkbox"
          name="at83"
          id="at83"
          checked={auditData.at83 || false}
          onChange={handleCheckboxChange}
        />
        <textarea
          className="txt1"
          id="txt2"
          name="at84"
          value={auditData.at84 || ''}
          onChange={handleTextAreaChange}
          rows="1"
          ref={el => textAreaRefs.current[1] = el}
          placeholder='Any recommendations'
        ></textarea>
      </div>
    </div>
  );
};

export default Crypto;
