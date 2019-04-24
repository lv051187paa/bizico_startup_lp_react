import React from 'react';
import { Field } from 'react-final-form';

import { error } from '../../../services/validations';

const FormMessage = ({name, className, placeholder, validate}) => {

  return (
    <Field name={name.toLowerCase()} validate={validate}>
      {({input, meta}) => {
        const showError = !!error(meta);
        return (
        <div className="input-wrapper">

          <textarea {...input} placeholder={placeholder || name} className={`input ${className}`}/>
          {<span className={`input-error ${showError && 'show'}`}>{meta.error}</span>}
        </div>
      )}}
    </Field>
  )
};

export default FormMessage;
