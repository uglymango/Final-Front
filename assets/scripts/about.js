const swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: { slidesPerView: 5 },
      991: { slidesPerView: 3 },
      576: { slidesPerView: 2 },
    },
  });
  
  const modal = document.querySelector(".modal");
  const modalCart = document.querySelector(".modal-dialog");
  const closeBtn = document.querySelector(".modal-header .closebtn");
  const sideBarModal = document.querySelector(".sidebar-modal");
  const sideBarModalDialog = document.querySelector(".sidebar-modal .modal-dialog");
  const sideBarCloseBtn = document.querySelector(".sidebar-modal .modal-header .closebtn");
  const shoppingCartIcons = document.querySelectorAll(".fa-bag-shopping");
  const staggeredBars = document.querySelectorAll(".fa-bars-staggered");
  const modalContent = document.querySelector(".modal-dialog .modal-content");
  
  shoppingCartIcons.forEach(icon => icon.addEventListener("click", () => {
    modal.style.display = "block";
    modalCart.style.display = "block";
  }));
  
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalCart.style.display = "none";
  });
  
  staggeredBars.forEach(icon => icon.addEventListener("click", () => {
    sideBarModal.style.display = "block";
    sideBarModalDialog.style.display = "block";
  }));
  
  sideBarCloseBtn.addEventListener("click", () => {
    sideBarModal.style.display = "none";
    sideBarModalDialog.style.display = "none";
  });
  
  function updateCartItemsCount() {
    const itemsCountElement = document.querySelector(".shopping-cart-items-count");
    itemsCountElement.innerText = cart.length.toString();
  }
  
  function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    localStorage.setItem("subtotal", cartSubtotal.toFixed(2));
  }
    