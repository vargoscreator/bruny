const modal = document.querySelector('.modal')
const main__btn = document.querySelector('.main__btn')
const modalTypeItem = document.querySelectorAll('.modal__type-item');
const modalFuelItem = document.querySelectorAll('.modal__fuel-item');
const modalYearItem = document.querySelectorAll('.modal__year-item');
const modalBudgerItem = document.querySelectorAll('.modal__budget-item');
const modalGiftItem = document.querySelectorAll('.modal__gift-item');
const modal__type = document.querySelector(".modal__type");
const modal__form = document.querySelector(".modal__form");
const modal__close = document.querySelector(".modal__close");
const header__feedback = document.querySelector(".header__feedback");
const feedback = document.querySelector(".feedback");
const feedback__close = document.querySelector(".feedback__close");
const feedback__bg = document.querySelector(".feedback__bg")


main__btn.addEventListener('click', toggleModal);
modal__close.addEventListener('click', toggleModal);
function toggleModal() {
  modal.classList.toggle('show');
}
header__feedback.addEventListener('click', toggleFeedback);
feedback__bg.addEventListener('click', toggleFeedback);
feedback__close.addEventListener('click', toggleFeedback);
function toggleFeedback() {
  feedback.classList.toggle('show');
}
modalTypeItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (index == modalTypeItem.length - 1 && item.classList.contains('active')) {
      item.classList.remove('active');
      return;
    }
    if (index != modalTypeItem.length - 1) {
      modalTypeItem[modalTypeItem.length - 1].classList.remove('active')
    } else {
      modalTypeItem.forEach(item => {
        item.classList.remove('active');
      });
    }
    item.classList.toggle('active');
    if (document.querySelector('.modal__type .active')) {
      document.querySelector('.modal__type .next').classList.remove('unactive');
    } else {
      document.querySelector('.modal__type .next').classList.add('unactive');
    }
    let selectedTypes = [];
    modalTypeItem.forEach(item => {
      if (item.classList.contains('active')) {
        const name = item.querySelector('.modal__name').textContent;
        selectedTypes.push(name);
      }
    });
    const modal__typein = document.querySelector('input[name="modal__type"]');
    modal__typein.value = JSON.stringify(selectedTypes);
  });
});
modalFuelItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    if(index == modalFuelItem.length - 1 && item.classList.contains('active')){
      item.classList.remove('active');
      return;
    }
    if(index != modalFuelItem.length - 1){
      modalFuelItem[modalFuelItem.length - 1].classList.remove('active')
    }else{
      modalFuelItem.forEach(item => {
        item.classList.remove('active');
      });
    }
    item.classList.toggle('active');
    if (document.querySelector('.modal__fuel .active')) {
      document.querySelector('.modal__fuel .next').classList.remove('unactive');
    } else {
      document.querySelector('.modal__fuel .next').classList.add('unactive');
    }
    let selectedTypes = [];
    modalFuelItem.forEach(item => {
      if (item.classList.contains('active')) {
        const name = item.querySelector('.modal__name').textContent;
        selectedTypes.push(name);
      }
    });
    const modal__fuel = document.querySelector('input[name="modal__fuel"]');
    modal__fuel.value = JSON.stringify(selectedTypes);
  });
});
modalYearItem.forEach((item, index) => {
  item.addEventListener('click', () => {    
    if(index == modalYearItem.length - 1 && item.classList.contains('active')){
      item.classList.remove('active');
      return;
    }
    if(index != modalYearItem.length - 1){
      modalYearItem[modalYearItem.length - 1].classList.remove('active')
    }else{
      modalYearItem.forEach(item => {
        item.classList.remove('active');
      });
    }
    item.classList.toggle('active');
    if (document.querySelector('.modal__year .active')) {
      document.querySelector('.modal__year .next').classList.remove('unactive');
    } else {
      document.querySelector('.modal__year .next').classList.add('unactive');
    }
    let selectedTypes = [];
    modalYearItem.forEach(item => {
      if (item.classList.contains('active')) {
        const name = item.querySelector('.modal__name').textContent;
        selectedTypes.push(name);
      }
    });
    const modal__year = document.querySelector('input[name="modal__year"]');
    modal__year.value = JSON.stringify(selectedTypes);
  });
});
modalBudgerItem.forEach(item => {
  item.addEventListener('click', () => {    
    item.classList.toggle('active');
    if (document.querySelector('.modal__budget .active')) {
      document.querySelector('.modal__budget .next').classList.remove('unactive');
    } else {
      document.querySelector('.modal__budget .next').classList.add('unactive');
    }
    let selectedTypes = [];
    modalBudgerItem.forEach(item => {
      if (item.classList.contains('active')) {
        const name = item.querySelector('.modal__name').textContent;
        selectedTypes.push(name);
      }
    });
    const modal__budget = document.querySelector('input[name="modal__budget"]');
    modal__budget.value = JSON.stringify(selectedTypes);
  });
});
modalGiftItem.forEach(item => {
  item.addEventListener('click', () => {   
    modalGiftItem.forEach(item => {
      item.classList.remove('active');
    })
    item.classList.toggle('active');
    if (document.querySelector('.modal__gift .active')) {
      document.querySelector('.modal__gift .next').classList.remove('unactive');
    } else {
      document.querySelector('.modal__gift .next').classList.add('unactive');
    }
    let selectedTypes = [];
    modalGiftItem.forEach(item => {
      if (item.classList.contains('active')) {
        const name = item.querySelector('.modal__name').textContent;
        selectedTypes.push(name);
      }
    });
    const modal__gift = document.querySelector('input[name="modal__gift"]');
    modal__gift.value = JSON.stringify(selectedTypes);
  });
});

