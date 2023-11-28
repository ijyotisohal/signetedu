import {
  SET_LANGUAGE,
  FETCH_TRANSLATIONS_REQUEST,
  FETCH_TRANSLATIONS_SUCCESS,
  FETCH_TRANSLATIONS_FAILURE
} from '../actions/types';

const initialState = {
  selectedLanguage: localStorage.getItem('language') || 'en',
  // selectedLanguage: 'en',
  translations: {},
  loading: false,
  error: null
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload
      };
    case FETCH_TRANSLATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_TRANSLATIONS_SUCCESS:
      return {
        ...state,
        translations: {
          ...state.translations,
          [action.payload.language]: action.payload.translations
        },
        loading: false,
        error: null
      };
    case FETCH_TRANSLATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      
    default:
      return state;
  }
};

export default languageReducer;
