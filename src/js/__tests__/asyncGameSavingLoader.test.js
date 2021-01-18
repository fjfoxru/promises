import { AcyncGameSavingLoader } from '../acyncGameSavingLoader';

jest.mock('../acyncGameSavingLoader');

beforeEach(() => {
  jest.resetAllMocks();
});
const acyncGameSavingLoader = new AcyncGameSavingLoader();

test('resolve', () => {
  const response = acyncGameSavingLoader.load();
  expect(response).toEqual({});
  expect(response).toBeCalledWith('http://server:8080/');
});
