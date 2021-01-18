import json from './parser';
import read from './reader';

export default class AsyncGameSavingLoader {
    async load() {
        try {
            const response = await read();
            const value = await json(response);
            console.log(value);
            return value;        
            } catch {
                console.log('error');
            } finally {
                console.log('done');
            }
    }
}