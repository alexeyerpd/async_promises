import { GameSavingLoader } from './js/gameSavingLoader';

GameSavingLoader.load().then(
  (saving) => {
    console.log(saving);
  },
  (error) => {
    console.error(error);
  },
);
