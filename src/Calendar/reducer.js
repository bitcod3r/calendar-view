import { combineReducers } from "redux";
import { reducer as monthReducer } from "./CalendarMonth";
import { reducer as reminderReducer } from "./Reminder";

export default combineReducers({
  month: monthReducer,
  reminder: reminderReducer,
});
