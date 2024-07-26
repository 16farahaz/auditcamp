  import React, { useContext, useEffect, useRef } from 'react';
  import { StepperContext } from '../contexts/ContextStepper';
  import "../Steps/SecuritypStyle.css"; // Import your CSS file for styling

  import dayjs from 'dayjs'; // Import dayjs for date handling

  const Company = () => {
    const { auditData, setAuditData } = useContext(StepperContext);
    const textAreaRefs = useRef([]);

    // Function to handle date change
    const handleDateChange = (event) => {
      setAuditData({ ...auditData, date: event.target.value });
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
      auditData.nom,
      auditData.emailc,
      auditData.numt,
      auditData.rssi,
      auditData.emailr,
      auditData.auditor,
      auditData.norme,
      auditData.date,
    ]);

    return (
      <div className="bloc1">
        <div className='t1'>
          <h1>Company Audit</h1>
          <h3>Company properties</h3>
        </div>

        <div className='box1'>
          <label htmlFor="comText">Company *</label> 
          <textarea
            className="txt1"
            id="name"
            name="nom"
            value={auditData.nom|| ''}
            onChange={handleTextAreaChange}
            rows="1"
            ref={el => textAreaRefs.current[0] = el}
            
          
          ></textarea>
        </div>
        <br />
        <div className='box1'>
          <label htmlFor="emailrText">Email * </label>
          <textarea
            className="txt1"
            id="emailc"
            name="emailc"
            value={auditData.emailc || ''}
            onChange={handleTextAreaChange}
            rows="1"
            ref={el => textAreaRefs.current[2] = el}
          
          ></textarea>
        </div>
        <br />
        <div className='box1'>
          <label htmlFor="numtText">Phone *</label>
          <textarea
            className="txt1"
            type="Number"
            id="numt"
            name="numt"
            value={auditData.numt || ''}
            onChange={handleTextAreaChange}
            rows="1"
            ref={el => textAreaRefs.current[1] = el}
          
          ></textarea>
        </div>
      
  <br />
        <div className='box1'>
          <label htmlFor="rssiText">RSSI * </label>
          <textarea
            className="txt1"
            id="rssi"
            name="rssi"
            value={auditData.rssi || ''}
            onChange={handleTextAreaChange}
            rows="1"
            ref={el => textAreaRefs.current[3] = el}
  
          ></textarea>
        </div>
        <br />
        <div className='box1'>
          <label htmlFor="emailr">Email * </label>
          <textarea
            className="txt1"
            id="emailr"
            name="emailr"
            value={auditData.emailr || ''}
            onChange={handleTextAreaChange}
            rows="1"
            ref={el => textAreaRefs.current[4] = el}
          
          ></textarea>
        </div>
        <br/>
        <div className='box1'>
          <label htmlFor="audText">Auditor * </label>
          <textarea
            className="txt1"
            id="auditor"
            name="auditor"
            value={auditData.auditor || ''}
            onChange={handleTextAreaChange}
            rows="1"
            ref={el => textAreaRefs.current[5] = el}  >

            </textarea>
        </div>
        <br />
        <div className='box1'>
          <label htmlFor="normeText">Norme * </label>
          <textarea
            className="txt1"
            id="norme"
            name="norme"
            value={auditData.norme || ''}
            onChange={handleTextAreaChange}
            rows="1"
            ref={el => textAreaRefs.current[6] = el}
          
          ></textarea>
        </div>
  <br />
  <div className='box1'>
        <label htmlFor="auditDate">Audit Date *</label>
        <input
          type='date'
          id="date1"
          name="date"
          value={auditData.date || dayjs().format('YYYY-MM-DD')}
          onChange={handleDateChange}
        />
      </div>
      </div>
    );
  };

  export default Company;
