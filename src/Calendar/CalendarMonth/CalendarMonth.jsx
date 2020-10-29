import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import "./CalendarMonth.css";

const CalendarMonth = () => {
  
  let weekDays = moment.weekdays().map(day => {
    return (
      <th key={day} className="week-day">
       {day}
      </th>
    );
  });

  const firstDayOfMonth = () => {
    let dateObject = moment();
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d"); 
   return firstDay;
  };

  let blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(
      <td className="calendar-day empty">{""}</td>
    );
  }

  let daysInMonth = [];
  for (let d = 1; d <= moment().daysInMonth(); d++) {
    daysInMonth.push(
      <td key={d} className="calendar-day">
        {d}
      </td>
    );
  }

  var totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells); // when reach next week we contain all td in last week to rows 
      cells = []; // empty container 
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === totalSlots.length - 1) { // when end loop we add remain date
      rows.push(cells);
    }
  });

  let daysinmonth = rows.map((d, i) => {
    return <tr>{d}</tr>;
  });

  const wrapped = (dataGrid) => (
    <div className="calendar-month">
      {dataGrid}
    </div>
  );

  return wrapped(
    <table className="calendar-table">
      <thead>
        <tr>
          {weekDays}
        </tr>
      </thead>

      <tbody>
      {daysinmonth}
      </tbody>
    </table>,
  );
};



const mapReduxStateToProps = state => ({
  data: state,
});

export default connect(
  mapReduxStateToProps,
)(CalendarMonth);
