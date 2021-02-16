// Data
const activitiesHistory = [];

// DOM
const articles = document.querySelectorAll('.activities-article');
const prevButton = document.querySelector('#previous-article');
const nextButton = document.querySelector('#next-article');

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

    if (selectedContent.id === 'activities' && activitiesHistory.length > 0) {
      showPrevNavBtn();
    } else {
      disablePrevNavBtn();
    }

    activeContent.classList.remove('content-active');
    activeContent.classList.add('content-hidden');

    loader.classList.toggle('content-hidden');
    contentContainer.style.backgroundColor = '#07689f';

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

const addHistoryToNavBtn = (prevArticle, currentArticle) => {
  currentArticle.classList.add('content-hidden');
  prevArticle.classList.remove('content-hidden');

  activitiesHistory.pop();

  disablePrevNavBtn();
};

const disablePrevNavBtn = () => {
  prevButton.classList.add('disabled');
};

const disableNextNavBtn = () => {
  nextButton.classList.add('disabled');
};

const showPrevNavBtn = () => {
  prevButton.classList.remove('disabled');
};

const showNextNavBtn = () => {
  nextButton.classList.remove('disabled');
};

const changeArticle = (element, articleSelected) => {
  const currentArticle = document.querySelector(`.${element}`);
  const nextArticle = document.querySelector(`.${articleSelected}`);

  currentArticle.classList.add('content-hidden');
  nextArticle.classList.remove('content-hidden');

  prevButton.onclick = () => {
    addHistoryToNavBtn(currentArticle, nextArticle);
  };

  activitiesHistory.push({ currentArticle, nextArticle });

  showPrevNavBtn();
};

// Typed.js

const options = {
  strings: [
    'a Freedom En',
    'an English Teacher',
    'an Fully ',
    'a Self-Taught Web Developer',
  ],
  smartBackspace: false,
  fadeOutDelay: 1000,
  loop: true,
  typeSpeed: 40,
};

const typed = new Typed('.typed', options);
