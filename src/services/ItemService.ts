import Axios from 'axios';
import Item from '../interfaces/Item';

const URL = `https://246gg84zg8.execute-api.us-west-2.amazonaws.com/dev/items`;

export default class ItemService {
  /** get inventory items from database */
  static getItems() {
    return Axios.get(URL);
  }

  /** update/insert inventory items from/into database */
  static putItems(request: Item) {
    return Axios.put(URL, request);
  }
}
