
// Slider JS

document.addEventListener("DOMContentLoaded", function () {
  const restaurantContainer = document.querySelector(".card-slider");
  const leftRButton = document.querySelector(".slide-arrow-left");
  const rightRButton = document.querySelector(".slide-arrow-right");

  function updateButtonState() {
    leftRButton.disabled = restaurantContainer.scrollLeft <= 0;
    rightRButton.disabled =
      restaurantContainer.scrollLeft + restaurantContainer.offsetWidth >=
      restaurantContainer.scrollWidth;
  }

  leftRButton.onclick = function () {
    restaurantContainer.scrollBy({
      left: -restaurantContainer.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  rightRButton.onclick = function () {
    restaurantContainer.scrollBy({
      left: restaurantContainer.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  restaurantContainer.addEventListener("scroll", updateButtonState);
  updateButtonState();
});

// Cart JS

document.getElementById("cart-icon").addEventListener("click", function () {
  document.getElementById("cart").classList.toggle("open");
  document.body.classList.toggle("cart-open");
});

document.getElementById("close-cart").addEventListener("click", function () {
  document.getElementById("cart").classList.remove("open");
  document.body.classList.remove("cart-open");
});

// Chat Js

function toggleChat() {
  var chatInterface = document.getElementById("chat-interface");
  var chatIcon = document.getElementById("chat-icon");
  if (chatInterface.style.display === "block") {
    chatInterface.classList.remove("fade-in");
    setTimeout(function () {
      chatInterface.style.display = "none";
    }, 500);
    chatIcon.classList.remove("bi-x");
    chatIcon.classList.add("bi-chat-text-fill");
  } else {
    chatInterface.style.display = "block";
    setTimeout(function () {
      chatInterface.classList.add("fade-in");
    }, 10);
    chatIcon.classList.remove("bi-chat-text-fill");
    chatIcon.classList.add("bi-x");
  }
}

// Rental Product Card JS

let card = [

  {

    "cardId": 1,

    "img1": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/0c956084-24f0-43aa-a15c-c8fe79d7e660/86cf60c8-7a80-4539-a943-6a7be354951e/20240414/thumb-894c9d03-2d8e-4384-889e-40fbacd9e235.jpg",
    "img2": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/0c956084-24f0-43aa-a15c-c8fe79d7e660/86cf60c8-7a80-4539-a943-6a7be354951e/20240414/thumb-3e6a42ea-7897-4fcb-b00c-275a60027f28.jpg",
    "img3": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/0c956084-24f0-43aa-a15c-c8fe79d7e660/86cf60c8-7a80-4539-a943-6a7be354951e/20240414/thumb-c0282cf1-138d-4fe1-9bd3-ab9fca8eacc0.jpg",

    "cardName": "Kubota KX033-4",
    "cardPrice": "$3.3k",
    "cardModel": "2024 Excavator",
    "hours": "8 hrs | Dale, TX",
    "cardPricePerWeek": "$1.1k per week",
    "cardViews": "107 views",

  },
  {

    "cardId": 2,

    "img1": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/c46439ed-461c-4146-980e-039dc671d2fa/f6bd1996-9c0f-41f8-9eb6-5ec900a1c992/20240415/thumb-914b7d8b-a0e1-42f3-bad2-2d98180c741b.jpg",
    "img2": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/c46439ed-461c-4146-980e-039dc671d2fa/f6bd1996-9c0f-41f8-9eb6-5ec900a1c992/20240415/thumb-29a55ad2-9f75-42de-a028-4dcf4f8d112f.jpg",
    "img3": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/c46439ed-461c-4146-980e-039dc671d2fa/f6bd1996-9c0f-41f8-9eb6-5ec900a1c992/20240415/thumb-235765c9-14c6-43ae-abd0-129bb8347a0a.jpg",

    "cardName": "Liugong 9051",
    "cardPrice": "$5k",
    "cardModel": "2024 Excavator",
    "hours": "1 hrs | Wareham, MA",
    "cardPricePerWeek": "$1.7k per week",
    "cardViews": "40 views",

  },
  {

    "cardId": 3,

    "img1": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/6a0d27f5-a5b1-4921-a7c0-ed1e27405565/7e903866-d773-47ce-b54a-884dcfdef3a6/20240216/thumb-dbf2f371-ff4e-434c-a605-3f85d1c0ea69.jpg",
    "img2": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/6a0d27f5-a5b1-4921-a7c0-ed1e27405565/7e903866-d773-47ce-b54a-884dcfdef3a6/20240216/thumb-50431e36-d8bd-47d8-808b-8c0ed43a802f.jpg",
    "img3": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/6a0d27f5-a5b1-4921-a7c0-ed1e27405565/7e903866-d773-47ce-b54a-884dcfdef3a6/20240213/thumb-3cefd1f8-723c-4aad-b87c-a7a1bb80e8ff.jpg",

    "cardName": "Hitachi ZX85USB-5",
    "cardPrice": "$5.8k",
    "cardModel": "2024 Excavator",
    "hours": "5 hrs | Gun Barrel City, TX",
    "cardPricePerWeek": "$1.9k per week",
    "cardViews": "122 views",

  },
  {

    "cardId": 4,

    "img1": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/508f63ef-9d6e-429a-ac35-7b2fb821c1b0/e5fdcbf7-b1aa-4403-b970-e725db0cb746/20240509/thumb-7bcbdb3f-ec97-442f-89db-061ce49450b9.jpg",
    "img2": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/508f63ef-9d6e-429a-ac35-7b2fb821c1b0/e5fdcbf7-b1aa-4403-b970-e725db0cb746/20240509/thumb-03e8f79a-c3f6-486f-a9b5-243be67a0e7f.jpg",
    "img3": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/508f63ef-9d6e-429a-ac35-7b2fb821c1b0/e5fdcbf7-b1aa-4403-b970-e725db0cb746/20240509/thumb-e8d61396-b40c-45cb-87a9-2d35ba07ce56.jpg",

    "cardName": "Kubota KX057-5",
    "cardPrice": "$3.5k",
    "cardModel": "2024 Excavator",
    "hours": "10 hrs | Jonesville, VA",
    "cardPricePerWeek": "$1.2k per week",
    "cardViews": "2 views",

  },
  {

    "cardId": 5,

    "img1": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/370e5d01-ed0b-4035-8281-a0a1d446533a/7d551358-8054-4160-91ad-8fcfb13c7e54/20230823/thumb-ade11ac8-d50b-494a-885e-06942eef887c.jpg",
    "img2": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/370e5d01-ed0b-4035-8281-a0a1d446533a/7d551358-8054-4160-91ad-8fcfb13c7e54/20230823/thumb-576aed07-5820-4047-b55c-632970c3f996.jpg",
    "img3": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/370e5d01-ed0b-4035-8281-a0a1d446533a/7d551358-8054-4160-91ad-8fcfb13c7e54/20230823/thumb-2adcc509-a4ac-4b0f-a511-bdd61a2d4454.jpg",

    "cardName": "Caterpillar 317 GC",
    "cardPrice": "$13k",
    "cardModel": "2023 Excavator",
    "hours": "40 hrs | Kerens, TX",
    "cardPricePerWeek": "$4.3k per week",
    "cardViews": "119 views",

  },
  {

    "cardId": 6,

    "img1": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/c46439ed-461c-4146-980e-039dc671d2fa/f1a2f3c2-ed93-49f4-b624-8d6a8e9d319d/20240408/thumb-55ad768b-f4e5-4cb4-955d-f51c3082a77a.jpg",
    "img2": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/c46439ed-461c-4146-980e-039dc671d2fa/f1a2f3c2-ed93-49f4-b624-8d6a8e9d319d/20240408/thumb-4db2fe86-fd13-475e-bbe0-f22ab8db6d21.jpg",
    "img3": "https://kimberrubblstg.blob.core.windows.net/pubweb/inventory/c46439ed-461c-4146-980e-039dc671d2fa/f1a2f3c2-ed93-49f4-b624-8d6a8e9d319d/20240408/thumb-4128e0b8-83d6-4631-b199-dffd9d11de71.jpg",

    "cardName": "LiuGong 909ECR",
    "cardPrice": "$6.4k",
    "cardModel": "2023 Excavator",
    "hours": "435 hrs | Wareham, MA",
    "cardPricePerWeek": "$2.1k per week",
    "cardViews": "20 views",

  },

]


// Items Page JS



let div = document.querySelector("#card-div")

card.forEach(element => {
  div.innerHTML += `
  <div class="col-12 col-md-6 col-xxl-4">
  <a href="./single-item.html" class="text-decoration-none text-black">
  <div class="p-2 mt-3 position-relative">
      <div id="carousel-slider${element.cardId}" class="carousel slide card-cus-slide-sty">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img class="w-100"
                      src="${element.img1}" alt="...">
              </div>
              <div class="carousel-item">
                  <img class="w-100" src="${element.img2}" alt="...">
              </div>
              <div class="carousel-item">
                  <img class="w-100" src="${element.img3}" class="d-block carousel-img"
                      alt="...">
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel-slider${element.cardId}" data-bs-slide="prev">
    <i class="bi bi-chevron-left pb-2 px-2 fs-2 custom-carousel-control-prev-icon"></i>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carousel-slider${element.cardId}" data-bs-slide="next">
    <i class="bi bi-chevron-right pb-2 px-2 fs-2 custom-carousel-control-next-icon"></i>
    <span class="visually-hidden">Next</span>
</button>
      </div>

      <div class="card-cus-slide-price-sty">
          <div class="text-center">
              <h3 class="fw-bold">${element.cardPrice}</h3>
              <p style="font-size: 12px;">PER MONTH</p>
          </div>
      </div>
      <div class="left-triangle-cus-sty-css"></div>

      <div class="product-card-text">
          <div class="float-start">
              <h3 class="m-0">${element.cardName}</h3>
              <p class="fw-semibold m-0" style="font-size: 14px;">${element.cardModel}</p>
              <p class="fw-normal m-0" style="font-size: 14px;">${element.hours}</p>
              <p class="fw-semibold my-1 m-0 rounded-2 px-2 py-1 w-75"
                  style="background-color: #cceae7; font-size: 14px; color: #046e64!important;">
                  <i class="bi bi-shield-check"></i> 0 cancels in the past 3 months</p>
              <div>
                  <p class="d-inline-block border border-1 border-black rounded-4 px-2 m-0"
                      style="font-size: 14px;">Quick Coupler - $0</p>
              </div>
              <div class="my-2">
                  <button class="btn btn-outline-dark px-5 px-xxl-4 fw-bold">Details</button>
                  <br class="d-block d-sm-none d-md-block d-xl-none">
                  <button class="btn btn-dark px-xl-4 px-xxl-3 fw-bold mt-1 mt-sm-0 mt-md-1 mt-lg-1 mt-xl-1 mt-xxl-0">Add
                      To
                      Cart</button>
              </div>
          </div>

          <div class="float-end">
              <a class="fw-semibold" href="#"
                  style="color: #009688!important;">${element.cardPricePerWeek}</a>
              <p class="fw-semibold"><i
                      class="bi bi-eye text-danger me-2"></i>${element.cardViews}</p>
          </div>
      </div>
</div>
</a>
</div>
    `
})


// Range Slider JS



// Aside Button JS 

function toggleDisplay(view, button) {
  var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function (btn) {
      btn.classList.remove('active');
  });

  button.classList.add('active');

  if (view === 'list') {
      document.getElementById('display-list').style.display = 'block';
      document.getElementById('display-map').style.display = 'none';
  } else if (view === 'map') {
      document.getElementById('display-list').style.display = 'none';
      document.getElementById('display-map').style.display = 'block';
  }
}


// Fliter


var interface = document.getElementById('filter-interface');
  var button = document.getElementById('filter-button');

  button.addEventListener('click', function() {
    interface.style.display = 'block';
  });

  function closeInterface() {
    interface.style.display = 'none';
  }

  var interface = document.getElementById('filter-interface');

  function toggleInterface() {
    if (interface.style.display === 'block') {
      interface.style.display = 'none';
    } else {
      interface.style.display = 'block';
    }
  }



// Slider Hours JS


$(document).ready(function() {
  $("#slider-hrs").slider({
    range: true,
    min: 0,
    max: 31200,
    step: 1,
    values: [0, 31200], 
    slide: function(event, ui) {
      $("#min-hours").html(ui.values[0]);

      var suffix = '';
      if (ui.values[1] == $("#max-hours").data('max')) {
        suffix = ' +';
      }
      $("#max-hours").html(ui.values[1] + suffix);
    }
  });
});


// Slider Horsepower JS
$(document).ready(function() {
  $("#slider-hp").slider({
    range: true,
    min: 88,
    max: 348,
    step: 1,
    values: [88, 348],
    slide: function(event, ui) {
      $("#min-hp").html(ui.values[0]);

      var suffix = '';
      if (ui.values[1] == $("#max-hp").data('max')) {
        suffix = ' +';
      }
      $("#max-hp").html(ui.values[1] + suffix);
    }
  });
});


// Slider Year JS
$(document).ready(function() {
  $("#slider-year").slider({
    range: true,
    min: 2002,
    max: 2024,
    step: 1,
    values: [2002, 2024],
    slide: function(event, ui) {
      $("#min-year").html(ui.values[0]);

      var suffix = '';
      if (ui.values[1] == $("#max-year").data('max')) {
      }

      $("#max-year").html(ui.values[1] + suffix);
    }
  });
});


// For Responsive
// Slider Hours JS


$(document).ready(function() {
  $("#slider-hrs-resp").slider({
    range: true,
    min: 0,
    max: 31200,
    step: 1,
    values: [0, 31200], 
    slide: function(event, ui) {
      $("#min-hours-resp").html(ui.values[0]);

      var suffix = '';
      if (ui.values[1] == $("#max-hours-resp").data('max')) {
        suffix = ' +';
      }
      $("#max-hours-resp").html(ui.values[1] + suffix);
    }
  });
});


// Slider Horsepower JS
$(document).ready(function() {
  $("#slider-hp-resp").slider({
    range: true,
    min: 88,
    max: 348,
    step: 1,
    values: [88, 348],
    slide: function(event, ui) {
      $("#min-hp-resp").html(ui.values[0]);

      var suffix = '';
      if (ui.values[1] == $("#max-hp-resp").data('max')) {
        suffix = ' +';
      }
      $("#max-hp-resp").html(ui.values[1] + suffix);
    }
  });
});


// Slider Year JS
$(document).ready(function() {
  $("#slider-year-resp").slider({
    range: true,
    min: 2002,
    max: 2024,
    step: 1,
    values: [2002, 2024],
    slide: function(event, ui) {
      $("#min-year-resp").html(ui.values[0]);

      var suffix = '';
      if (ui.values[1] == $("#max-year-resp").data('max')) {
      }

      $("#max-year-resp").html(ui.values[1] + suffix);
    }
  });
});


// Search Bar For Resp

function toggleSearch() {
        var searchBar = document.getElementById('searchBar');
        if (searchBar.style.display === 'none') {
            searchBar.style.display = 'block';
        } else {
            searchBar.style.display = 'none';
        }
    }