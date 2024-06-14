let username = import.meta.env.VITE_USERNAME;
let password = import.meta.env.VITE_PASSWORD;

let auth = btoa(`${username}:${password}`)

export const getPatients = async () => {
      try {
           
            const headers = new Headers({
              'Authorization': `Basic ${auth}`,
              'Content-Type': 'application/json'
            });
    
            const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
              method: 'GET',
              headers: headers
            });
    
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
    
            const extractedData = data.map(patient => ({
              name: patient.name,
              gender: patient.gender,
              age: patient.age,
              profilePic: patient.profile_picture,
              date_of_birth: patient.date_of_birth
            }));

            return extractedData;

          } catch (error) {
           throw new Error(error);
           
          }
        };

    
        export const getPatient = async (patientName) => {
            try {
                 
                  const headers = new Headers({
                    'Authorization': `Basic ${auth}`,
                    'Content-Type': 'application/json'
                  });
          
                  const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
                    method: 'GET',
                    headers: headers
                  });
          
                  if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
          
                  const data = await response.json();

                  const patientData = data.find(patient => patient.name === patientName);
              
                  if (!patientData) {
                    throw new Error('Patient not found');
                  }
              
                  return patientData;
              
                } catch (error) {
                  throw new Error(error);
                }
              };