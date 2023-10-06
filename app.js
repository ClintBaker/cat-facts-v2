const facts = [
  "Cats can jump up to six times their length.",
  "Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw).",
  "Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans.",
  "Cats are believed to be the only mammals who don’t taste sweetness.",
  "Cats have up to 100 different vocalizations — dogs only have 10.",
  "Some cats love the smell of chlorine.",
];

const cats = [
  {
    name: "Steve",
    img: "https://loremflickr.com/250/199",
  },
  {
    name: "Tony",
    img: "https://loremflickr.com/250/201",
  },
  {
    name: "Snowball",
    img: "https://loremflickr.com/250/200",
  },
];

const catOne = document.getElementById("cat1");
const catTwo = document.getElementById("cat2");
const catThree = document.getElementById("cat3");

catOne.innerHTML = `<div class="cat"><h3>${cats[0].name}</h3><img src="${cats[0].img}"/></div>`;
catTwo.innerHTML = `<div class="cat"><h3>${cats[1].name}</h3><img src="${cats[1].img}"/></div>`;
catThree.innerHTML = `<div class="cat"><h3>${cats[2].name}</h3><img src="${cats[2].img}"/></div>`;

catOne.addEventListener("click", function () {
  if (Math.random() > 0.5) {
    document.getElementById("fact").innerHTML = facts[0];
  } else {
    document.getElementById("fact").innerHTML = facts[1];
  }
});

catTwo.addEventListener("click", function () {
  if (Math.random() > 0.5) {
    document.getElementById("fact").innerHTML = facts[2];
  } else {
    document.getElementById("fact").innerHTML = facts[3];
  }
});

catThree.addEventListener("click", function () {
  if (Math.random() > 0.5) {
    document.getElementById("fact").innerHTML = facts[4];
  } else {
    document.getElementById("fact").innerHTML = facts[5];
  }
});
