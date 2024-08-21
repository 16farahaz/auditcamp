import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ResponsivePie } from '@nivo/pie';
import '../Comesp/ComspStyle.css';

const Comsp = () => {
  const { id } = useParams(); // Extract the audit ID from the URL
  const [data, setData] = useState([]);
  const [audit, setAudit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch pie chart data
        const response = await axios.get(`http://localhost:5000/graph1/chart/${id}`);
        const fetchedData = response.data;

        const transformedData = [];

        Object.keys(fetchedData).forEach(idste => {
          const companyData = fetchedData[idste];

          Object.keys(companyData).forEach(nomste => {
            const stateData = companyData[nomste];

            const pieData = Object.keys(stateData).map(state => ({
              id: state,
              label: state.charAt(0).toUpperCase() + state.slice(1),
              value: stateData[state],
              color: state === 'blocked' ? '#ff6384' : state === 'running' ? '#36a2eb' : '#ffce56'
            }));

            transformedData.push({ idste, nomste, pieData });
          });
        });

        setData(transformedData);

        // Fetch audit data
        const auditResponse = await axios.get(`http://localhost:5000/audit/${id}`);
        setAudit(auditResponse.data);

      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, [id]);

    // Function to format date
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

  return (
    <div className='page-break'>
      <button onClick={() => window.print()} className='printbtn'>Print Page</button>
      
    <div className="chart-containerr">



{/* Display Audit Information */}
{audit && (
  <div className="datainfo">
    <h3 className='h3' >Company informations </h3>
    <div className="info-item">
      <span className="label">Company Name:</span>
      <span className="value">{audit.nom}</span>
    </div>
    <div className="info-item">
      <span className="label">Email Address:</span>
      <span className="value">{audit.emailc}</span>
    </div>
    <div className="info-item">
      <span className="label">Phone Number:</span>
      <span className="value">{audit.numt}</span>
    </div>
    <div className="info-item">
      <span className="label">RSSI:</span>
      <span className="value">{audit.rssi}</span>
    </div>
    <div className="info-item">
      <span className="label">Alternate Email Address:</span>
      <span className="value">{audit.emailr}</span>
    </div>
    <div className="info-item">
      <span className="label">Auditor:</span>
      <span className="value">{audit.auditor}</span>
    </div>
    <div className="info-item">
      <span className="label">Norme:</span>
      <span className="value">{audit.norme}</span>
    </div>
    <div className="info-item">
      <span className="label">Date:</span>
      <span className="value">{formatDate(audit.date)}</span>
    </div>
  </div>
)}

{/* Display Pie Charts */}
{data.map(({ idste, nomste, pieData }, index) => (
  <div key={index} className="chart-item">
    <div className="pie-containerr">
      <h3 className="h3">{nomste}</h3>
      <ResponsivePie
        data={pieData}
        margin={{ top: 5, right: 100, bottom: 5, left: 100 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ datum: 'data.color' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
      />
      
    </div>
    
  </div>
))}



</div>
    </div>
  );
};

export default Comsp;
