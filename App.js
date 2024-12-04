import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Forms from './components/Forms';
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="App">
      <header>
        <h1>AI-Powered Food Bank Optimization</h1>
        <div className="header-image">
          <img
            src="https://th.bing.com/th/id/R.0933bdaab9da8546d65fa528da063b5e?rik=JsAQG9jjlL52yw&riu=http%3a%2f%2fclipartmag.com%2fimages%2ffood-bank-cliparts-2.jpg&ehk=ueFxjg0xlzccGsGysXMKKylz9nTzQDk%2bLCebLYZkyXo%3d&risl=&pid=ImgRaw&r=0"
            alt="Food Bank"
            className="food-bank-img"
          />
        </div>
      </header>
      <main>
        <Dashboard />
        <Forms />
        <Inventory />
      </main>
    </div>
  );
}

export default App;
