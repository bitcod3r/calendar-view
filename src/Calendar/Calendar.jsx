import React from "react";
import CalendarHeader from "./CalendarHeader"
import CalendarMonth from "./CalendarMonth";

class Calendar extends React.Component {

    render() {
      return(    
        <>
            <CalendarHeader currentMonth="October" />
            <CalendarMonth />
        </>
      );
    }
}

export default Calendar;
