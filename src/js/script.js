const toggle = document.querySelector('.page-header__toggle');
const navigation = document.querySelector('.navigation');

  navigation.classList.remove('navigation--nojs');
  toggle.classList.remove('page-header__toggle--nojs');

  toggle.addEventListener('click', function() {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
    toggle.classList.remove('page-header__toggle--opened');
    toggle.classList.add('page-header__toggle--closed');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
    toggle.classList.add('page-header__toggle--opened');
    toggle.classList.remove('page-header__toggle--closed');
  }
});

const btnHtmlAcademy = document.querySelector('.education__html-academy');
const certificate = document.querySelector('.certificate');

btnHtmlAcademy.addEventListener('click', function() {
  if (certificate.classList.contains('certificate--closed')) {
    certificate.classList.remove('certificate--closed');
    certificate.classList.add('certificate--opened');
  } else {
    certificate.classList.add('certificate--closed');
    certificate.classList.remove('certificate--opened')
  }
});
