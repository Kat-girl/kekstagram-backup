import { isEscapeKey } from './util.js';

const bigPictureModal = document.querySelector('.big-picture');
const closeModalButton = bigPictureModal.querySelector('.big-picture__cancel');

const onKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

// открытие модального окна
function openModal  ()  {
  bigPictureModal.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener ('keydown', onKeyDown);
}

// закрытие модального окна
function closeModal ()  {
  bigPictureModal.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener ('keydown', onKeyDown);
}

const showFullsizePhoto = (data) => {
  const bigPicture = bigPictureModal.querySelector('.big-picture__img').children[0];
  const likesCount = bigPictureModal.querySelector('.likes-count');
  const commentsCount = bigPictureModal.querySelector('.comments-count');
  const photoDescription = bigPictureModal.querySelector('.social__caption');
  bigPicture.src = data.url;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  photoDescription.textContent = data.description;
};

const showComment = (data) => {
  const newComment = document.querySelector('#social__comment').content.querySelector('.social__comment').cloneNode(true);
  newComment.children[0].src = data.avatar;
  newComment.children[0].alt = data.name;
  newComment.children[1].textContent = data.message;
  return newComment;
};

const renderComments = (data) => {
  const fragment = document.createDocumentFragment();
  const socialComments = bigPictureModal.querySelector('.social__comments');
  for (const comment of data) {
    const newComment = showComment (comment);
    fragment.append(newComment);
  }
  socialComments.append(fragment);
};

const showBigPicture = (data) => {
  openModal();

  bigPictureModal.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureModal.querySelector('.comments-loader').classList.add('hidden');

  showFullsizePhoto(data);
  renderComments(data.comments);

  closeModalButton.addEventListener('click', () => {
    closeModal ();
  });
};

export {showBigPicture};
