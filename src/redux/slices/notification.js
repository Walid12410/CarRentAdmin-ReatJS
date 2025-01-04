import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    isNotificationSend : false,
    loadingSendNotification: false,
  },
  reducers: { 
    setIsNotificationSend : (state) => {
        state.isNotificationSend = true;
        state.loadingSendNotification = false;
    },
    setLoadingSendNotification: (state) => {
        state.loadingSendNotification = true;
    },
    setClearSendNotification: (state) => {
        state.isNotificationSend = false;
        state.loadingSendNotification = false;
    }
  },
});

const notificationReducer = notificationSlice.reducer;
const notificationAction = notificationSlice.actions;

export { notificationAction, notificationReducer };
