import React, { useState } from 'react';
import './CloudProviderForm.css';

const CloudProviderForm = ({ onSubmit }) => {
  const [provider, setProvider] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(provider);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="label">
        Select Cloud Provider:
        <select value={provider} onChange={(e) => setProvider(e.target.value)} className="select">
          <option value="">Select...</option>
          <option value="aws">Amazon Web Services (AWS)</option>
          <option value="azure">Microsoft Azure</option>
          <option value="gcp">Google Cloud Platform (GCP)</option>
        </select>
      </label>
      <button type="submit" className="button">Submit</button>
    </form>
  );
};

export default CloudProviderForm;
