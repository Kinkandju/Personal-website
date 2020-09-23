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

function button (btnType, certificateType, certificateAnother) {
  btnType.addEventListener('click', function() {
    if (certificateType.classList.contains('certificate--closed') || certificateAnother.classList.contains('certificate--opened')) {
      certificateType.classList.remove('certificate--closed');
      certificateType.classList.add('certificate--opened');
      certificateAnother.classList.remove('certificate--opened');
      certificateAnother.classList.add('certificate--closed');
    } else {
      certificateType.classList.add('certificate--closed');
      certificateType.classList.remove('certificate--opened');
    }
  });
}

const btnMgtu = document.querySelector('.education__mgtu');
const certificateMgtu = document.querySelector('.certificate--mgtu');
const btnHtmlAcademy = document.querySelector('.education__html-academy');
const certificateHtml = document.querySelector('.certificate--html');

button (btnMgtu, certificateMgtu, certificateHtml);
button (btnHtmlAcademy, certificateHtml, certificateMgtu);
