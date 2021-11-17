document.addEventListener("DOMContentLoaded",(e) => {
  const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

if (isMobile.any()) {
    document.body.classList.add('isMobile')
} else {
    document.body.classList.remove('isMobile')
};
  const mobileMenu = document.querySelector('.mobile-menu');
const burgerBtn = document.querySelector('.burger');
// const overlayItem = document.querySelector('.overlay');
if (mobileMenu) {
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
    // overlayItem.classList.toggle('show')
    burgerBtn.classList.toggle('active')
  }
    burgerBtn.addEventListener('click', toggleMobileMenu)
}
;
  const header = document.querySelector('.header');
let headerH = header.scrollHeight;
let pos = window.scrollY;
console.log(pos)
checkPos(headerH, pos)
function checkPos(headerH, pos) {
  pos = window.scrollY;
  headerH = header.scrollHeight;
  if (pos >= headerH) {
    if (!header.classList.contains('fixed')) {
      header.classList.add('fixed')
    }
  } else {
    if (header.classList.contains('fixed')) {
      header.classList.remove('fixed')
    }
  }
}

window.addEventListener('scroll', checkPos);
window.addEventListener('resize', checkPos);;
   // selects
 const parentOfSelects = document.querySelector('.slots-choice');
 const selectsHeaders = document.querySelectorAll('.select__header');
 const selectsItems = document.querySelectorAll('.select__item');

 const selects = document.querySelectorAll('.select');
 if (selectsHeaders.length) {
   for (let i = 0; i < selectsHeaders.length; i++) {
     selectsHeaders[i].addEventListener('click', selectToggle)
   }
   for (let i = 0; i < selectsItems.length; i++) {
     selectsItems[i].addEventListener('click',selectChoose)
   }
   function selectToggle() {
     removeClassActive(this.closest('.select').dataset.select);
     this.closest('.select').classList.toggle('active')
   }
   function selectChoose() {
     const text = this.textContent;
     const dataValue = this.querySelector('input').value;
     const parent = this.closest('.select');
     const current = parent.querySelector('.select__current');
     const currentInput = parent.querySelector('.select__header input');
     const priceItemParent = this.closest('.slots__item-body');
     if (priceItemParent) {
      const priceItem = priceItemParent.querySelector('.slots__item-price');
      const price = this.dataset.price;
      priceItem.setAttribute('current-price', price);
      priceItem.textContent = price + ' $';
     }
     current.textContent = text;
     currentInput.value = dataValue;
     parent.classList.remove('active')
   }

  //  setSelectsCurrentPriceFirstly
   const currentPriceItems = document.querySelectorAll('.slots__item-price[current-price]');
   if (currentPriceItems.length) {
     currentPriceItems.forEach(item => {
       item.textContent = item.getAttribute('current-price') + ' $';
     })
   }
 }
 function removeClassActive(number) {
  for (let i = 0; i < selects.length; i++) {
    if (+number !== +(selects[i].dataset.select)) {
      selects[i].classList.remove('active')
    }
  }
}

const slotsItems = document.querySelectorAll('.slots__item');

slotsItems.forEach(item => {
  item.addEventListener('click', (e) => {
    for (let i = 0; i < slotsItems.length; i++) {
      slotsItems[i].classList.remove('active')
    }
   e.currentTarget.classList.add('active')
  })
})

;
  ;
  // const playBlock = document.querySelector('.play');
// const featuresblock = document.querySelector('.features');
// const featuresblockScrollH = featuresblock.scrollHeight;
// if (document.documentElement.clientWidth >= 1200) {
//     const playBlockPt = +(window.getComputedStyle(playBlock, null).getPropertyValue('padding-top').replace(/\D/g, ''));
//     console.log(playBlockPt)
//     console.log('h',featuresblockScrollH)
//     playBlock.style.paddingTop = (224 * featuresblockScrollH) / 896 + 'px';
//     featuresblock.style.height = (640 * featuresblockScrollH) / 896 + 'px';
// };
  const formAreas = document.querySelectorAll('.form__area');
if (formAreas.length) {
  formAreas.forEach(area => {
    area.addEventListener('keyup', function(e){
      this.style.height = 210 + 'px';
      this.style.height = this.scrollHeight + "px";
    });
  })
};
  document.body.addEventListener('click', (e) => {
  // selects
  const select = e.target.closest('.select');
  if (!select) {
    removeClassActive()
  }
  // /end selects
  const slotsItem = e.target.closest('.slots__item');
  if (!slotsItem && document.querySelector('.slots__item.active')) {
    document.querySelector('.slots__item.active').classList.remove('active')
  }
})
;

  // like news
  // const likeBtns = document.querySelectorAll('.main-content__like');
  // likeBtns.forEach(btn => {
  //   btn.addEventListener('click', (e) => {
  //     e.currentTarget.classList.toggle('active');
  //   })
  // })


});

$(function() {
  if ($("#rateYo")) {
  $("#rateYo").rateYo({
    rating: 1,
    starWidth: "15px",
    normalFill: "transparent",
    ratedFill: '#30BDEF',
    halfStar: true,
    spacing: "4px",
    "starSvg": `<svg  viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.98133 11.004L11.0294 12.9212C11.419 13.1663 11.9028 12.8018 11.7872 12.3502L10.9065 8.9109C10.8817 8.8151 10.8846 8.71431 10.915 8.6201C10.9453 8.52589 11.0018 8.44209 11.078 8.37834L13.8113 6.11974C14.1705 5.82296 13.9851 5.23121 13.5237 5.20148L9.95412 4.97148C9.85798 4.96466 9.76576 4.93087 9.68821 4.87403C9.61066 4.8172 9.55097 4.73966 9.51609 4.65045L8.1848 1.32207C8.14861 1.22738 8.08426 1.14586 8.00031 1.08833C7.91635 1.03081 7.81675 1 7.71474 1C7.61273 1 7.51313 1.03081 7.42917 1.08833C7.34522 1.14586 7.28087 1.22738 7.24468 1.32207L5.91339 4.65045C5.87851 4.73966 5.81882 4.8172 5.74127 4.87403C5.66372 4.93087 5.5715 4.96466 5.47536 4.97148L1.9058 5.20148C1.44437 5.23121 1.259 5.82296 1.61815 6.11974L4.35148 8.37834C4.42766 8.44209 4.48416 8.52589 4.5145 8.6201C4.54483 8.71431 4.54777 8.8151 4.52297 8.9109L3.70626 12.1005C3.56752 12.6423 4.14801 13.0797 4.61556 12.7856L7.44816 11.004C7.52782 10.9536 7.6203 10.9269 7.71474 10.9269C7.80918 10.9269 7.90166 10.9536 7.98133 11.004V11.004Z" stroke="#30BDEF" />
    </svg>`
  });

  $("#rateYo").rateYo()
      .on("rateyo.set", function (e, data) {

      $(this).closest('.rating-wrap').find('.rating-value').val(data.rating)
  });
};
})
