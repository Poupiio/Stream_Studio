var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
});

const images = document.querySelectorAll('.zoomIn');
const windowWidth = window.innerWidth;

images.forEach((img) => {
    img.addEventListener('click', () => {
        img.classList.toggle('zoom');
    })
})

function arrowDirection() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 895) {
        changeArrow.innerHTML = "&#8594;";
    } else {
        changeArrow.innerHTML = "&#8595;";
    }
}

window.addEventListener('resize', arrowDirection);
window.addEventListener('load', arrowDirection);