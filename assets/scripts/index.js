const clockImage = document.querySelector(".clock-section .clockimg");
new simpleParallax(clockImage, { overflow: true });

const mySwiper = new Swiper(".swiper-container", {
  speed: 2000,
  direction: "horizontal",
  pagination: { el: ".swiper-pagination", dynamicBullets: true },
  zoom: true,
  autoplay: { delay: 4000, disableOnInteraction: false },
  loop: true,
});

const endDate = new Date();
endDate.setDate(endDate.getDate() + 15);

function updateCountdown() {
  const now = new Date();
  const timeDifference = endDate - now;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);

const shoppingCartIcons = document.querySelectorAll(".fa-bag-shopping");
const modalCart = document.querySelector(".modal-dialog");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal-header .closebtn");

const sideBarModal = document.querySelector(".sidebar-modal");
const sideBarModalDialog = document.querySelector(".sidebar-modal .modal-dialog");
const sideBarCloseBtn = document.querySelector(".sidebar-modal .modal-header .closebtn");
const staggeredBars = document.querySelectorAll(".fa-bars-staggered");

const productContainer = document.querySelector(".navbar-cart-product");
const subtotal = document.querySelector(".float-right");
let cart = [];
let cartSubtotal = 0;

shoppingCartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    modal.style.display = "block";
    modalCart.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalCart.style.display = "none";
});

staggeredBars.forEach((icon) => {
  icon.addEventListener("click", () => {
    sideBarModal.style.display = "block";
    sideBarModalDialog.style.display = "block";
  });
});

sideBarCloseBtn.addEventListener("click", () => {
  sideBarModal.style.display = "none";
  sideBarModalDialog.style.display = "none";
});

const products = [
];

const itemContainer = document.querySelector(".item-container");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = parseInt(event.target.dataset.productId);
    const product = products.find((p) => p.id === productId);

    if (product) {
      const cartItem = cart.find((item) => item.id === productId);
      if (cartItem) {
        cartItem.count++;
        updateCartItemQuantity(cartItem);
      } else {
        cart.push({ id: productId, count: 1, ...product });
        renderCartItem(product);
      }

      updateSubtotal();
    } else {
      console.log(`Product with ID ${productId} not found.`);
    }
  });
});

function renderCartItem(product) {
}

function updateCartItemQuantity(cartItem) {
}

function updateSubtotal() {
}

function removeCartItem(productId) {
}

function loadCart() {
}

function clearCart() {
}

if (localStorage.getItem("shoppingCart") != null) {
  loadCart();
} else {
  updateSubtotal();
}

const clearCartButton = document.querySelector(".btn-danger");
clearCartButton.addEventListener("click", () => {
  clearCart();
});

const expandableSections = [
  { link: ".shop.responsive-footer-tags", menu: ".shop.expand-lg-collapse" },
  { link: ".company.responsive-footer-tags", menu: ".company.expand-lg-collapse" },
  { link: ".account.responsive-footer-tags", menu: ".account.expand-lg-collapse" },
];

expandableSections.forEach((section) => {
  const link = document.querySelector(section.link);
  const menu = document.querySelector(section.menu);
  const expandablePlus = document.querySelector(section.link + " .expandable-plus");
  const expandableMinus = document.querySelector(section.link + " .expandable-minus");

  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (menu.style.display === "none") {
      menu.style.display = "block";
      expandablePlus.style.transform = "rotate(90deg)";
      expandablePlus.style.opacity = 0;
      expandableMinus.style.transform = "rotate(0)";
      expandableMinus.style.opacity = 1;
    } else {
      menu.style.display = "none";
      expandablePlus.style.transform = "rotate(0)";
      expandablePlus.style.opacity = 1;
      expandableMinus.style.transform = "rotate(-90deg)";
      expandableMinus.style.opacity = 0;
    }
  });
});

const registerBtn = document.querySelector(".nav.list-inline .register");
const loginPanel = document.querySelector(".login.tab-panel");
const registerPanel = document.querySelector("#loginModalTabRegister");
const faUserBtns = document.querySelectorAll(".fa-user");
const loginModal = document.querySelector(".login-modal");
const closeBtnLogin = document.getElementById("login-closebtn");

registerBtn.addEventListener("click", () => {
  loginPanel.style.display = "none";
  registerPanel.style.display = "block";
});

faUserBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    loginModal.style.display = "block";
  });
});

closeBtnLogin.addEventListener("click", () => {
  loginModal.style.display = "none";
});
