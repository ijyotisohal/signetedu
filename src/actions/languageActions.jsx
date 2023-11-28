import axios from 'axios';
import {
  SET_LANGUAGE,
  FETCH_TRANSLATIONS_REQUEST,
  FETCH_TRANSLATIONS_SUCCESS,
  FETCH_TRANSLATIONS_FAILURE,
  SET_TRANSLATIONS 
} from './types';

export const setLanguage = (language) => {
  localStorage.setItem('selectedLanguage', language); // Store selected language in local storage
  return {
    type: SET_LANGUAGE,
    payload: language
  };
};

export const fetchTranslations = (language) => {
  return (dispatch) => {
    dispatch({ type: FETCH_TRANSLATIONS_REQUEST });

    axios
      .get(`/translations/${language}.json`)
      .then((response) => {
        dispatch({
          type: FETCH_TRANSLATIONS_SUCCESS,
          payload: {
            language: language,
            translations: response.data
          }
        });
      })
      .catch((error) => {
        dispatch({ type: FETCH_TRANSLATIONS_FAILURE, payload: error.message });
      });
  };
};

