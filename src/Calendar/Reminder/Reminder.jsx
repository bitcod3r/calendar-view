import React from "react";
import { connect } from "react-redux";


import "./Reminder.css";

const Reminder = () => {
  
  const wrapped = (data) => (
    <div className="reminder-box">
      {data}
    </div>
  );

  return wrapped(
    <div className="reminder-day"></div>
  );
};



const mapReduxStateToProps = state => ({
  data: state,
});

export default connect(
  mapReduxStateToProps,
)(Reminder);
