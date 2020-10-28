import React from "react";
import CalendarHeader from "./CalendarHeader"
import CalendarMonth from "./CalendarMonth";

class Calendar extends React.Component {

    render() {
      return(    
        <React.Fragment>
            <CalendarHeader currentMonth="October" />
            <CalendarMonth />
        </React.Fragment>  
      );
    }
}

export default Calendar;
