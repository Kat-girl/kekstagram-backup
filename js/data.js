import {getRandomPositiveInteger, getRandomArrayElement, createIdGenerator, createRandomIdFromRangeGenerator} from './util.js';

const DESCRIPTIONS = [
  'Закат над морем.',
  'Свобода и легкость.',
  'Природа во всей красе - яркие цветы, зеленые листья и голубое небо.',
  'Прекрасное место.',
  'Жизнь наполнена яркими красками.',
  'Красивая девушка, закат.',
  'Пейзаж',
  'Фотография передает ощущение таинственности и загадочности, словно кто-то или что-то скрывается за деревьями.',
  'Загадочный пейзаж.',
  'Наслаждаясь закатом.',
  'Уединение',
  'На берегу озера',
  'Фотография передает ощущение легкости и свободы, словно ты летишь над землей.',
  'На снимке изображен красивый закат над городом, который создает атмосферу романтики и мечтательности.',
  'На фото изображен прекрасный вид на город с высоты птичьего полета, который передает ощущение величия и красоты.',
  'Фотография передает настроение праздника и радости, словно это день рождения или другое торжество.',
  'На снимке можно увидеть красивый букет цветов, который символизирует красоту и нежность.',
  'На фото изображены два человека, стоящие рядом друг с другом, передающие чувство единства и поддержки.',
  'Фотография передает ощущение спокойствия и безмятежности, словно время остановилось и все вокруг замерло.',
  'На снимке изображены две собаки, которые играют вместе, передавая чувство радости и веселья.',
  'На фото передается атмосфера уюта и комфорта, словно ты сидишь в теплой комнате с близкими людьми.',
  'Фотография передает красоту и гармонию природы, словно она является источником вдохновения и силы.',
  'На снимке запечатлены два человека, которые сидят на берегу реки, наслаждаясь природой и друг другом.',
  'В моменте',
  'Праздник!'
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

// для получения 1 или 2 предложений в комментарии
function getCommentMessage() {
  const MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  let message = '';
  for (let i = 0; i <= getRandomPositiveInteger(0, 1); i ++) {
    message = message + getRandomArrayElement(MESSAGES);
  }
  return message;
}

// создаем объект для комментариев
const generateCommentId = createIdGenerator();
const getCommentsDescription = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`,
  message: getCommentMessage(),
  name: getRandomArrayElement(NAMES)
});

// формируем массив объектов для комментариев (как того требует тз)
const getComments = () => Array.from({length: getRandomPositiveInteger(1, 10)}, getCommentsDescription);

// создаем объект для описания фотографий
const generateUserId = createRandomIdFromRangeGenerator (1, 25);
const generatePhotoId = createRandomIdFromRangeGenerator (1, 25);

const  getPhotosDescriptions = () => ({
  id: generateUserId(),
  url: `photos/${  generatePhotoId()  }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: getComments()
});

// генерируем массив из 25 объектов - описаний фотографий
const getSimilarPhotoDescriptions = () => Array.from({length: 25}, getPhotosDescriptions);

export {getSimilarPhotoDescriptions};
