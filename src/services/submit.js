import {api} from "../api";
import {showNotification} from "../components/Forms/Notification";


export const onEmailSave = values => {
  ;
  api
    .post('/client', {...values, mail_type: 'contact'}).then(response =>
    response && showNotification('success', 'success'))
    .catch(({response}) => {
      if (response && response.status === 400) {
        showNotification('You purchased your contacts earlier. Thank you.', 'error')
      } else {
        showNotification('We have some technical issues. Please try again in few minutes. Thank you.', 'error')
      }

    })
};

export const onFeedback = values => {

  api
    .post('/client', {...values, mail_type: 'feedback'}).then(response =>
    response && showNotification('success', 'success'))
    .catch(({response}) => {
      if (response && response.status === 400) {
        showNotification('success', 'success')
      } else {
        showNotification('We have some technical issues. Please try again in few minutes. Thank you.', 'error')
      }
    })
};
