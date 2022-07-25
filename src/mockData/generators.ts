import { Names } from './types';

const getRandomNumber = (min: number, max: number): number => {
  const calcMin = Math.ceil(min);
  const calcMax = Math.floor(max);

  return Math.floor(Math.random() * (calcMax - calcMin + 1)) + calcMin;
};

const getRandomString = (array: string[]): string => {
  const randomNumber = getRandomNumber(0, array.length - 1);

  return array[randomNumber];
};

export const getFullName = (names: Names): string => {
  return `${getRandomString(names.nameArray)} ${getRandomString(
    names.surNameArray
  )}`;
};

const getNum = (count: number): string =>
  Array(count)
    .fill(0)
    .map(() => Math.floor(Math.random() * 10))
    .join('');

export const getPhone = (): string => `+79${getNum(9)}`;
