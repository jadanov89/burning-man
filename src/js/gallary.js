import PixabayApiService from './api';

const pixabayApiService = new PixabayApiService();
const galleryEl = document.querySelector('.gallery');

async function searchAndDisplayImages() {
  try {
    const images = await pixabayApiService.fetchImages('concert', 3);

    if (images.length > 0) {
      const searchResult = generateImagesMarkup(images);
      galleryEl.insertAdjacentHTML('beforeend', searchResult);
    } else {
      console.log('Зображення не знайдено.');
    }
  } catch (error) {
    console.error('Помилка при отриманні зображень:', error);
  }
}

function createImageCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<div class="photo-card">
    <a href="${largeImageURL}"><img class="card-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
    <div class="info">
      <p class="info-item">
        <b>Likes<br /><span class="stats">${likes}</span></b>
      </p>
      <p class="info-item">
        <b>Views<br /><span class="stats">${views}</span></b>
      </p>
      <p class="info-item">
        <b>Comments<br /><span class="stats">${comments}</span></b>
      </p>
      <p class="info-item">
        <b>Downloads<br /><span class="stats">${downloads}</span></b>
      </p>
    </div>
  </div>`;
}

function generateImagesMarkup(imagesArray) {
  return imagesArray.reduce((acc, image) => acc + createImageCard(image), '');
}

searchAndDisplayImages();
