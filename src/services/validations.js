import React from 'react';

// eslint-disable-next-line
const urlRe = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
// eslint-disable-next-line
const emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#$%^&*()+=_])[@!#$%^&*()+=_0-9a-zA-Z]{6,}$/;

// export function password(value, allValues) {
//   if (allValues.password !== allValues.confirmPassword) {
//     return <FormattedMessage id="passwordDoesNotMatch"/>;
//   }
//   return undefined;
// }

export const required = value => {
  if (value && value.filter && value.length === 0) {
    return 'Required';
  }
  return !value ? 'Required' : undefined;
};

export const minLength = (len, fieldName = 'This field') => value => {
  if (value && value.length < len) {
    return `${fieldName} must be at least ${len} characters long`;
  }
  return undefined;
};

// export const maxLength = len => value => {
//   if (value && value.length > len) {
//     return <FormattedMessage id="maxLengthError" values={{len}}/>;
//   }
//   return undefined;
// };

// export function url(value) {
//   if (!value || !value.trim()) return undefined;
//   if (!urlRe.test(value)) {
//     return <FormattedMessage id="fieldShouldContainURL"/>;
//   }
//   return undefined;
// }

export function email(value) {
  if (!emailRe.test(value)) {
    return 'This field should contain @ and . symbols';
  }
  return undefined;
}

// export function passwordCorrect(value) {
//   if (!passwordRe.test(value) && value) {
//     return <FormattedMessage id="fieldShouldContainSymbols"/>;
//   }
//   return undefined;
// }

export const composeValidators = (...validators) => (value, allValues) =>
  validators.reduce(
    (error, validator) => error || validator(value, allValues),
    undefined,
  );

export const validateStatus = meta => meta.touched && meta.valid;
export const error = meta => meta.touched && meta.error;
