let threeItemsDiv = document.querySelector("#threeItemsDiv");

    for (let i = 0; i < 3; i++) {
        const element = card[i];
        threeItemsDiv.innerHTML += `
  <div class="col-12 col-lg-6 col-xxl-4">
  <div class="p-0 p-lg-2 mt-3 position-relative">
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
</div>
    `
}