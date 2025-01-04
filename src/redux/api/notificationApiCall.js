import { toast } from "react-toastify";
import request from "../../utils/requset";
import { notificationAction } from "../slices/notification";


// send notification for all user
export function sendNotificationForAllUser(title, body) {
    return async (getState) => {
        try {
            await request.post('/api/notification/send-notification-to-users', { title, body },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getState().auth.employee.token}`
                }
            });
            toast.success("Notification sent successfully");
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error sending notification"
            toast.error(errorMessage);
        }
    }
}


// send notification for specific user
export function sendNotificationForSpecificUser(title, body, userId) {
    return async (dispatch,getState) => {
        try {
            dispatch(notificationAction.setLoadingSendNotification());
            await request.post(`/api/notification/send-notification-to-user/${userId}`, { title, body },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${getState().auth.employee.token}`
                }
            });
            toast.success("Notification sent successfully");
            dispatch(notificationAction.setIsNotificationSend());
            setTimeout(()=> dispatch(notificationAction.setClearSendNotification()), 3000);
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error sending notification"
            toast.error(errorMessage);
            dispatch(notificationAction.setClearSendNotification());
        }
    }
}