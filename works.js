document.addEventListener('DOMContentLoaded', function() {
    const workTitles = document.querySelectorAll('.work-title');
    
    workTitles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            const workImage = title.closest('.work-item').querySelector('.work-image');
            if (workImage) {
                workImage.style.opacity = '1';
            }
        });
        
        title.addEventListener('mouseleave', () => {
            const workImage = title.closest('.work-item').querySelector('.work-image');
            if (workImage) {
                workImage.style.opacity = '0';
            }
        });
    });
});