// import React, { useState, useEffect } from 'react';
// import './ResultPage.css'; 

// const ResultPage = () => {
//   // Placeholder state for numerical values
//   const [availability, setAvailability] = useState("Not found");
//   const [responseTime, setResponseTime] = useState("Not found");
//   const [turnaroundTime, setTurnaroundTime] = useState("Not found");
//   const [numberOfCPUs, setNumberOfCPUs] = useState("Not found");
//   const [cpuSpeed, setCpuSpeed] = useState("Not found");
//   const [disk, setDisk] = useState("Not found");
//   const [memory, setmemory] = useState("Not found");
//   const [cost, setCost] = useState("Not found");
//   const [security, setSecurity] = useState("Not found");
//   const [latency, setLatency] = useState("Not found");
//   const [bandwidth, setBandwidth] = useState("Not found");
  

//   // Function to fetch data
//   const fetchData = async () => {
//     try {
//       // Simulating API call delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       // Fetch data from API (dummy data for demonstration)
//       // const data = {
//       //   availability: "99.9%",
//       //   responseTime: "85 sec"
//       //   // Add more fields as needed
//       // };
//       // // Update state with fetched data
//       // setAvailability(data.availability);
//       // setResponseTime(data.responseTime);
//       // Update other state variables similarly for other fields
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle error by setting values to "Not found"
//       setAvailability("Not found");
//       setResponseTime("Not found");
//       setTurnaroundTime("Not found");
//       setNumberOfCPUs("Not found");
//       setCpuSpeed("Not found");
//       setDisk("Not found");
//       setmemory("Not found");
//       setCost("Not found");
//       setSecurity("Not found");
//       setLatency("Not found");
//       setBandwidth("Not found");
      
//       // Set other state variables to "Not found" as needed
//     }
//   };

//   useEffect(() => {
//     // Fetch data when component mounts
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="table-container">
//         <h3>TABLE 1. QoS attributes required by Cloud User X and Capabilities of candidates Cloud providers.</h3>   
//         <table>
//           <thead>
//             <tr>
//               <th colSpan="2">QoS attributes</th>
//               <th>Cloud User X</th>
//               <th>Provider P1</th>
//               <th>Provider P2</th>
//               <th>Provider P3</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td rowSpan="3">Performance</td>
//               <td>Availability</td>
//               <td>{availability}</td>
//               <td>99.9 %</td>
//               <td>99.9 %</td>
//               <td>99.9 %</td>
//             </tr>
//             <tr>
//               <td>Response Time</td>
//               <td>{responseTime}</td>
//               <td>85 sec</td>
//               <td>85 sec</td>
//               <td>85 sec</td>
//             </tr>
            
            
//         <tr>
//           <td>Turnaround Time</td>
//           <td>{turnaroundTime}</td>
//           <td>100 minutes</td>
//           <td>100 minutes</td>
//           <td>100 minutes</td>
          
//         </tr>
       

//         <tr>
//           <td rowSpan="4">Capacity</td>
//           <td>Number of CPUs</td>
//           <td>{numberOfCPUs}</td>
//           <td>4</td>
//           <td>4</td>
//           <td>8</td>
          
//         </tr>
//         <tr>
//           <td>CPU speed</td>
//           <td>{cpuSpeed}</td>
//           <td>3.40 GHz</td>
//           <td>3.40 GHz</td>
//           <td>3.40 GHz</td>
//         </tr>
//         <tr>
//           <td>Disk</td>
//           <td>{disk}</td>
//           <td>800 GB</td>
//           <td>800 GB</td>
//           <td>800 GB</td>
          
//         </tr>
//         <tr>
//           <td>Memory</td>
//           <td>{memory}</td>
//           <td>32 GB</td>
//           <td>32 GB</td>
//           <td>32 GB</td>
          
//         </tr>


//         <tr>
//           <td rowSpan="1">Cost</td>
//           <td>Cost/task</td>
//           <td>{cost}</td>
//           <td>1200$</td>
//           <td>1200$</td>
//           <td>1200$</td>
          
//         </tr>


//         <tr>
//           <td rowSpan="1">Security</td>
//           <td>Data confidentiality & integrity</td>
//           <td>{security}</td>
//           <td>Enabled</td>
//           <td>Enabled</td>
//           <td>Enabled</td>
          
//         </tr>
        

//         <tr>
//           <td rowSpan="2">Network Qos</td>
//           <td>Latency</td>
//           <td>{latency}</td>
//           <td>3.5 ms</td>
//           <td>3.5 ms</td>
//           <td>3.5 ms</td>
          
//         </tr>
//         <tr>
//           <td>Bandwidth</td>
//           <td>{bandwidth}</td>
//           <td>10 Gbit/s</td>
//           <td>10 Gbit/s</td>
//           <td>10 Gbit/s</td>
          
