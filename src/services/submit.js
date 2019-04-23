import {api} from "../api/routes";

export const onEmailSave = async values => {
  await api
    .post('/client', {...values})
};

export const onFeedback = async values => {
  await api
    .post('/send', {...values})
};
