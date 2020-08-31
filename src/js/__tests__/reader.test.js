import { read } from '../reader';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('resolve', () => {

  const response = read();
  expect(response).toEqual({});
  expect(response).toBeCalledWith('http://server:8080/');
});
