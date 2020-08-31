import acyncGameSavingLoader from './acyncGameSavingLoader';
import GameSavingLoader from './GameSavingLoader';


GameSavingLoader.load().then((saving) => {
    console.log(saving);
  }, (error) => {
    // ...
  });

