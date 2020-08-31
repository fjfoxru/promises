import json from './parser';
import read from './reader';

export default class GameSavingLoader {
    static load() {

      return new Promise((resolve, reject) => {

        const value = read()
            .then(response => {
               return json(response);
            })
            .then(response => {
                return response;
            })
        resolve(value);    
      })  


      
    }
  }