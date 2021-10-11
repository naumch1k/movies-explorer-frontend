import isValidUrl from './isValidUrl';
import { MOVIES_URL } from './constants';

const getFullImageUrl = (param) => {
  if (isValidUrl(param)) {
    return param;
  }
  /* movies API provides only path which stored .url */
  return `${MOVIES_URL}${param.url}`;
};

export default getFullImageUrl;
