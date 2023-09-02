import { showBigPicture } from './show-big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const pictureItem = document.querySelector('#picture').content.querySelector('.picture');

// создаем 1 элемент-фотографию пользователей
const createPictureElement = function (data) {
  const newPictureItem = pictureItem.cloneNode(true);
  const pictureImage = newPictureItem.querySelector('.picture__img');
  const pictureLikes = newPictureItem.querySelector('.picture__likes');
  const pictureCommentsCount = newPictureItem.querySelector('.picture__comments');
  pictureImage.src = data.url;
  pictureLikes.textContent = data.likes;
  pictureCommentsCount.textContent = data.comments.length;

  newPictureItem.addEventListener('click', () => {
    showBigPicture(data);
  }
  );

  return newPictureItem;
};

// помещаем фотографии в контейнер, отображаем их на странице
const showOtherUsersPhotos = function (photos) {
  const fragment = document.createDocumentFragment();
  for (const photo of photos) {
    const pictureElement = createPictureElement (photo);
    fragment.append(pictureElement);
  }
  picturesContainer.append(fragment);
};

export {showOtherUsersPhotos};
