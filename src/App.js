// src/App.js
import React from 'react';

const App = () => {
  return (
    <div>
      <div>
            <h1>Lorenzo Santos</h1>
            <div className = "link-container">
                <div>
                    <a href = "https://www.linkedin.com/in/lorenzo-santos-10a780371/"> LinkedIn </a>
                </div>
            </div>
        </div>
        <div className="pfp-container">
            <img src="/IMG_0844.jpg" alt="hello" /> 
            <div className = "description">
                <p>Hi, I'm Lorenzo! I'm a freshmen at Penn studying Computer Science (and maybe econ). I am from Wilmington, DE and love playing saxophone and running in my free time.</p>
            </div>
        </div>
    </div>
  );
};

export default App;

