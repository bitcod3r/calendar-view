import React from 'react';
import './App.css';
import { Calendar } from 'src/Calendar'

function App() {
  return (
    <div className="App">
      <section>
        <div className='add-reminder'>
          <button>Add Reminder</button>
        </div>  
      </section>

      <section>
        <div className='calendar'>
          <Calendar />
        </div>
      </section>
    </div>
  );
}

export default App;
