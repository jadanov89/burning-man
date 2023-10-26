import PixabayApiService from './api';


const pixabayApiService = new PixabayApiService();
const galleryEl = document.querySelector('.swiper-wrapper');

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
      <p class="info-item">
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

// Додамо mySwiper
// document.addEventListener('DOMContentLoaded', function () {
//     var mySwiper = new Swiper('.swiper-container', {
//       slidesPerView: 3,
//       spaceBetween: 20,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       breakpoints: {
//         // Додайте адаптивність для зменшення кількості слайдів при розширенні екрану
//         1200: {
//           slidesPerView: 2, // 2 слайди при розширенні 1200px
//         },
//       },
//     });
//   });


document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Початкова кількість слайдів
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Додайте адаптивність для зменшення кількості слайдів при розширенні екрану
      1200: {
        slidesPerView: 3, // 2 слайди при розширенні 1200px
      },
      768: {
        slidesPerView: 2, 
      },
    },
  });
});






// Додамо обробник подій для відкриття зображення через basicLightbox
galleryEl.addEventListener('click', galleryImageClick);

//window.addEventListener("keydown", closeModal);


function galleryImageClick(evt) {
  evt.preventDefault();

    const isGalerryClick = evt.target.classList.contains("gallery__image");

    if(!isGalerryClick) {
      return;
    }

  const bigSizeImage = basicLightbox.create(
    `<img src=${evt.target.dataset.source}>`
  );

  bigSizeImage.show();
}

function closeModal(evt) {
  if (evt.code === "Escape") {
    fullSizeImage.close(() =>
      window.removeEventListener("keydown", closeModal)
    );
  }
}
  