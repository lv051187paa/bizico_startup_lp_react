import React, {Fragment} from 'react';
import { Field } from 'react-final-form';

import { error } from '../../../services/validations';

const FeedbackInput = ({name, className, placeholder, validate}) => {

  return (
    <Field name={name.toLowerCase()} validate={validate}>
      {({input, meta}) => {
        const showError = !!error(meta);
        return (
        <div className="input-wrapper">
          {<span className={`input-error ${showError && 'show'}`}>{meta.error}</span>}
          <input {...input} type="text" placeholder={placeholder || name} className={`input ${className}`}/>
        </div>
      )}}
    </Field>
  )
};

export default FeedbackInput;
