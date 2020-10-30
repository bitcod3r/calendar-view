import React from "react";
import CalendarHeader from "./CalendarHeader"
import CalendarMonth from "./CalendarMonth";
import moment from "moment";

class Calendar extends React.Component {

    render() {
      return(    
        <>
            <CalendarHeader currentMonth={ moment().format("MMMM") } />
            <CalendarMonth />
        </>
      );
    }
}

export default Calendar;
