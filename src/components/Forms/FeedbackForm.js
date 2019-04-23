import React from 'react';
import {Form, Field} from 'react-final-form';
import FeedbackInput from './formComponents/FeedbackInput'
import Button from './formComponents/Button';
import {onFeedback} from '../../services/submit';
import {required, composeValidators, email, minLength} from '../../services/validations';

const FeedbackForm = ({formClass}) => (
  <Form
    onSubmit={onFeedback}
    render={({submitError, handleSubmit, values}) => (
      <form onSubmit={handleSubmit} className={formClass}>
        <div className="contacts__user-info">
          <FeedbackInput name="Subject" className="contacts__input" validate={composeValidators(required, minLength(3))}/>
          <FeedbackInput name="Email" className="contacts__input" validate={composeValidators(required, email)}/>
        </div>
        <Field name="content" component="textarea" placeholder="Message" className="contacts__message" />
          <div className="contacts__action">
            <Button title="Send"/>
          </div>
      </form>
    )}
  />
)

export default FeedbackForm;
