import t from './localization';

export const required = message => value => value ? undefined : t(message);

export const max = (maxLength, message) => value =>
  value && value.length > maxLength
    ? t(message)
    : undefined;

export const min = (minLength, message) => value =>
  value && value.length < minLength
    ? t(message)
    : undefined;

export const email = message => value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? t(message)
    : undefined;

export const equals = (message, fieldPassword, fieldConfirmPassword) => (field, values) =>
  values[fieldPassword] !== values[fieldConfirmPassword]
    ? t(message)
    : undefined;
