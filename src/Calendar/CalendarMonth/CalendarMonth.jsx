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
  
  // Getting days before the current month
  function getDaysBefore() {
    const firstDayOfMonth = () => {
      let firstDay = moment()
                   .startOf("month")
                   .format("d"); 
     return firstDay;
    };
  
    let emptyDaysBefore = [];
    let i = firstDayOfMonth();
    
    while(i > 0) {
      let dayBeforeObject = moment()
                      .startOf('month')
                      .subtract(i, 'days');

      let dayBefore = dayBeforeObject.format('D');
      let dayNumberInWeek = moment(dayBeforeObject,'D').format("d");
      let isWeekend = (dayNumberInWeek == 0 || dayNumberInWeek == 6) ? 'weekend-day' : '';

      emptyDaysBefore.push(
        <td key={"empty-" + i}  className={"calendar-day empty" + " " + isWeekend}>
          <div className="calendar-day-container">
            <div className="calendar-day-number">{ dayBefore }</div>
          </div>
        </td>
      );

      i--;
    }

    return emptyDaysBefore;
  }

  // Getting days after the current month
  function getDaysAfter() {
    const lastDayOfMonth = () => {
      let lastDay = moment()
                   .endOf("month")
                   .format("d"); 
     return lastDay;
    };
  
    let emptyDaysAfter = [];
    let i = lastDayOfMonth();

    while(i < 6) {
      let dayAfterObject = moment()
                        .endOf('month')
                        .add(i, 'days');

      let dayAfter = dayAfterObject.format('D');
      let dayNumberInWeek = moment(dayAfterObject,'D').format("d");
      let isWeekend = (dayNumberInWeek == 0 || dayNumberInWeek == 6) ? 'weekend-day' : '';
  
      emptyDaysAfter.push(
        <td key={"empty-" + i}  className={"calendar-day empty" + " " + isWeekend}>
          <div className="calendar-day-container">
            <div className="calendar-day-number">{ dayAfter }</div>
          </div>
        </td>
      );

      i++
    }

    return emptyDaysAfter;
  }

  // Getting days of the current month
  function getDaysinMonth() {
    let daysCurrentMonth = [];
    for (let d = 1; d <= moment().daysInMonth(); d++) {

      let dayNumberInWeek = moment(d,'D').format("d");
      let isWeekend = (dayNumberInWeek == 0 || dayNumberInWeek == 6) ? 'weekend-day' : '';

      daysCurrentMonth.push(
        <td key={"day-" + d} className={"calendar-day-" + d + " " + isWeekend}>
          <div className="calendar-day-container">
            <div className="calendar-day-number">{d}</div>
            <div className="calendar-reminders-container">
              <div style={{ background: "#2fa" }}>13:50 <span>Notif... 1</span></div>
              <div style={{ background: "#a90" }}>16:30 <span>Notif... 2</span></div>
            </div>
          </div>
        </td>
      );
    }

    return daysCurrentMonth;
  }

  let daysBefore = getDaysBefore();
  let daysInMonth = getDaysinMonth();
  let daysAfter = getDaysAfter();
  var totalSlots = [...daysBefore, ...daysInMonth, ...daysAfter];
  let rows = [];
  let cells = [];

  // Filling out rows and cells into the slot
  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) { 
      rows.push(cells);
    }
  });

  let calendarDates = rows.map((d, i) => {
    return <tr key={"column-day-" + i} className={i}>{d}</tr>;
  });

  const wrapped = (dataGrid) => (
    <div className="calendar-month">
      {dataGrid}
    </div>
  );

  return wrapped(
    <table className="calendar-table">
      <thead>
        <tr>{weekDays}</tr>
      </thead>

      <tbody>
        {calendarDates}
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
