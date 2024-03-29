import React, { useState } from 'react';
import './feedback-form.css'; 

const FeedbackForm = ({ onSubmit }) => {
  const [resourceAvailability, setResourceAvailability] = useState(0);
  const [successRatio, setSuccessRatio] = useState(0);
  const [turnaroundEfficiency, setTurnaroundEfficiency] = useState(0);
  const [dataIntegrity, setDataIntegrity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = resourceAvailability + successRatio + turnaroundEfficiency + dataIntegrity;
    if (total !== 1) {
      alert('The sum of all fields should be equal to 1.');
      return;
    }
    onSubmit({ resourceAvailability, successRatio, turnaroundEfficiency, dataIntegrity });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="form-label">
        Resource Availability:
        <input
         className="form-input"
          type="number"
          step="0.01"
          min="0"
          max="1"
          value={resourceAvailability}
          onChange={(e) => setResourceAvailability(parseFloat(e.target.value))}
        />
      </label>
      <label className="form-label">
        Success Ratio:
        <input
         className="form-input"
          type="number"
          step="0.01"
          min="0"
          max="1"
          value={successRatio}
          onChange={(e) => setSuccessRatio(parseFloat(e.target.value))}
        />
      </label>
      <label className="form-label">
        Turnaround Efficiency:
        <input
         className="form-input"
          type="number"
          step="0.01"
          min="0"
          max="1"
          value={turnaroundEfficiency}
          onChange={(e) => setTurnaroundEfficiency(parseFloat(e.target.value))}
        />
      </label>
      <label className="form-label">
        Data Integrity:
        <input
         className="form-input"
          type="number"
          step="0.01"
          min="0"
          max="1"
          value={dataIntegrity}
          onChange={(e) => setDataIntegrity(parseFloat(e.target.value))}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;


// import React, { useState } from 'react';

// const FeedbackForm = () => {
//   const [preferences, setPreferences] = useState({
//     resourceAvailability: 0,
//     successRatio: 0,
//     turnaroundEfficiency: 0,
//     dataIntegrity: 0
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPreferences(prevState => ({
//       ...prevState,
//       [name]: parseFloat(value)
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const sum = Object.values(preferences).reduce((acc, curr) => acc + curr, 0);
//     if (sum === 1) {
//       // Send data to the server
//       console.log('Data sent:', preferences);
//     } else {
//       alert('The sum of all fields must be 1');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Resource Availability:
//         <input
//           type="number"
//           name="resourceAvailability"
//           value={preferences.resourceAvailability}
//           onChange={handleChange}
//           step="0.01"
//           min="0"
//           max="1"
//         />
//       </label>
//       {/* Repeat similar input fields for other preferences */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FeedbackForm;
