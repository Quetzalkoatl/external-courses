const previous = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('currentImage');

const images = [
  ['../ex11_js_dom/assets/1.png'],
  ['../ex11_js_dom/assets/2.png'],
  ['../ex11_js_dom/assets/3.png'],
  ['../ex11_js_dom/assets/4.png'],
  ['../ex11_js_dom/assets/5.png'],
];

// Начальный слайд
let allImagesLength = 0;
let temp = images[allImagesLength];

// Длительность анимации (в секундах)
const animationLength = 1;

// Функция задает изображение и стили для него
function imageStyles() {
  current.style.width = '500px';
  current.style.height = '500px';
  current.style.background = `url(${temp})`;
  current.style.borderRadius = '10px';
  current.style.position = 'absolute';
  current.style.left = '50%';
  current.style.top = '50%';
  current.style.transform = 'translate(-50%, -50%)';
  current.style.transition = `background ${animationLength}s ease`;
}

imageStyles();

// Функция отключает кнопки пока не закончится анимация перехода
function disableButtons() {
  previous.setAttribute('disabled', true);
  next.setAttribute('disabled', true);
  setTimeout(() => {
    previous.removeAttribute('disabled');
    next.removeAttribute('disabled');
  }, animationLength * 1000);
}

// Переключение на предыдущий слайд
previous.addEventListener('click', () => {
  if (!allImagesLength) {
    allImagesLength = images.length;
  }
  allImagesLength -= 1;
  temp = images[allImagesLength];
  imageStyles();
  disableButtons();
});

// Переключение на следующий слайд
next.addEventListener('click', () => {
  if (allImagesLength === images.length - 1) {
    allImagesLength = -1;
  }
  allImagesLength += 1;
  temp = images[allImagesLength];
  imageStyles();
  disableButtons();
});
