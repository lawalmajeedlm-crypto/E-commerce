const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: 119,
    colors: [
        {
            code: "black",
            img: "air.png",
        },
        {
            code: "white",
            img: "air2.jpg",
        },
    ],
  },
  {
    id: 2,
    title: "JORDAN",
    price: 149,
    colors: [
        {
            code: "white",
            img: "jordan.jpg",
        },
        {
            code: "brown",
            img: "jordan2.jpg",
        },
    ],
  },
  {
    id: 3,
    title: "BLAZER",
    price: 139,
    colors: [
        {
            code: "red",
            img: "blazer.png",
        },
        {
            code: "green",
            img: "blazer.jpg",
        },
    ],
  },
{
    id: 4,
    title: "CRATER",
    price: 125,
    colors: [
        {
            code: "gray",
            img: "crater.png",
        },
        {
            code: "ash",
            img: "crater2.jpg",
        },
    ],
  },
  {
    id: 5,
    title: "HIPPIE",
    price: 99,
    colors: [
        {
            code: "brown",
            img: "hippie.png",
        },
        {
            code: "black",
            img: "hippie2.jpg",
        },
    ],
  },
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size"); 

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products [index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
   });
});

 currentProductColors.forEach((color,index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
 });

 currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
 });

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
}) 

close.addEventListener("click",()=>{
    payment.style.display="none"
})