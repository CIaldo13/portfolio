document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-content img');
    const thumbnailsContainer = lightbox.querySelector('.lightbox-thumbnails');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const images = document.querySelectorAll('.media-item img');
    let currentImageIndex = 0;

    const imageArray = Array.from(images);

    // Create thumbnails
    imageArray.forEach((img, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img.src;
        thumbnail.classList.add('lightbox-thumbnail');
        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            switchImage(img.src);
            updateThumbnails();
        });
        thumbnailsContainer.appendChild(thumbnail);
    });

    function updateThumbnails() {
        const thumbnails = thumbnailsContainer.querySelectorAll('.lightbox-thumbnail');
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentImageIndex);
        });
    }

    function switchImage(newSrc) {
        lightboxImg.classList.remove('active');
        setTimeout(() => {
            lightboxImg.src = newSrc;
            lightboxImg.classList.add('active');
            updateThumbnails();
        }, 300);
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            lightbox.classList.add('active');
            switchImage(img.src);
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % imageArray.length;
        switchImage(imageArray[currentImageIndex].src);
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
        switchImage(imageArray[currentImageIndex].src);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') lightbox.classList.remove('active');
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
    });

    // Add active class to initial image
    lightboxImg.addEventListener('load', () => {
        lightboxImg.classList.add('active');
    });
});