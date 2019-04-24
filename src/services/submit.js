import {api} from "../api";

export const onEmailSave = values => {
  api
    .post('/client', {...values})
};

export const onFeedback = values => {
  api
    .post('/send', {...values})
};
