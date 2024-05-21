var models = [
  {
    name: "BMW",
    image: "img/bmw.jpg",
    link: "https://www.bmw.com",
  },
  {
    name: "Honda",
    image: "img/honda.jpg",
    link: "https://www.honda.com",
  },
  {
    name: "Mazda",
    image: "img/mazda.jpg",
    link: "https://www.mazda.com",
  },
  {
    name: "Skoda",
    image: "img/skoda.jpg",
    link: "https://www.skoda.com",
  },
  {
    name: "Volvo",
    image: "img/volvo.jpg",
    link: "https://www.volvo.com",
  },
];

var index = 0;

let slaytCount = models.length;

let interval;

var settings = {
  duration: "2000",
  random: true
};

init(settings);

document
  .querySelector(".fa-circle-arrow-left")
  .addEventListener("click", () => {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-circle-arrow-right")
  .addEventListener("click", () => {
    index++;
    showSlide(index);
    console.log(index);
  });

  document.querySelectorAll('.arrow').forEach((item) => {
    item.addEventListener('mouseenter',() => {
        clearInterval(interval);
    })
  });

  document.querySelectorAll('.arrow').forEach((item) => {
    item.addEventListener('mouseleave',() => {
        init(settings);
    })
  });

function init(settings) {
  var prev;

  interval = setInterval(() => {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
        if (slaytCount == index+1) {
            index = -1;
        }
        showSlide(index);
        index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  } else if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
