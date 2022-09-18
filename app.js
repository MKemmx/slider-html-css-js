const imageContainer = document.getElementById("image-container");
const dotsContainer = document.getElementById("dots-container");

const images = [
  {
    url: "https://images.pexels.com/photos/13292768/pexels-photo-13292768.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    url: "https://images.pexels.com/photos/12814961/pexels-photo-12814961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    url: "https://images.pexels.com/photos/3596370/pexels-photo-3596370.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];

let currentImage = 0;

const createImageContainer = (num) => {
  let img = document.createElement("img");
  img.src = images[num].url;
  img.classList.add("image-div");
  imageContainer.appendChild(img);
};

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  if (currentImage >= images.length - 1) {
    currentImage = 0;
    imageContainer.removeChild(imageContainer.firstChild);
    createDots();
    return createImageContainer(currentImage);
  }
  currentImage += 1;

  if (imageContainer.hasChildNodes()) {
    imageContainer.removeChild(imageContainer.firstChild);
    createDots();
    return createImageContainer(currentImage);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentImage <= 0) {
    currentImage = images.length - 1;
    imageContainer.innerHTML = "";
    createDots();
    return createImageContainer(currentImage);
  }
  currentImage = currentImage - 1;
  if (imageContainer.hasChildNodes()) {
    imageContainer.innerHTML = "";
    createDots();
    return createImageContainer(currentImage);
  }
});

createImageContainer(0);

const createDots = () => {
  if (dotsContainer.hasChildNodes()) {
    dotsContainer.innerHTML = "";
  }

  for (let i = 0; i < images.length; i++) {
    let dot = document.createElement("div");
    dot.classList.add("box");
    if (i == currentImage) {
      dot.classList.add("active");
    }
    dotsContainer.append(dot);
  }
};

createDots();
