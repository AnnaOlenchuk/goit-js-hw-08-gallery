import images from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

function createGalleryItem(slide) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = slide.preview;
    galleryImage.alt = slide.description;
    galleryImage.dataset.source = slide.original;
    galleryImage.dataset.index = images.indexOf(slide);

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);

    return galleryItem;
};

const createImageList = images.map(image => createGalleryItem(image));
galleryRef.append(...createImageList);