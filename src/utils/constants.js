export const MAIN_API = 'https://api.moviesnaumchik.xyz';
export const MOVIES_URL = 'https://api.nomoreparties.co';
export const MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';

export const SHORT_FILM_MAX_DURATION = 40;

export const patterns = {
  NAME: '[a-zA-Z -]{2,30}',
  EMAIL: '^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$',
};

export const customErrorMessages = {
  NAME: 'Please match requested format: a-z, - or _',
  EMAIL: 'Please match requested format: johnsmith@gmail.com',
  PASSWORD: 'Must be at least 8 characters',
};

export const registrationErrorMessages = {
  CONFLICT: 'This email is already registered',
  BAD_REQUEST: 'There was a problem creating your profile. Please try again later',
};

export const loginErrorMessages = {
  INVALID_CREDENTIALS: 'The email or password you entered is incorrect',
  UNAUTHORIZED: 'Authorization failed. Token does not match requested format',
  BAD_REQUEST: 'Authorization failed. Token is incorrect',
};

export const profileErrorMessages = {
  SUCCESS: 'Your profile has been updated',
  CONFLICT: 'This email is already registered',
  BAD_REQUEST: 'There was a problem updating your profile. Please try again later',
};

export const SERVER_ERROR_MESSAGE = 'The server encountered an error. This could be due to a problem with your Internet connection. Please try again later';

export const DEFAULT_ERROR_MESSAGE = 'The Server Encountered an Error. Please try again later';
