export const BASE_URL = 'https://api.naumch1k.students.nomoredomains.club';

export const registrationErrorMessages = {
  CONFLICT: 'Пользователь с таким email уже существует.',
  BAD_REQUEST: 'При регистрации пользователя произошла ошибка.',
};

export const loginErrorMessages = {
  INVALID_CREDENTIALS: 'Вы ввели неправильный логин или пароль.',
  UNAUTHORIZED: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  BAD_REQUEST: 'При авторизации произошла ошибка. Переданный токен некорректен.',
};

export const profileErrorMessages = {
  CONFLICT: 'Пользователь с таким email уже существует.',
  BAD_REQUEST: 'При обновлении профиля произошла ошибка.',
};

export const DEFAULT_ERROR_MESSAGE = 'На сервере произошла ошибка.';