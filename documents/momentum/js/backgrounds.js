const images = ["01.JPG", "02.JPG", "03.JPG"];

const chosenImage = images[Math.floor((Math.random() * images.length))];

const bodyStyle = document.body.style;

bodyStyle.backgroundImage= `url('img/${chosenImage}')`;
bodyStyle.backgroundPosition = "center center";
bodyStyle.backgroundOrigin = "content-box";