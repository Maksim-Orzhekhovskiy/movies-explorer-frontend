const BASE_URL = "https://api.diploma.films.nomoredomains.rocks";
const BEATFILM_MOVIES_URL = "https://api.nomoreparties.co";

const LAPTOP_SCREEN_WIDTH = 1280;
const TABLET_SCREEN_WIDTH = 768;
const MOBILE_SCREEN_WIDTH = 320;

const SIGNUP_ENDPOINT = "/signup";
const SIGNIN_ENDPOINT = "/signin";
const MAIN_ENDPOINT = "/";
const MOVIES_ENDPOINT = "/movies";
const SAVED_MOVIES_ENDPOINT = "/saved-movies";
const PROFILE_ENDPOINT = "/profile";
const CURRENT_USERS_ENDPOINT = "/users/me";
const WILDCARD_ENDPOINT = "*";

const DURATION_PROPERTY = "duration";
const DURATION_THRESHOLD = 40;

const HIGH_RES_DISPLAYED_AMOUNT = 12;
const HIGH_RES_ADD_CARD = 3;

const MIDDLE_RES_DISPLAYED_AMOUNT = 8;
const MIDDLE_RES_ADD_CARD = 2;

const LOW_RES_DISPLAYED_AMOUNT = 5;
const LOW_RES_ADD_CARD = 2;

const INPUT_OPTIONS = {
  name: {
    required: "Введите своё имя",
    minLength: {
      value: 2,
      message: "Необходимо больше 2-ух символов",
    },
    maxLength: {
      value: 30,
      message: "Максимальное кол-во символов 30",
    },
    pattern: {
      value: /^[А-Яа-я-]+$/,
      message: "Пожалуйста, используйте только кириллицу",
    },
  },
  email: {
    required: "Введите email",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Пожалуйста введите корректный email",
    },
  },
  password: {
    required: "Это обязательное поле",
    minLength: {
      value: 6,
      message: "Пароль должен состоять, минимум из 6 символов",
    },
  },
};

export {
  BASE_URL,
  BEATFILM_MOVIES_URL,
  LAPTOP_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
  MOBILE_SCREEN_WIDTH,
  SIGNUP_ENDPOINT,
  SIGNIN_ENDPOINT,
  MAIN_ENDPOINT,
  MOVIES_ENDPOINT,
  SAVED_MOVIES_ENDPOINT,
  PROFILE_ENDPOINT,
  CURRENT_USERS_ENDPOINT,
  WILDCARD_ENDPOINT,
  DURATION_PROPERTY,
  DURATION_THRESHOLD,
  HIGH_RES_DISPLAYED_AMOUNT,
  HIGH_RES_ADD_CARD,
  MIDDLE_RES_DISPLAYED_AMOUNT,
  MIDDLE_RES_ADD_CARD,
  LOW_RES_DISPLAYED_AMOUNT,
  LOW_RES_ADD_CARD,
  INPUT_OPTIONS,
};
