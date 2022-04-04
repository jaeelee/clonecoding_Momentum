const images=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// image 태그 생성 이용하는 방법 
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


// querySelecor 사용하는 방법 
// const bgImage = document.querySelector("#background");
// bgImage.src = `img/${chosenImage}`;

// body태그에 background-image태그로 입력
// const backgroundImage = document.body.style.backgroundImage;
// backgroundImage = `url("../img/${chosenImage}")`;
