const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products =[
    {
    id: 1,
    title: "Air Force",
    price: 199,
    colors: [
        {
          code: "black",
          img: "air.png",
        },
        {
          code: "darkblue",
          img: "air2.jpg",
        },
    ],
},


]

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});