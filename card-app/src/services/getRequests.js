import { setData } from '../ducks/data'
import { getRandomData } from '../services'

/*************** Get requests ***************************/
export const getData = (isin) => {
  return function(dispatch) {
    const data = getRandomData(isin);
    setData(data, dispatch);
  };
}
