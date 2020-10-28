import {
  _200_OK,
  _404_NOT_FOUND,
  is4xxClientError,
  is5xxServerError,
} from "./httpStatus";
import moment from "moment";

const mockReminders = require('./reminders.json');

const fakeResponse = ({ status, data }) => {

  return new Promise((resolve, reject) =>
          (is4xxClientError(status) || is5xxServerError(status))
            ? reject({ status, data })
            : resolve({ status, data })    
        );
};

class FakeHttpApi {
  constructor () {
    this._reminders = mockReminders;
    this.getRemindersByMonthYear = this.getRemindersByMonthYear.bind(this);
    this.getFirst5RemindersByDay = this.getFirst5RemindersByDay.bind(this);
    this.getContact = this.getContact.bind(this);
  }

  getRemindersByRange ({ startDate, endDate }) {
    const from = moment(startDate);
    const to = moment(endDate);

    const matchingReminders = this._reminders.filter(reminder => {
        const reminderDate = moment(reminder.datetime);
        (reminderDate > from && reminderDate < to)
    });

    return fakeResponse({
      status: _200_OK,
      data: matchingReminders,
    });
  };

  getReminder ({ reminderId }) {
    const reminder = this._reminder.find(reminder => reminder.id === reminderId);

    if (!reminder) return fakeResponse({
      status: _404_NOT_FOUND,
    });

    return fakeResponse({
      status: _200_OK,
      data: reminder,
    });
  }; 
}

export default FakeHttpApi;
