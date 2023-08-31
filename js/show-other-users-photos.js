const picturesContainer = document.querySelector('.pictures');
const pictureItem = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

// создаем 1 элемент-фотографию пользователей
const createPictureElement = function ({url, likes, comments}) {
  const newPictureItem = pictureItem.cloneNode(true);
  const pictureImage = newPictureItem.querySelector('.picture__img');
  const pictureLikes = newPictureItem.querySelector('.picture__likes');
  const pictureCommentsCount = newPictureItem.querySelector('.picture__comments');
  pictureImage.src = url;
  pictureLikes.textContent = likes;
  pictureCommentsCount.textContent = comments.length;
  fragment.append(newPictureItem);
  return fragment;
};

// помещаем фотографии в контейнер, отображаем их на странице
const showOtherUsersPhotos = function (photos) {
  for (const photo of photos) {
    const pictureElement = createPictureElement (photo);
    picturesContainer.append(pictureElement);
  }
};

export {showOtherUsersPhotos};
