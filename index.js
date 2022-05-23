const navBtn = document.querySelector(".hamburger");
const menuEl = document.querySelector(".menu");

/*const menuNav = document.querySelector(."menu-container");*/

navBtn.addEventListener("click", () => {
  document.body.classList.toggle("nav-toggle");
  menuNav();

});
function menuNav() {
  if(menuEl.classList.contains("show") === true) {
      menuEl.classList.remove("show");
  } else {
      menuEl.classList.add("show");
  }
}

// Prev and Next images

const prevImg =  document.querySelector(".prev-img");
const nextImg =  document.querySelector(".next-img");
const imgDiv = document.querySelector(".product-imgs");


const imgGallery = ["product-1.jpg",
                    "product-2.jpg",
                    "product-3.jpg",
                    "product-4.jpg"];
let i = 0;

function prevIg() {
   if(i <= 0) i = imgGallery.length;
   i--;
   console.log("Clicked!");
   return setAttr();

}
function nextIg() {
  if (i >= imgGallery.length -1) i = -1;
  i++;
  console.log("Next Clicked!");
  return setAttr();
}

function setAttr() {
    return imgDiv.style.backgroundImage = `url('./images/image-${imgGallery[i]}')`;

}
prevImg.addEventListener("click", prevIg);

nextImg.addEventListener("click", nextIg);

// Add and remove shoes

const minusEl =  document.querySelector(".minus");
const plusEl =  document.querySelector(".plus");
const numberEl = document.querySelector(".number");
let count = 0;

minusEl.addEventListener("click", minusItems);
plusEl.addEventListener("click", plusItems);


function minusItems() {
  count--;
  if (count <= 0) count = 0;
  console.log("minus");
  return numberEl.innerHTML = count;
}
function plusItems() {
  count++;
  console.log("plus");
  return numberEl.innerHTML = count;
}
// Add to charset

const btnEl = document.querySelector(".btn");

//Add cart
const cartImg = document.querySelector(".img-checkout");
const cartValue = document.querySelector(".cart-number");
btnEl.addEventListener("click", addCart);

function addCart() {
  console.log("Add to Cart");
  // read the value from numberEl
  cartValue.innerHTML = count;
  // reset the number
  numberEl.innerHTML = 0;
  const tot = totalPurchase();
  //put the values into the cart div
  cartImg.innerHTML = `<img class='checkout-img' src='./images/image-product-1.jpg'>`;
  priceShow.innerHTML = `$125.00 x ${count}`;
  totPrice.innerText = `$${tot},00`
  /*const popUp = document.getElementsByClassName("popup-cart")[0];
  console.log(popUp);
  popUp.style.visibility = "visible";*/
}

/*Checkout cart*/
const chkOut = document.querySelector(".btn-checkout");
const priceShow = document.querySelector(".price-calc");
const totPrice = document.querySelector(".total-price");


function totalPurchase() {
  const total = 125 * count;
  return total;
}

chkOut.addEventListener('click', checkOut);

function checkOut() {
  console.log("Buy");
}

const deleteEl = document.querySelector(".delete-icon");
deleteEl.addEventListener('click', deleteItems);

//Grab the div items check out
const itemCheckOut = document.querySelector(".item-checkout");

function deleteItems() {
   itemCheckOut.innerHTML = "";
   itemCheckOut.innerHTML = `Your cart is empty`;
   cartValue.innerText = ""
}
//cart icon

const cartDiv =  document.querySelector(".cart-div");
cartDiv.addEventListener('click', yourCart);

function yourCart() {
  if(cartValue.innerText === 0 || cartValue.innerText === "") {
    deleteItems()
  } else {
      addCart();
  }
  //show popup-cart class
  showCart();
}

function showCart() {
  const popUp = document.getElementsByClassName("popup-cart")[0];
      popUp.style.visibility = "visible";
}
const popUp = document.getElementsByClassName("popup-cart")[0];

window.addEventListener('load', () => {
    popUp.style.visibility = "hidden";
});
// DOUBLE CLICK ON Cart
cartDiv.addEventListener('dblclick', () => {
  popUp.style.visibility = "hidden";
})
// Media query

const selectedImg = document.querySelector(".choosen-img");
const firstImg = document.querySelector(".first-link");
const secondImg = document.querySelector(".second-link");
const thirdImg = document.querySelector(".third-link");
const fourthImg = document.querySelector(".fourth-link");

firstImg.addEventListener("click", () => {
  selectedImg.innerHTML = `<img src='./images/image-product-1.jpg'>`;
});
secondImg.addEventListener("click", () => {
  selectedImg.innerHTML = `<img src='./images/image-product-2.jpg'>`;
});
thirdImg.addEventListener("click", () => {
  selectedImg.innerHTML = `<img src='./images/image-product-3.jpg'>`;
});
fourthImg.addEventListener("click", () => {
  selectedImg.innerHTML = `<img src='./images/image-product-4.jpg'>`;
});
