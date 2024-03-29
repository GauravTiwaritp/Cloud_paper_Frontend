import React, { useState } from 'react';
import CloudProviderForm from './components/CloudProviderForm';
import FeedbackForm from './components/FeedbackForm';
import ResultPage from './components/ResultPage';

const App = () => {
  const [cloudProvider, setCloudProvider] = useState('');
  const [feedbackData, setFeedbackData] = useState(null);

  const handleCloudProviderSubmit = (provider) => {
    setCloudProvider(provider);
  };

  const handleFeedbackSubmit = (data) => {
    setFeedbackData(data);
  };

  return (
    <div>
      <h1>Cloud Platform Form</h1>
      {!feedbackData && (
        <CloudProviderForm onSubmit={handleCloudProviderSubmit} />
      )}
      {cloudProvider && !feedbackData && (
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
      )}
      {feedbackData && (
        <ResultPage feedback={feedbackData} cloudService={cloudProvider} />
      )}
    </div>
  );
};

export default App;
