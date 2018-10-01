// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

(function(){

      var swiper1 = new Swiper('.features__slider', {
      centeredSlides: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<span class="features__bullet-num">' + (index + 1) + '</span>' + '</span>';
        },
      },
      breakpoints: {
        // when window width is <= 640px
        1280: {
          spaceBetween: 40
        }
      },
    });

}());

(function(){
  // code
  var PRODUCTS =
  [
    {
      name: 'Polar iTread',
      model: 'Silver',
      postfix: 'silver',
      img: 'polar-itread-silver-order.jpg',
      price: 27440
    },
    {
      name: 'Polar iTread',
      model: 'Rose Pink',
      postfix: 'pink',
      img: 'polar-itread-pink-order.jpg',
      price: 27440
    }
  ];

  var titles = document.querySelectorAll('.shop__item-title');
  var currentPrice = document.getElementById('item-price');
  var orderPrice = document.getElementById('total-sum-field');

  function init (obj, Arr) {

    obj.forEach(function(prodItem) {
      // console.log(prodItem.model);
      titles.forEach(function(titleElem) {
        if (titleElem.classList.contains('shop__item-title--' + prodItem.postfix)) {
          titleElem.innerHTML = prodItem.name + '<span>' + prodItem.model + '</span>';
        }
      });

      currentPrice.innerText = prodItem.price;
      orderPrice.innerText = prodItem.price;
    });

  }

  init(PRODUCTS, titles);
}());

$( document ).ready(function() {

  $('#silver-item').click(function() {
    $('.shop__show').hide();
    $('.shop__order').show();
  });

  $('#pink-item').click(function() {
    $('.shop__show').hide();
    $('.shop__order').show();
  });

  $('#prev-btn').click(function() {
    $('.shop__show').show();
    $('.shop__order').hide();
  });
});

(function(){
  // code
  var btnSilver = document.getElementById('silver-item');
  var btnPink = document.getElementById('pink-item');
  var selectedImg = document.getElementById('img-item');
  var selectedModel = document.getElementById('model');

  //function init ('domCo') {}

  var btnBuyClickHandler = function(e) {
    if (this.id === 'silver-item') {
      selectedImg.src = 'img/polar-itread-silver-order.jpg'
      selectedModel.value = 'Silver';
    } else {
        selectedImg.src = 'img/polar-itread-pink-order.jpg'
        selectedModel.value = 'Rose Pink';
    }
  };

  if (btnSilver && btnPink) {
    btnSilver.addEventListener('click', btnBuyClickHandler);
    btnPink.addEventListener('click', btnBuyClickHandler);
  }
}());

(function(){
  // code
  var totalSumField = document.getElementById('total-sum-field');
  var controlsBtn = document.querySelectorAll('.btn--control');
  var quantity = document.getElementById('quantity');
  var quantityValue = quantity.value;

  var btnEventHandler = function (e) {

    var ITEMPRICE = 27440; // цена товара
    var totalSum = 0;

    if (e.target.id === 'plusBtn' && quantityValue < 10) {
      quantityValue++;
    } else if (e.target.id === 'minusBtn'  && quantityValue > 1) {
      quantityValue--;
    }

    totalSum = quantityValue * ITEMPRICE;
    quantity.value = quantityValue;
    totalSumField.innerText = totalSum;
  };

  if (controlsBtn) {
    controlsBtn.forEach(function(item) {
      item.addEventListener('click', btnEventHandler);
    });
  }

  if (quantity) {
    quantity.addEventListener('blur', function (e) {
      if (!isNaN(this) && this.value > 10) {
        this.value = 10;
      } else {
          this.value = 1;
      }
    });
  }
}());

(function(){
  // code
  var agreement = document.getElementById('agreement');
  var btnSubmit = document.getElementById('send-btn');
  if (agreement) {
    agreement.addEventListener('change', function(e) {
      if (!agreement.checked) {
        btnSubmit.disabled = true;
      } else {
          btnSubmit.disabled = false;
      }
    });
  }
}());

$(document).ready(function() {
  // code вывод сообщений
  // $('#modal-message').modal('show');
  /*setTimeout(function() {
    $('#modal-message').modal('hide');
  }, 3000);*/
});
