const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav ul li a');

let currentSection = 0;

function checkSection() {
    const sections = document.querySelectorAll('main section');
    const sectionTop = sections[currentSection].offsetTop;
    const sectionHeight = sections[currentSection].offsetHeight;
    const windowHeight = window.innerHeight;

    if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionTop + sectionHeight - windowHeight) {
        return;
    }

    for (let i = 0; i < sections.length; i++) {
        if (window.pageYOffset >= sections[i].offsetTop && window.pageYOffset <= sections[i].offsetTop + sections[i].offsetHeight - windowHeight) {
            currentSection = i;
            break;
        }
    }

    links.forEach((link) => {
        link.classList.remove('active');
    });

    links[currentSection].classList.add('active');
}

function changeNavColor() {
    if (window.pageYOffset >= 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

function carousel() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    const carouselWidth = carousel.offsetWidth;
    let currentItem = 0;

    function moveCarousel() {
        carouselItems.forEach((item, index) => {
            if (index === currentItem) {
                item.style.transform = translateX(${carouselWidth },);
            } else {
                item.style.transform = translateX(${carouselWidth , (index - 1)},);
            }
        });
     }

    function nextCarousel() {
        currentItem++;
        if (currentItem >= carouselItems.length) {
            currentItem = 0;
        }
        moveCarousel();
    }

    function prevCarousel() {
        currentItem--;
        if (currentItem < 0) {
            currentItem = carouselItems.length - 1;
        }
        moveCarousel();
    }

    carousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextCarousel, 3000);
    });

    let carouselInterval = setInterval(nextCarousel, 3000);

    moveCarousel();
}

window.addEventListener('scroll', () => {
    checkSection();
    changeNavColor();
});

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.hash);
        const targetSectionTop = targetSection.offsetTop;

        window.scrollTo({
            top: targetSectionTop,
            behavior: 'smooth'
        });
    });
});

carousel();