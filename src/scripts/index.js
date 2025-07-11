import gsap from "gsap";

const product = document.querySelector('.product'),
    productItem = document.querySelectorAll('.product_item');

const showGallery = (product) => {
    const productFigure = product.querySelectorAll('.product_figure');
    const productGalleryFigure = product.querySelectorAll('.product_gallery_figure');

    const tlGallery = gsap.timeline({ paused: true, reversed: true });

    tlGallery
        .to(productFigure, {
            duration: 1.1,
            scale: 1.05,
            ease: 'power4.inOut',
        })
        .to(
            productGalleryFigure,
            {
                duration: 0.8,
                y: 0,
                ease: 'power4.inOut',
                stagger: 0.08,
            },
            0
        );

    product.addEventListener('mouseenter', () => tlGallery.play());
    product.addEventListener('mouseleave', () => tlGallery.reverse());

    changeMedia(product);
};

const changeMedia = (product) => {
    const frameImage = product.querySelectorAll('.product_image');
    const productGalleryFigure = product.querySelectorAll('.product_gallery_image');

    productGalleryFigure.forEach((el) => {
        el.addEventListener('click', (e) => {
            const getSrc = e.target.src;

            gsap.timeline()
                .to(frameImage, {
                    duration: 0.48,
                    autoAlpha: 0,
                    ease: 'power4.out',
                })
                .set(frameImage, { attr: { src: getSrc } })
                .to(frameImage, {
                    duration: 0.48,
                    autoAlpha: 1,
                    ease: 'power4.out',
                });
        });
    });
};

window.onload = () => productItem.forEach((product) => showGallery(product));
