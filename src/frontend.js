document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.swiper').forEach((container) => {
        const wrapper = container.querySelector('.swiper-wrapper');
        if (!wrapper) return;

        // Add .swiper-slide class to all direct children
        [...wrapper.children].forEach((child) => {
            child.classList.add('swiper-slide');
        });

        const sliderId = container.id;

        const options = {
            loop: container.dataset.loop === 'true',
            autoplay: container.dataset.autoplay === 'true' ? { delay: 3000 } : false,
            slidesPerView: parseInt(container.dataset.slidesPerView || '1')
        };

        if (container.dataset.showNavigation === 'true') {
            options.pagination = {
                el: container.querySelector('.swiper-pagination'),
                clickable: true
            };
        }

        if (container.dataset.showArrows === 'true') {
            options.navigation = {
                nextEl: container.querySelector('.swiper-button-next'),
                prevEl: container.querySelector('.swiper-button-prev')
            };
        } else {
            container.querySelector('.swiper-button-next').style.display = "none";
            container.querySelector('.swiper-button-prev').style.display = "none";
        }

        // Swiper must be available globally from the CDN
        new Swiper(container, options);
    });
});
