import React from 'react';
import { Box } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphItem = () => {

    const patientData = {
        "name": "Emily Williams",
        "gender": "Female",
        "age": 18,
        "profile_picture": "https://fedskillstest.ct.digital/1.png",
        "date_of_birth": "2006-08-19",
        "phone_number": "(711) 984-6696",
        "emergency_contact": "(680) 653-9512",
        "insurance_type": "Premier Auto Corporation",
        "diagnosis_history": [
          {
            "month": "March",
            "year": 2024,
            "blood_pressure": {
              "systolic": {
                "value": 163,
                "levels": "Higher than Average"
              },
              "diastolic": {
                "value": 95,
                "levels": "Normal"
              }
            }
          },
          {
            "month": "February",
            "year": 2024,
            "blood_pressure": {
              "systolic": {
                "value": 151,
                "levels": "Higher than Average"
              },
              "diastolic": {
                "value": 120,
                "levels": "Normal"
              }
            }
          },
          {
            "month": "January",
            "year": 2024,
            "blood_pressure": {
              "systolic": {
                "value": 168,
                "levels": "Higher than Average"
              },
              "diastolic": {
                "value": 77,
                "levels": "Lower than Average"
              }
            }
          },
          {
            "month": "December",
            "year": 2023,
            "blood_pressure": {
              "systolic": {
                "value": 158,
                "levels": "Higher than Average"
              },
              "diastolic": {
                "value": 92,
                "levels": "Normal"
              }
            }
          },
          {
            "month": "November",
            "year": 2023,
            "blood_pressure": {
              "systolic": {
                "value": 117,
                "levels": "Normal"
              },
              "diastolic": {
                "value": 95,
                "levels": "Normal"
              }
            }
          },
          {
            "month": "October",
            "year": 2023,
            "blood_pressure": {
              "systolic": {
                "value": 115,
                "levels": "Normal"
              },
              "diastolic": {
                "value": 80,
                "levels": "Lower than Average"
              }
            }
          }
        ]
      };
    
       // Define the full month names and their abbreviated forms
  const monthAbbreviations = {
    "January": "Jan",
    "February": "Feb",
    "March": "Mar",
    "April": "Apr",
    "May": "May",
    "June": "Jun",
    "July": "Jul",
    "August": "Aug",
    "September": "Sep",
    "October": "Oct",
    "November": "Nov",
    "December": "Dec"
  };

  // Define the labels in ascending order
  const fullLabels = ["October 2023", "November 2023", "December 2023", "January 2024", "February 2024", "March 2024"];

  // Transform the labels to their abbreviated forms
  const labels = fullLabels.map(label => {
    const [month, year] = label.split(' ');
    return `${monthAbbreviations[month]}, ${year}`;
  });

  // Sort diagnosis history data according to the defined labels
  const sortedData = fullLabels.map(label => {
    const [month, year] = label.split(' ');
    return patientData.diagnosis_history.find(entry => entry.month === month && entry.year.toString() === year);
  });

 const systolicData = sortedData.map(entry => entry.blood_pressure.systolic.value);
  const diastolicData = sortedData.map(entry => entry.blood_pressure.diastolic.value);
    
      const data = {
        labels,
        datasets: [
          {
            label: 'Systolic',
            data: systolicData,
            borderColor: '#E66FD2',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.5
          },
          {
            label: 'Diastolic',
            data: diastolicData,
            borderColor: '#8C6FE6',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
            tension: 0.5
          }
        ]
      };
    
      const options = {
        responsive: true,
        scales: {
            y: {
              beginAtZero: false,
              ticks: {
                stepSize: 20,
                callback: function(value) {
                  return value;
                }
              }
            }
          },
        plugins: {
          legend: {
           display: false
            
          },
          title: {
            display: false,
            text: 'Blood Pressure from Oct 2023 to Mar 2024'
          }
        }
      };


  return (
   <Box width="100%" mx="auto">
      <Line data={data} options={options} />
    </Box>
  )
}

export default GraphItem