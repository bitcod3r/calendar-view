const initialState = {
  fetchedReminders: [],
  fetchFailure: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    default:
      return state;

  }
};

export default reducer;