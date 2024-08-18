import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsivePie } from '@nivo/pie';
import '../Components/ResponsivePieStyle.css';

const MyResponsivePie = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide index

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/graph/graph');
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
      } catch (error) {
        console.error('Error fetching the chart data:', error);
      }
    };

    fetchData();
  }, []);

  // Create groups of three pie charts
  const groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedData.push(data.slice(i, i + 3));
  }

  // Go to the next or previous slide
  const changeSlide = (step) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + step;
      if (newIndex >= groupedData.length) {
        return 0; // Loop back to the first slide
      }
      if (newIndex < 0) {
        return groupedData.length - 1; // Go to the last slide
      }
      return newIndex;
    });
  };

  return (
    <div className="slideshow-container">
      {groupedData.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`mySlides ${currentIndex === groupIndex ? 'active' : 'hidden'}`}
        >
          {group.map(({ idste, nomste, pieData }, index) => (
            <div key={index} className="slide">
              <h3>{nomste}</h3>
              <div className="pie-container">
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
      ))}
      <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
      <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
    </div>
  );
};

export default MyResponsivePie;
