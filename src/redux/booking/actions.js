import { BOOKING, DELETE } from "./actionsTypes";

export const makeBooking = (bookingData) => {
  return {
    type: BOOKING,
    payload: bookingData,
  };
};

export const deleteBooking = (bookingId) => {
  return {
    type: DELETE,
    payload: bookingId,
  };
};
