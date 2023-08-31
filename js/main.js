import {getSimilarPhotoDescriptions} from './data.js';
import {showOtherUsersPhotos} from './show-other-users-photos.js';

showOtherUsersPhotos(getSimilarPhotoDescriptions());

const bigPictureModal = document.querySelector('.big-picture');
const pictures = document.querySelectorAll('.picture');


pictures.forEach ((picture) => {
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPictureModal.classList.remove('hidden');
  });
});

// закрытие модального окна
const closeModal = function () {
  const closeModalButton = bigPictureModal.querySelector('.big-picture__cancel');

  closeModalButton.addEventListener ('click', () => {
    bigPictureModal.classList.add('hidden');
  });

  document.addEventListener ('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPictureModal.classList.add('hidden');
    }
  });
};

closeModal();
