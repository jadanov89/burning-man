import PixabayApiService from './api';
import { initSwiper } from './swiper';
//import basicLightbox from 'basiclightbox';

const pixabayApiService = new PixabayApiService();
const galleryEl = document.querySelector('.swiper-wrapper');
let currentImage = null; // Змінна для поточного модального зображення

const createImageCard = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `<div class="swiper-slide">
    <a href="${largeImageURL}"><img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" data-source="${largeImageURL}" /></a>
    <div class="info">
      <p class="info-item">
        <b>Likes<br /><span class="stats">${likes}</span></b>
      </p>
      <p class="info-item">
        <b>Views<br /><span class="stats">${views}</span></b>
      </p>
      <p class "info-item">
        <b>Comments<br /><span class="stats">${comments}</span></b>
      </p>
      <p class="info-item">
        <b>Downloads<br /><span class="stats">${downloads}</span></b>
      </p>
    </div>
  </div>`;
};

const generateImagesMarkup = (imagesArray) => {
  return imagesArray.reduce((acc, image) => acc + createImageCard(image), '');
};

async function searchAndDisplayImages() {
  try {
    const images = await pixabayApiService.fetchImages('concert', 10);

    if (images.length > 0) {
      const searchResult = generateImagesMarkup(images);
      galleryEl.innerHTML = searchResult;
    } else {
      console.log('Зображення не знайдено.');
    }
  } catch (error) {
    console.error('Помилка при отриманні зображень:', error);
  }
}

searchAndDisplayImages();

document.addEventListener('DOMContentLoaded', function () {
  initSwiper();
});

// Додамо обробник подій для відкриття зображення через basicLightbox
galleryEl.addEventListener('click', galleryImageClick);

window.addEventListener("keydown", closeModal);

function galleryImageClick(evt) {
  evt.preventDefault();

  const isGalleryClick = evt.target.classList.contains("gallery__image");
  const source = evt.target.dataset.source;

  if (isGalleryClick && source) {
    if (currentImage) {
      currentImage.close(); // Закрити попереднє вікно, якщо воно вже відкрито
    }

    currentImage = basicLightbox.create(`<img src=${source}>`);
    currentImage.show();
  }
}

function closeModal(evt) {
  if (evt.code === "Escape" && currentImage) {
    currentImage.close();
  }
}
