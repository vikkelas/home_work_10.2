/* eslint-disable linebreak-style */
import json from './Json';
import read from './Read';

export default class GameSavingLoader {
  static async load() {
    try {
      const readFile = await read();
      const jsonFile = await json(readFile);
      return jsonFile;
    } catch (err) {
      return err.toString();
    }
  }
}
