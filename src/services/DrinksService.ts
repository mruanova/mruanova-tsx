import Axios from 'axios';
import Drink from '../interfaces/Drink';

const URL = `https://246gg84zg8.execute-api.us-west-2.amazonaws.com/dev/drinks`;

export default class DrinksService {
  /** get drinks from database */
  static getDrinks() {
    return Axios.get(URL);
  }

  /** update/insert drinks from/into database */
  static putDrinks(request: Drink) {
    return Axios.put(URL, request);
  }
}
