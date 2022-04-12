// navbar
const navbar = document.querySelector('.navbar_menu');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});

const form = document.querySelector('form.gform');
const username = document.querySelector('#name');
const phone = document.querySelector('#phone');
const address = document.querySelector('#address');
const directmsg = document.querySelector('#message');
const terms = document.querySelector('#terms');

function checkInputs() {
  const usernameValue = username.value.trim();
  const phoneValue = phone.value.trim();
  const addressValue = address.value.trim();
  const directmsgValue = directmsg.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, '공란을 채워주세요.');
    username.focus();
    return false;
  } else {
    setSuccessFor(username);
  }

  if (phoneValue === '') {
    setErrorFor(phone, '공란을 채워주세요.');
    username.focus();
    return false;
  } else {
    setSuccessFor(phone);
  }

  if (addressValue === '') {
    setErrorFor(address, '공란을 채워주세요.');
    username.focus();
    return false;
  } else {
    setSuccessFor(address);
  }

  if (directmsgValue === '') {
    setErrorFor(directmsg, '공란을 채워주세요.');
    username.focus();
    return false;
  } else {
    setSuccessFor(directmsg);
  }

  if (!terms.checked) {
    terms.focus();
    alert('개인정보 수집, 이용에 동의해주세요.');
    return false;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const messageError = formControl.querySelector('.msg_error-text');

  messageError.innerText = message;
  formControl.className = 'inquiry_input error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'inquiry_input';
}

function modal() {
  // Not scroll
  document.body.classList.add('not_scroll');

  var zIndex = 999;
  var modal = document.querySelector('.modal_terms');

  // Background
  var bg = document.createElement('div');
  bg.setStyle({
    position: 'fixed',
    zIndex: zIndex,
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
  });
  document.body.append(bg);

  // Closing modal
  modal
    .querySelector('.modal_close_btn')
    .addEventListener('click', function () {
      bg.remove();
      modal.style.display = 'none';
      document.body.classList.remove('not_scroll');
    });

  modal.setStyle({
    position: 'fixed',
    display: 'block',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    zIndex: zIndex + 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    msTransform: 'translate(-50%, -50%)',
    webkitTransform: 'translate(-50%, -50%)',
  });
}

Element.prototype.setStyle = function (styles) {
  for (var k in styles) this.style[k] = styles[k];
  return this;
};

// navbar toggle button for small screen
const navbarMenu = document.querySelector('.navbar_menu ul');
const navbarToggleBtn = document.querySelector('.navbar_toggle');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// handle click on the 'arrow up' button
const arrowUp = document.querySelector('.btn_arrow-up');
arrowUp.addEventListener('click', () => {
  document.body.scrollIntoView({ behavior: 'smooth' });
});