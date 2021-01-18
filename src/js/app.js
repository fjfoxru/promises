import AsyncGameSavingLoader from './asyncGameSavingLoader';
import PromiseGameSavingLoader from './promiseGameSavingLoader';


const asyncGameSavingLoader = new AsyncGameSavingLoader();
const promiseGameSavingLoader = new PromiseGameSavingLoader();

promiseGameSavingLoader.load().then((saving) => {
    console.log(saving, 'promiseGameSavingLoader');
  }, (error) => {
    // ...
  });

asyncGameSavingLoader.load().then((saving) => {
    console.log(saving, 'asyncGameSavingLoader');
  }, (error) => {
    // ...
  });

  

