    import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Components/ConsultAuditStyle.css'; // Ajuster le chemin selon la structure de votre projet
import { Alert } from '@mui/material';

function ConsultAudit() {
  const { id } = useParams(); // Extraire l'ID de l'audit à partir de l'URL
  const [audit, setAudit] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);  
  const [isButtonDisabled2, setIsButtonDisabled2] = useState(false);
  const [isButtonDisabled3, setIsButtonDisabled3] = useState(false);
  const [isButtonDisabled4, setIsButtonDisabled4] = useState(false);
  const [isButtonDisabled5, setIsButtonDisabled5] = useState(false);
  const [isButtonDisabled6, setIsButtonDisabled6] = useState(false);
  const [isButtonDisabled7, setIsButtonDisabled7] = useState(false);
  const [isButtonDisabled8, setIsButtonDisabled8] = useState(false);
  const [isButtonDisabled9, setIsButtonDisabled9] = useState(false);
  const [isButtonDisabled10, setIsButtonDisabled10] = useState(false);
  const [isButtonDisabled11, setIsButtonDisabled11] = useState(false);
  const [isButtonDisabled12, setIsButtonDisabled12] = useState(false);
  const [isButtonDisabled13, setIsButtonDisabled13] = useState(false);
  const [isButtonDisabled14, setIsButtonDisabled14] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/audit/${id}`)
      .then(response => {
        setAudit(response.data);
      })
      .catch(err => console.log(err));
  }, [id]);



  const handleAddData = () => {
    if (isButtonDisabled) {
      alert('Data already assigned to the employee');
      return;
    }

    axios.post('http://localhost:5000/securityp/add', {
      State: '',
      file: '', 
      at1: audit.at1,
      at2: audit.at2,
      at3: audit.at3,
      at4: audit.at4,
      at5: audit.at5,
      at6: audit.at6
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };
  const handleAddData2 = () => {
    if (isButtonDisabled2) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/securityo/add', {
      State: '',
      file: '', 
    
      at7: audit.at7,
      at8: audit.at8,
      at9: audit.at9,
      at10: audit.at10,
      at11: audit.at11,
      at12: audit.at12,
      at13: audit.at13,
      at14: audit.at14,
      at15: audit.at15,
      at16: audit.at16,
      at17: audit.at17,
      at18: audit.at18,
      at19: audit.at19,
      at20: audit.at20
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled2(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };

  const handleAddData3 = () => {
    if (isButtonDisabled3) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/human/add', {
      State: '',
      file: '', 
      at21: audit.at21,
      at22: audit.at22,
      at23: audit.at23,
      at24: audit.at24,
      at25: audit.at25,
      at26: audit.at26,
      at27: audit.at27,
      at28: audit.at28,
      at29: audit.at29,
      at30: audit.at30,
      at31: audit.at31,
      at32: audit.at32
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled3(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };
  
  const handleAddData4 = () => {
    if (isButtonDisabled4) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/asset/add', {
      State: '',
      file: '', 
      at33: audit.at33,
      at34: audit.at34,
      at35: audit.at35,
      at36: audit.at36,
      at37: audit.at37,
      at38: audit.at38,
      at39: audit.at39,
      at40: audit.at40,
      at41: audit.at41,
      at42: audit.at42,
      at43: audit.at43,
      at44: audit.at44,
      at45: audit.at45,
      at46: audit.at46,
      at47: audit.at47,
      at48: audit.at48,
      at49: audit.at49,
      at50: audit.at50,
      at51: audit.at51,
      at52: audit.at52
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled4(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };



  const handleAddData5 = () => {
    if (isButtonDisabled5) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/access/add', {
      State: '',
      file: '', 
      at53: audit.at53,
      at54: audit.at54,
      at55: audit.at55,
      at56: audit.at56,
      at57: audit.at57,
      at58: audit.at58,
      at59: audit.at59,
      at60: audit.at60,
      at61: audit.at61,
      at62: audit.at62,
      at63: audit.at63,
      at64: audit.at64,
      at65: audit.at65,
      at66: audit.at66,
      at67: audit.at67,
      at68: audit.at68,
      at69: audit.at69,
      at70: audit.at70,
      at71: audit.at71,
      at72: audit.at72,
      at73: audit.at73,
      at74: audit.at74,
      at75: audit.at75,
      at76: audit.at76,
      at77: audit.at77,
      at78: audit.at78,
      at79: audit.at79,
      at80: audit.at80
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled5(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };


  const handleAddData6 = () => {
    if (isButtonDisabled6) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/crypto/add', {
      State: '',
      file: '', 
      at81: audit.at81,
      at82: audit.at82,
      at83: audit.at83,
      at84: audit.at84
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled6(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };
  
  const handleAddData7 = () => {
    if (isButtonDisabled7) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/spe/add', {
      State: '',
      file: '', 
      at85: audit.at85,
      at86: audit.at86,
      at87: audit.at87,
      at88: audit.at88,
      at89: audit.at89,
      at90: audit.at90,
      at91: audit.at91,
      at92: audit.at92,
      at93: audit.at93,
      at94: audit.at94,
      at95: audit.at95,
      at96: audit.at96,
      at97: audit.at97,
      at98: audit.at98,
      at99: audit.at99,
      at100: audit.at100,
      at101: audit.at101,
      at102: audit.at102,
      at103: audit.at103,
      at104: audit.at104,
      at105: audit.at105,
      at106: audit.at106,
      at107: audit.at107,
      at108: audit.at108,
      at109: audit.at109,
      at110: audit.at110,
      at111: audit.at111,
      at112: audit.at112,
      at113: audit.at113,
      at114: audit.at114
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled7(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };
  
  
  const handleAddData8 = () => {
    if (isButtonDisabled8) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/oper/add', {
      State: '',
      file: '', 
      at115: audit.at115,
      at116: audit.at116,
      at117: audit.at117,
      at118: audit.at118,
      at119: audit.at119,
      at120: audit.at120,
      at121: audit.at121,
      at122: audit.at122,
      at123: audit.at123,
      at124: audit.at124,
      at125: audit.at125,
      at126: audit.at126,
      at127: audit.at127,
      at128: audit.at128,
      at129: audit.at129,
      at130: audit.at130,
      at131: audit.at131,
      at132: audit.at132,
      at133: audit.at133,
      at134: audit.at134,
      at135: audit.at135,
      at136: audit.at136,
      at137: audit.at137,
      at138: audit.at138,
      at139: audit.at139,
      at140: audit.at140,
      at141: audit.at141,
      at142: audit.at142,
      at143: audit.at143,
      at144: audit.at144
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled8(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };
  
  const handleAddData9 = () => {
    if (isButtonDisabled9) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/oper/add', {
      State: '',
      file: '', 
      at145: audit.at145,
      at146: audit.at146,
      at147: audit.at147,
      at148: audit.at148,
      at149: audit.at149,
      at150: audit.at150,
      at151: audit.at151,
      at152: audit.at152,
      at153: audit.at153,
      at154: audit.at154,
      at155: audit.at155,
      at156: audit.at156,
      at157: audit.at157,
      at158: audit.at158,
      at159: audit.at159,
      at160: audit.at160
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled9(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };
  

  const handleAddData10 = () => {
    if (isButtonDisabled10) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/securityc/add', {
      State: '',
      file: '', 
      at161: audit.at161,
      at162: audit.at162,
      at163: audit.at163,
      at164: audit.at164,
      at165: audit.at165,
      at166: audit.at166,
      at167: audit.at167,
      at168: audit.at168
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled10(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };




  const handleAddData11 = () => {
    if (isButtonDisabled11) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/system/add', {
      State: '',
      file: '', 
      at169: audit.at169,
      at170: audit.at170
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled11(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };
  const handleAddData12 = () => {
    if (isButtonDisabled12) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/suppliers/add', {
      State: '',
      file: '', 
      at171: audit.at171,
      at172: audit.at172
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled12(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };
  
  
  const handleAddData13 = () => {
    if (isButtonDisabled13) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/secasp/add', {
      State: '',
      file: '', 
      at173: audit.at173,
      at174: audit.at174,
      at175: audit.at175,
      at176: audit.at176
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled13(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };
  


  const handleAddData14 = () => {
    if (isButtonDisabled14) {
      alert('Data already assigned to the employee');
      return;
    }
  
    axios.post('http://localhost:5000/compliance/add', {
      State: '',
      file: '', 
      at177: audit.at177,
      at178: audit.at178,
      at179: audit.at179,
      at180: audit.at180,
      at181: audit.at181,
      at182: audit.at182,
      at183: audit.at183,
      at184: audit.at184,
      at185: audit.at185,
      at186: audit.at186,
      at187: audit.at187,
      at188: audit.at188,
      at189: audit.at189,
      at190: audit.at190
    })
    .then(response => {
      console.log('Data added successfully:', response.data);
      alert('Data added successfully!');
      setIsButtonDisabled14(true);
    })
    .catch(err => {
      console.error('Error adding data:', err);
      alert('Error adding data!');
    });
  };
  






  if (!audit) {
    return <div>Loading...</div>; // Afficher un état de chargement pendant que les données sont récupérées
  }

  return (
    <>
    
    <div className='titrerp'><h1>{audit.nom} Audit Repport</h1></div>
          <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
        <div className="table-wrapper">
          <table className="table2">
          <thead>
            
              <tr>
              <th>RSSI</th>
                <th>Email</th>
                <th>AUDITOR</th>
                <th>NORME</th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr key={audit._id}>
                <td>{audit.rssi}</td>
                <td>{audit.emailr}</td>
                <td>{audit.auditor}</td>
                <td>{audit.norme}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
      
        <div className="table-wrapper1">
            <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData} >Assign Task </button></a>
          <table className="table2">
            <thead>
            <tr>
                <th colSpan="3"><h1>Information Security Policies</h1></th>
              </tr>
             
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Management direction for information security</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Security Policies Exist ?</td>
                <td>{audit.at1.toString()}</td>
                <td>{audit.at2}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Verify All Policies Approved by Management ?</td>
                <td>{audit.at3.toString()}</td>
                <td>{audit.at4}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Evidence of Compliance ?</td>
                <td>{audit.at5.toString()}</td>
                <td>{audit.at6}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
     
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk'onClick={handleAddData2}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Organization of information security</h1></th>
              </tr>
              
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>information security roles and responsibilities</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Roles and responsibilities defined?</td>
                <td>{audit.at7.toString()}</td>
                <td>{audit.at8}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Segregation of duties defined?</td>
                <td>{audit.at9.toString()}</td>
                <td>{audit.at10}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Verification body / authority contacted for compliance verification?</td>
                <td>{audit.at11.toString()}</td>
                <td>{audit.at12}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Establish contact with special interest groups regarding compliance?</td>
                <td>{audit.at13.toString()}</td>
                <td>{audit.at14}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Evidence of information security in project management?</td>
                <td>{audit.at15.toString()}</td>
                <td>{audit.at16}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>Mobile devices and teleworking</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for mobile device usage?</td>
                <td>{audit.at17.toString()}</td>
                <td>{audit.at18}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Policy for teleworking defined?</td>
                <td>{audit.at19.toString()}</td>
                <td>{audit.at20}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
 
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData3}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Human resource security</h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Prior to employment</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for screening employees prior to employment?</td>
                <td>{audit.at21.toString()}</td>
                <td>{audit.at22}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for HR terms and conditions of employment?</td>
                <td>{audit.at23.toString()}</td>
                <td>{audit.at24}</td>
              </tr>
              
              <tr>
                <th colSpan="3"><h2>During employment</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for management
                responsibilities?</td>
                <td>{audit.at25.toString()}</td>
                <td>{audit.at26}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for information security awareness, education, and training?</td>
                <td>{audit.at27.toString()}</td>
                <td>{audit.at28}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for disciplinary process regarding information security? </td>
                <td>{audit.at29.toString()}</td>
                <td>{audit.at30}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>Termination and change of employment</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for HR termination change-of-employment policy regarding information security ?</td>
                <td>{audit.at31.toString()}</td>
                <td>{audit.at32}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>






      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
      
        <div className="table-wrapper1"> 
            <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData4}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Asset management</h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Responsibilities for assets</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Complete inventory list of assets ?</td>
                <td>{audit.at33.toString()}</td>
                <td>{audit.at34}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Complete ownership list of assets ?  </td>
                <td>{audit.at35.toString()}</td>
                <td>{audit.at36}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined "acceptable use" of assets
                policy  </td>
                <td>{audit.at37.toString()}</td>
                <td>{audit.at38}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined return of assets policy? </td>
                <td>{audit.at39.toString()}</td>
                <td>{audit.at40}</td>
              </tr>
              
              <tr>
                <th colSpan="3"><h2>Information classification</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for classification
                of information?</td>
                <td>{audit.at41.toString()}</td>
                <td>{audit.at42}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for labeling
                information?</td>
                <td>{audit.at43.toString()}</td>
                <td>{audit.at44}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for handling
                of assets?  </td>
                <td>{audit.at45.toString()}</td>
                <td>{audit.at46}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>Media handling</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for management
                of removable media ?</td>
                <td>{audit.at47.toString()}</td>
                <td>{audit.at48}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for disposal
                of media? </td>
                <td>{audit.at49.toString()}</td>
                <td>{audit.at50}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for physical
                media transfer ? </td>
                <td>{audit.at51.toString()}</td>
                <td>{audit.at52}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>







      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
      
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData5}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Access control</h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Responsibilities for assets
                </h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for access
                control policy?</td>
                <td>{audit.at53.toString()}</td>
                <td>{audit.at54}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for access to
                networks and network services?  </td>
                <td>{audit.at55.toString()}</td>
                <td>{audit.at56}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>Responsibilities for assets</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for user asset
                registration and de-registration?  </td>
                <td>{audit.at57.toString()}</td>
                <td>{audit.at58}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for user access
                provisioning? </td>
                <td>{audit.at59.toString()}</td>
                <td>{audit.at60}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>DDefined policy for management
                of privileged access rights? </td>
                <td>{audit.at61.toString()}</td>
                <td>{audit.at62}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for management
                                  of secret authentication
                                  information of users?  </td>
                <td>{audit.at63.toString()}</td>
                <td>{audit.at64}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for review of user
                access rights? </td>
                <td>{audit.at65.toString()}</td>
                <td>{audit.at66}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for removal or
                adjustment of access rights? </td>
                <td>{audit.at67.toString()}</td>
                <td>{audit.at68}</td>
              </tr>
              
              <tr>
                <th colSpan="3"><h2>User responsibilities</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>DDefined policy for use of secret
                authentication information?</td>
                <td>{audit.at69.toString()}</td>
                <td>{audit.at70}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>User responsibilities</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for labeling
                information?</td>
                <td>{audit.at71.toString()}</td>
                <td>{audit.at72}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>System and application access control</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for information
                access restrictions? </td>
                <td>{audit.at73.toString()}</td>
                <td>{audit.at74}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for secure log-in
                procedures?</td>
                <td>{audit.at75.toString()}</td>
                <td>{audit.at76}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for password
                management systems? </td>
                <td>{audit.at77.toString()}</td>
                <td>{audit.at78}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for use of
                privileged utility programs? </td>
                <td>{audit.at79.toString()}</td>
                <td>{audit.at80}</td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>




      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">

        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData6}>Assign Task </button></a>
          <table className="table2">
            <thead>
            <tr>
                <th colSpan="3"><h1>Information Security Policies</h1></th>
              </tr>
             
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Cryptographic controls</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for use of
                cryptographic controls?</td>
                <td>{audit.at81.toString()}</td>
                <td>{audit.at82}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for key
                management?</td>
                <td>{audit.at83.toString()}</td>
                <td>{audit.at84}</td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>







      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
      
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData7}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Physical and environmental security</h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Secure areas
                </h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for physical security
                perimeter?</td>
                <td>{audit.at85.toString()}</td>
                <td>{audit.at86}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for physical entry
                controls?  </td>
                <td>{audit.at87.toString()}</td>
                <td>{audit.at88}</td>
              </tr>
              
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for securing offices,
                rooms and facilities?  </td>
                <td>{audit.at89.toString()}</td>
                <td>{audit.at90}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for protection
                                       against external and
                                       environmental threats? </td>
                <td>{audit.at91.toString()}</td>
                <td>{audit.at92}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for working in
                secure areas? </td>
                <td>{audit.at93.toString()}</td>
                <td>{audit.at94}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for delivery and
                loading areas?  </td>
                <td>{audit.at95.toString()}</td>
                <td>{audit.at96}</td>
              </tr>

              <tr>
                <th colSpan="3"><h2>Equipment</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for equipment siting
                and protection? </td>
                <td>{audit.at97.toString()}</td>
                <td>{audit.at98}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for supporting
                utilities?</td>
                <td>{audit.at99.toString()}</td>
                <td>{audit.at100}</td>
              </tr>
              
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for cabling
                security?</td>
                <td>{audit.at101.toString()}</td>
                <td>{audit.at102}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for equipment
                maintenance?</td>
                <td>{audit.at103.toString()}</td>
                <td>{audit.at104}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for removal of
                assets? </td>
                <td>{audit.at105.toString()}</td>
                <td>{audit.at106}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for security of
                                       equipment and assets off premises?</td>
                <td>{audit.at107.toString()}</td>
                <td>{audit.at108}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Secure disposal or re-use of
                                       equipment? </td>
                <td>{audit.at109.toString()}</td>
                <td>{audit.at110}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for unattended user
                                       equipment? </td>
                <td>{audit.at111.toString()}</td>
                <td>{audit.at112}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for clear desk and
                                        clear screen policy?  </td>
                <td>{audit.at113.toString()}</td>
                <td>{audit.at114}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>










      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
   
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData8}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Operations security</h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Operational procedures and responsibilities
                </h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for documented
                operating procedures?</td>
                <td>{audit.at115.toString()}</td>
                <td>{audit.at116}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for change
                management?</td>
                <td>{audit.at117.toString()}</td>
                <td>{audit.at118}</td>
              </tr>
              
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for capacity
                management? </td>
                <td>{audit.at119.toString()}</td>
                <td>{audit.at120}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for separation of
                                       development, testing and
                                        operational environments? </td>
                <td>{audit.at121.toString()}</td>
                <td>{audit.at122}</td>
              </tr>


              <tr>
                <th colSpan="3"><h2>Protection from malware</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for controls against
                malware?  </td>
                <td>{audit.at123.toString()}</td>
                <td>{audit.at124}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>System Backup</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for backing up
                systems? </td>
                <td>{audit.at125.toString()}</td>
                <td>{audit.at126}</td>
              </tr>

              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for information
                backup?</td>
                <td>{audit.at127.toString()}</td>
                <td>{audit.at128}</td>
              </tr>


              <tr>
                <th colSpan="3"><h2>Logging and Monitoring</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for event logging?</td>
                <td>{audit.at129.toString()}</td>
                <td>{audit.at130}</td>
              </tr>
              
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for protection of
                log information?</td>
                <td>{audit.at131.toString()}</td>
                <td>{audit.at132}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for administrator
                and operator log?</td>
                <td>{audit.at133.toString()}</td>
                <td>{audit.at134}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for clock
                synchronization?  </td>
                <td>{audit.at135.toString()}</td>
                <td>{audit.at136}</td>
              </tr>


              <tr>
                <th colSpan="3"><h2>Control of operational software</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for installation of
                software on operational systems?</td>
                <td>{audit.at137.toString()}</td>
                <td>{audit.at138}</td>
              </tr>

              <tr>
                <th colSpan="3"><h2>Technical vulnerability management</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for management of
                technical vulnerabilities? </td>
                <td>{audit.at139.toString()}</td>
                <td>{audit.at140}</td>
              </tr>
             
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for restriction on
                software installation? </td>
                <td>{audit.at141.toString()}</td>
                <td>{audit.at142}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>Information systems audit considerations</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for information
                system audit control?   </td>
                <td>{audit.at143.toString()}</td>
                <td>{audit.at144}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

















      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
    
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData9 }>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Communications security</h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Network security management</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for information
                transfer policies and procedures?</td>
                <td>{audit.at145.toString()}</td>
                <td>{audit.at146}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for agreements on
                                       information transfer? 
               </td>
                <td>{audit.at147.toString()}</td>
                <td>{audit.at148}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for electronic
                messaging?  </td>
                <td>{audit.at149.toString()}</td>
                <td>{audit.at150}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>Information transfer</h2></th>
              </tr>

              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for information
                transfer policies and procedures? </td>
                <td>{audit.at151.toString()}</td>
                <td>{audit.at152}</td>
              </tr>
              
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for agreements on
                information transfer? </td>
                <td>{audit.at153.toString()}</td>
                <td>{audit.at154}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for electronic
                messaging? </td>
                <td>{audit.at155.toString()}</td>
                <td>{audit.at156}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for confidentiality
                or non-disclosure agreements? </td>
                <td>{audit.at157.toString()}</td>
                <td>{audit.at158}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for system
                                       acquisition, development and
                                       maintenance? </td>
                <td>{audit.at159.toString()}</td>
                <td>{audit.at160}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>








      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData10}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>System acquisition, development and maintenance</h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Security requirements of information systems</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for information
                                       security requirements analysis and
                                     specification?</td>
                <td>{audit.at161.toString()}</td>
                <td>{audit.at162}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for securing
                                       application services on public
                                    networks? 
               </td>
                <td>{audit.at163.toString()}</td>
                <td>{audit.at164}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for protecting
                application service transactions? </td>
                <td>{audit.at165.toString()}</td>
                <td>{audit.at166}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>Security in development and support processes</h2></th>
              </tr>

              <tr key={audit._id} className="trtxt">
                <td className='strong'> Defined policy for in-house
                                        development? 
                </td>
                <td>{audit.at167.toString()}</td>
                <td>{audit.at168}</td>
              </tr>
              
             
            </tbody>
          </table>
        </div>
      </div>






      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
    
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData11}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Suppliers relationships</h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Suppliers relationships</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for supplier
                relationships?</td>
                <td>{audit.at169.toString()}</td>
                <td>{audit.at170}</td>
              </tr>
           
              
             
            </tbody>
          </table>
        </div>
      </div>





      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
   
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk'onClick={handleAddData12}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Information security incident management</h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Information security management</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for information
                security management ?</td>
                <td>{audit.at171.toString()}</td>
                <td>{audit.at172}</td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>




      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
      
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData13}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Information security aspects of business continuity management
                </h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Information security continuity</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for information
                security continuity?</td>
                <td>{audit.at173.toString()}</td>
                <td>{audit.at174}</td>
              </tr>
              <tr>
                <th colSpan="3"><h2>Redundancies</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for redundancies?</td>
                <td>{audit.at175.toString()}</td>
                <td>{audit.at176}</td>
              </tr>
           
              
             
            </tbody>
          </table>
        </div>
      </div>








      <div className="container1 max-w-full shadow-xl rounded-2xl pb-2 bg-white">
     
        <div className="table-wrapper1">
        <br></br>
        <a href='###' className='liena'><button className='btntsk' onClick={handleAddData14}>Assign Task </button></a>
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="3"><h1>Compliance</h1></th>
              </tr>
              <tr>
                <th>Standard et requirements</th>
                <th>available</th>
                <th>recommendations</th>
              </tr>
            </thead>
            <tbody className='tbody'>
            <tr>
                <th colSpan="3"><h2>Compliance with legal and contractual requirements</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for identification of
                                       applicable legislation and
                                       contractual requirement?</td>
                <td>{audit.at177.toString()}</td>
                <td>{audit.at178}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for intellectual
                property rights? 
               </td>
                <td>{audit.at179.toString()}</td>
                <td>{audit.at180}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for protection of
                records?  </td>
                <td>{audit.at181.toString()}</td>
                <td>{audit.at182}</td>
              </tr>

              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for privacy and
protection of personally
identifiable information? </td>
                <td>{audit.at183.toString()}</td>
                <td>{audit.at184}</td>
              </tr>
              
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for regulation of
                cryptographic control? </td>
                <td>{audit.at185.toString()}</td>
                <td>{audit.at186}</td>
              </tr>

              <tr>
                <th colSpan="3"><h2>Independent review of information security</h2></th>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>DDefined policy for compliance
with security policies and
standards?  </td>
                <td>{audit.at187.toString()}</td>
                <td>{audit.at188}</td>
              </tr>
              <tr key={audit._id} className="trtxt">
                <td className='strong'>Defined policy for technical
                compliance review? </td>
                <td>{audit.at189.toString()}</td>
                <td>{audit.at190}</td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>










    </>
  );
}

export default ConsultAudit;
