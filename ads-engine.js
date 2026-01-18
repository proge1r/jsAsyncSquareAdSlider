const BANNER_CONFIG = [
    { baner: "imgs/ad1.png", time: 3000 },
    { baner: "imgs/ad2.png", time: 2000 },
    { baner: "imgs/ad3.png", time: 5000 },
    { baner: "imgs/ad4.png", time: 4000 }
];

let currentIndex = 0;
let isInterrupted = false;

const imgElement = document.getElementById('ad-image');
const progressLine = document.getElementById('progress-line');
const dotsContainer = document.getElementById('dot-indicators');

// 1. индикаторы (точки)
BANNER_CONFIG.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
});

// 2. функция задержки на промисах
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 3. анимация
function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = 0;
    element.style.transform = 'scale(1.02)';

    function animate() {
        opacity += 0.04;
        element.style.opacity = opacity;
        element.style.transform = `scale(${1.02 - (opacity * 0.02)})`;
        
        if (opacity < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

// 4. смена слайда
async function showSlide(index) {
    currentIndex = (index + BANNER_CONFIG.length) % BANNER_CONFIG.length;
    const ad = BANNER_CONFIG[currentIndex];

    imgElement.src = ad.baner;
    updateDots();
    fadeIn(imgElement);

    animateProgress(ad.time);

    await wait(ad.time);
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function animateProgress(ms) {
    progressLine.style.transition = 'none';
    progressLine.style.width = '0%';
    
    progressLine.offsetHeight; 
    
    progressLine.style.transition = `width ${ms}ms linear`;
    progressLine.style.width = '100%';
}

// 5. бесконечный цикл
async function startSlider() {
    while (true) {
        if (!isInterrupted) {
            await showSlide(currentIndex);
            currentIndex++;
        } else {
            // если было ручное нажатие, просто ждем немного
            isInterrupted = false;
            await wait(100); 
        }
    }
}

// 6. ручное управление
document.getElementById('next-btn').addEventListener('click', () => {
    isInterrupted = true;
    showSlide(currentIndex + 1);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    isInterrupted = true;
    showSlide(currentIndex - 1);
});

// запуск
startSlider();