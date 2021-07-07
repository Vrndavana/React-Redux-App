// Pre-Installed Imports
import React from 'react';
import './App.css';
import Superhero from './components/Chucknorris'; // Import added in after Step 2 and activated right away 

//  Step 1 - App Display Setup 
function App() {
  return (
    <div className="App">
      <header className="App-header">
              {/* Step 2 - Cleaned out and set up <div className="App", Superhero component not yet rendered  */}
        <h1 className='chuck'> Chuck Norris </h1>
        <div>
         <Superhero />
        </div>

      </header>
    </div>
  );
}

export default App;
