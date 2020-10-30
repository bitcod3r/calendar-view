import React from "react";
import PropTypes from "prop-types";

import "./CalendarHeader.css"

const CalendarHeader = ({ currentMonth }) => (
        <div className="calendar-header">
            <span><button> &lt;&lt; </button></span>
            <span><strong>{ currentMonth }</strong></span>
            <span><button> &gt;&gt; </button></span>
        </div>
);

CalendarHeader.propTypes = {
    currentMonth: PropTypes.string,
  };

export default CalendarHeader;
