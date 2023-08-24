// Получение случайного целого числа в заданном диапазоне
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Проверка длины строки. Линтер подсказал, как упростить:)
function checkStringLength (string, maxLength) {
  return !(string.length > maxLength);
}

checkStringLength ('hey hey', 140);

// получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// функция-генератор для получения уникальных идентификаторов
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

// функция-генератор для получения уникальных идентификаторов из указанного диапазона, и так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      throw(`Перебраны все числа из диапазона от ${  min  } до ${  max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {getRandomPositiveInteger, getRandomArrayElement, createIdGenerator, createRandomIdFromRangeGenerator};