const prevButton = document.querySelectorAll('.prev');
const nextButton = document.querySelectorAll('.next');
const blocks = document.querySelectorAll('.modal__type, .modal__fuel, .modal__year, .modal__budget, .modal__gift, .modal__form');

let currentIndex = 0;

prevButton.forEach((item, index) => {
  item.addEventListener('click', () => {
    blocks.forEach(item => {
      item.classList.remove('show');
    });
    currentIndex--;
    blocks[currentIndex].classList.toggle('show');
    hideBtn();
  });
});

nextButton.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (currentIndex < blocks.length - 1 && blocks[currentIndex].querySelector('.modal__block .active')) {
      blocks.forEach(item => {
        item.classList.remove('show');
      });
      currentIndex++;
      blocks[currentIndex].classList.toggle('show');
      hideBtn();
    }
  });
});
function hideBtn() {
  if (modal__form.classList.contains("show")) {
    const header = document.querySelector(".modal__header");
    const title = header.querySelector(".modal__title");
    const logo = document.createElement("div");
    logo.classList.add("modal__logo");
    logo.innerHTML = `
      <img src="images/modal/CheckForm.svg" alt="">
      <div class="modal__title">Дякуємо за відповіді <span>на запитання !</span></div>
    `;
    header.replaceChild(logo, title);

  }
}
window.onload = hideBtn;
const form = document.getElementById("modal__feedback");
const thankYou = document.getElementById("modal__send");
const formtwo = document.getElementById("formtwo");
form.addEventListener("submit", function(event) {
  const modal__logo = document.querySelector(".modal__logo");
  event.preventDefault();
  const formData = new FormData(formtwo);
  fetch('telegram.php', {
    method: 'POST',
    body: formData,
  })
  form.style.display = "none";
  modal__logo.style.display = "none";
  thankYou.style.display = "block";
});
const feedback__inner = document.getElementById("feedback__inner");
const feedback__send = document.getElementById("feedback__send");
const formone = document.getElementById("formone");
feedback__inner.addEventListener("submit", function(event) {
  event.preventDefault();
  const formDatas = new FormData(formone);
  fetch('telegramcall.php', {
    method: 'POST',
    body: formDatas,
  })
  feedback__send.classList.toggle('show');
  setTimeout(function() {
    formone.reset();
    feedback__send.classList.remove('show');
  }, 2000);
});
const phoneInput = document.getElementById("phone");
const phone2 = document.getElementById("phones");
const maskOptions = {
  mask: '+38(000)-000-00-00',
  lazy: true
};
new IMask(phoneInput, maskOptions);
new IMask(phone2, maskOptions);
document.getElementById('first_name').addEventListener('input', function() {
  let that = this;
  let res = /[^A-Za-z\u0400-\u04FF\s]/g.exec(that.value);
  that.value = that.value.replace(res, '');
}, false);
document.getElementById('first_name-modal').addEventListener('input', function() {
  let that = this;
  let res = /[^A-Za-z\u0400-\u04FF\s]/g.exec(that.value);
  that.value = that.value.replace(res, '');
}, false);

const mediaQuery = window.matchMedia('(max-width: 600px)');
const mediaQuery2 = window.matchMedia('(max-width: 1060px)');
const feedbackTitle = document.querySelector('.feedback__title');
function handleMediaQuery(e) {
  if (e.matches) {
    feedbackTitle.innerHTML = 'Залиште Ваші <span>контактні данні:</span>'; 
  } else {
    feedbackTitle.innerHTML = 'Вкажіть Ваші контактні дані і ми Вам передзвонимо';
  }
}
handleMediaQuery(mediaQuery);
mediaQuery.addEventListener('change', handleMediaQuery);

resizeHeight()
function resizeHeight(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', () => {
  resizeHeight()
});