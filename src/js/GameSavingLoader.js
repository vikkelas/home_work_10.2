/* eslint-disable linebreak-style */
import json from './Json';
import read from './Read';
import SaveGaming from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const readFile = await read();
      const jsonFile = await json(readFile);
      const valueJson = JSON.parse(jsonFile);
      const saveObj = new SaveGaming(valueJson.id, valueJson.created, valueJson.userInfo);
      return saveObj;
    } catch (err) {
      return err.toString();
    }
  }
}
