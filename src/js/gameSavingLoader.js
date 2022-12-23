import { GameSaving } from './gameSaving';
import { json } from './parser';
import { read } from './reader';

export class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read());
    })
      .then(json)
      .then((value) => new GameSaving(JSON.parse(value)));
  }
}
