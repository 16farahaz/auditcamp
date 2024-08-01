    import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Components/ConsultAuditStyle.css'; // Ajuster le chemin selon la structure de votre projet

function ConsultAudit() {
  const { id } = useParams(); // Extraire l'ID de l'audit à partir de l'URL
  const [audit, setAudit] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/audit/${id}`)
      .then(response => {
        setAudit(response.data);
      })
      .catch(err => console.log(err));
  }, [id]);

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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
        <a href='###' className='liena'><button className='btntsk'>Assign Task </button></a>
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
