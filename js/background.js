const images = ["1.jpg", "2.jpg", "3.jpg"];

const cimg = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement("img");
bgimg.src = `img/${cimg}`; //아직 js에만 존재

document.body.appendChild(bgimg); //바디에 추가
bgimg.id = "bgImage";