//         </tr>
            
            
//             </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default ResultPage;


import React, { useState, useEffect } from 'react';
import './ResultPage.css'; 

const ResultPage = () => {
  // Placeholder states for numerical values
  const [availability, setAvailability] = useState("Not found");
  const [responseTime, setResponseTime] = useState("Not found");
  const [turnaroundTime, setTurnaroundTime] = useState("Not found");
  const [numberOfCPUs, setNumberOfCPUs] = useState("Not found");
  const [cpuSpeed, setCpuSpeed] = useState("Not found");
  const [disk, setDisk] = useState("Not found");
  const [memory, setMemory] = useState("Not found");
  const [cost, setCost] = useState("Not found");
  const [security, setSecurity] = useState("Not found");
  const [latency, setLatency] = useState("Not found");
  const [bandwidth, setBandwidth] = useState("Not found");

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Fetch data from API (dummy data for demonstration)
      const data = {
        availability: "99.9%",
        responseTime: "85 sec",
        turnaroundTime: "100 minutes",
        numberOfCPUs: "4",
        cpuSpeed: "3.40 GHz",
        disk: "800 GB",
        memory: "32 GB",
        cost: "1200$",
        security: "Enabled",
        latency: "3.5 ms",
        bandwidth: "10 Gbit/s"
      };
      // Update state with fetched data
      setAvailability(data.availability);
      setResponseTime(data.responseTime);
      setTurnaroundTime(data.turnaroundTime);
      setNumberOfCPUs(data.numberOfCPUs);
      setCpuSpeed(data.cpuSpeed);
      setDisk(data.disk);
      setMemory(data.memory);
      setCost(data.cost);
      setSecurity(data.security);
      setLatency(data.latency);
      setBandwidth(data.bandwidth);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error by setting values to "Not found"
      setAvailability("Not found");
      setResponseTime("Not found");
      setTurnaroundTime("Not found");
      setNumberOfCPUs("Not found");
      setCpuSpeed("Not found");
      setDisk("Not found");
      setMemory("Not found");
      setCost("Not found");
      setSecurity("Not found");
      setLatency("Not found");
      setBandwidth("Not found");
    }
  };

  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);

  return (
    <>
      <div className="table-container">
        <h3>TABLE 1. QoS attributes required by Cloud User X and Capabilities of candidates Cloud providers.</h3>   
        <table>
          <thead>
            <tr>
              <th colSpan="2">QoS attributes</th>
              <th>Cloud User X</th>
              <th>Provider P1</th>
              <th>Provider P2</th>
              <th>Provider P3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3">Performance</td>
              <td>Availability</td>
              <td>{availability}</td>
              <td>99.9 %</td>
              <td>99.9 %</td>
              <td>99.9 %</td>
            </tr>
            <tr>
              <td>Response Time</td>
              <td>{responseTime}</td>
              <td>85 sec</td>
              <td>85 sec</td>
              <td>85 sec</td>
            </tr>
            <tr>
              <td>Turnaround Time</td>
              <td>{turnaroundTime}</td>
              <td>100 minutes</td>
              <td>100 minutes</td>
              <td>100 minutes</td>
            </tr>
            <tr>
              <td rowSpan="4">Capacity</td>
              <td>Number of CPUs</td>
              <td>{numberOfCPUs}</td>
              <td>4</td>
              <td>4</td>
              <td>8</td>
            </tr>
            <tr>
              <td>CPU speed</td>
              <td>{cpuSpeed}</td>
              <td>3.40 GHz</td>
              <td>3.40 GHz</td>
              <td>3.40 GHz</td>
            </tr>
            <tr>
              <td>Disk</td>
              <td>{disk}</td>
              <td>800 GB</td>
              <td>800 GB</td>
              <td>800 GB</td>
            </tr>
            <tr>
              <td>Memory</td>
              <td>{memory}</td>
              <td>32 GB</td>
              <td>32 GB</td>
              <td>32 GB</td>
            </tr>
            <tr>
              <td rowSpan="1">Cost</td>
              <td>Cost/task</td>
              <td>{cost}</td>
              <td>1200$</td>
              <td>1200$</td>
              <td>1200$</td>
            </tr>
            <tr>
              <td rowSpan="1">Security</td>
              <td>Data confidentiality & integrity</td>
              <td>{security}</td>
              <td>Enabled</td>
              <td>Enabled</td>
              <td>Enabled</td>
            </tr>
            <tr>
              <td rowSpan="2">Network Qos</td>
              <td>Latency</td>
              <td>{latency}</td>
              <td>3.5 ms</td>
              <td>3.5 ms</td>
              <td>3.5 ms</td>
            </tr>
            <tr>
              <td>Bandwidth</td>
              <td>{bandwidth}</td>
              <td>10 Gbit/s</td>
              <td>10 Gbit/s</td>
              <td>10 Gbit/s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResultPage;
