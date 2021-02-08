// Functions
const changeContent = (element, tabSelected) => {
  if (element.classList.length !== 2) {
    const activeContent = document.querySelector('.content-active');
    const selectedContent = document.querySelector(`#${tabSelected}`);
    const loader = document.querySelector('.bookshelf_wrapper');
    const contentContainer = document.querySelector(
      '.browser-content-container'
    );

    changeActiveTab(element);

    activeContent.classList.remove('content-active');
    activeContent.classList.add('content-hidden');

    loader.classList.toggle('content-hidden');
    contentContainer.style.backgroundColor = '#1d2d50';

    setTimeout(() => {
      loader.classList.toggle('content-hidden');
      contentContainer.style.backgroundColor = null;

      selectedContent.classList.add('content-active');
      selectedContent.classList.remove('content-hidden');
    }, 2000);
  }
};

const changeActiveTab = (element) => {
  const tabActive = document.querySelector('.tab-item.active');

  tabActive.classList.remove('active');
  element.classList.add('active');
};

// Typed.js

const options = {
  strings: [
    'a Freedom En',
    'an English Teacher',
    'an Fully ',
    'a Full Stack Web Developer',
  ],
  smartBackspace: false,
  fadeOutDelay: 1000,
  loop: true,
  typeSpeed: 40,
};

const typed = new Typed('.typed', options);
