/* eslint-disable linebreak-style */
import SaveGaming from './GameSaving';
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((value) => {
  const obj = JSON.parse(value);
  const save = new SaveGaming(obj.id, obj.created, obj.userInfo);
  return save;
});
