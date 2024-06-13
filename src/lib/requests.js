let username = "coalition";
let password = "skills-test";

let auth = btoa(`${username}:${password}`)

export const getPatients = async () => {
      try {
            // Replace 'your-authorization-token' with the actual token
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
    