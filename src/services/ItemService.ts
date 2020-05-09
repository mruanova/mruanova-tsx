import Axios from 'axios';
import Item from '../interfaces/Item';

const URL = `https://246gg84zg8.execute-api.us-west-2.amazonaws.com/dev/items`;

export default class ItemService {
  /** get */
  static getItems() {
    return Axios.get(URL);
  }

  /** update */
  static putItems(request: Item) {
    return Axios.put(URL, request);
  }
}
