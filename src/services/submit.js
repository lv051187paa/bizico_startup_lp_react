import {api, interceptor} from "../api";
import {showNotification} from "../components/Forms/Notification";

export const onEmailSave = values => {
  interceptor(() => showNotification('success'), () => showNotification('failed'));
  api
    .post('/client', {...values})
};

export const onFeedback = values => {
  api
    .post('/send', {...values})
};
