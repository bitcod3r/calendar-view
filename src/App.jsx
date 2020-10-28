import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import Calendar from "./Calendar";

function App({ reduxStore }) {
  return (
    <Provider store={reduxStore}>
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
    </Provider>
  );
}

export default App;
