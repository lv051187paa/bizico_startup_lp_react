import React from 'react';
import {Form, Field} from 'react-final-form';
import FeedbackInput from './formComponents/FeedbackInput'
import Button from './formComponents/Button';
import {onEmailSave} from '../../services/submit';
import {required, composeValidators, email} from '../../services/validations';


const FeedbackForm = ({formClass}) => (
  <Form
    onSubmit={onEmailSave}
    render={({submitError, handleSubmit, values}) => (
      <form onSubmit={handleSubmit} className={formClass}>
        <FeedbackInput name="Email" className="header__info-input" placeholder="Enter you email here for more info" validate={composeValidators(required, email)}/>
        <Button title="Get more info" className="header__info-action"/>
      </form>
    )}
  />
);

export default FeedbackForm;
