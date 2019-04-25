import React from 'react';
import {Form} from 'react-final-form';
import {notification} from 'antd';
import {FormInput, FormMessage} from './formComponents/'
import Button from './formComponents/Button';
import {onFeedback} from '../../services/submit';
import {required, composeValidators, email, minLength} from '../../services/validations';

const FeedbackForm = ({formClass}) => {
//   const openNotification = () => {
//     notification.open({
//       message: 'Notification Title',
//       description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//       onClick: () => {
//         console.log('Notification Clicked!');
//       },
//     });
//   };
  return (
    <Form
      onSubmit={onFeedback}
      render={({submitError, handleSubmit, values}) => (
        <form onSubmit={handleSubmit} className={formClass}>
          <div className="contacts__user-info">
            <FormInput name="Subject" className="contacts__input"/>
            <FormInput name="Email" className="contacts__input" validate={composeValidators(required, email)}/>
          </div>
          <FormMessage name="content" component="textarea" placeholder="Message" className="contacts__message"
                       validate={composeValidators(required, minLength(3))}/>
          <div className="contacts__action">
            <Button title="Send"/>
          </div>
        </form>
      )}
    />
  )
}

export default FeedbackForm;
