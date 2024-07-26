import { BOOKING, DELETE } from "./actionsTypes";

const initialState = {
  data: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      const newData = [...state.data];
      newData.push(action.payload);
      return { data: newData };

    case DELETE:
      const filterData = state.data.filter(
        (booking) => booking.id !== action.payload
      );
      return { data: filterData };

    default:
      return state
  }
};

export default bookingReducer
