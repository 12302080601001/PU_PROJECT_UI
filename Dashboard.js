import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>AI-powered predictions and resources management.</p>
      <div>
        <h3>Predicted Demand:</h3>
        <p>Forecasting food needs based on historical data.</p>
      </div>
      <div>
        <h3>Available Resources:</h3>
        <p>Showing available food for distribution.</p>
      </div>
    </div>
  );
}

export default Dashboard;
