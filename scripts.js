window.onscroll = function () {
  roll();
  if (window.innerWidth > 950) {
    header();
  }
};

window.addEventListener("resize", update);

// -------------------------------------------------------------------------------------------------------

function roll() {
  let heightBody = 2450;
  const element = "roll";
  if (
    document.body.scrollTop > heightBody ||
    document.documentElement.scrollTop > heightBody
  ) {
    document.getElementById(element).classList.add("hilang");
  } else {
    document.getElementById(element).classList.remove("hilang");
  }
  let widthnow = window.innerWidth;
  if (widthnow <= 800) {
    heightBody = 2250;
    if (
      document.body.scrollTop > heightBody ||
      document.documentElement.scrollTop > heightBody
    ) {
      document.getElementById(element).classList.add("hilang");
    } else {
      document.getElementById(element).classList.remove("hilang");
    }
  }
  if (widthnow <= 750) {
    heightBody = 2350;
    if (
      document.body.scrollTop > heightBody ||
      document.documentElement.scrollTop > heightBody
    ) {
      document.getElementById(element).classList.add("hilang");
    } else {
      document.getElementById(element).classList.remove("hilang");
    }
  }
  if (widthnow <= 650) {
    heightBody = 2800;
    if (
      document.body.scrollTop > heightBody ||
      document.documentElement.scrollTop > heightBody
    ) {
      document.getElementById(element).classList.add("hilang");
    } else {
      document.getElementById(element).classList.remove("hilang");
    }
  }
  if (widthnow <= 565) {
    heightBody = 2950;
    if (
      document.body.scrollTop > heightBody ||
      document.documentElement.scrollTop > heightBody
    ) {
      document.getElementById(element).classList.add("hilang");
    } else {
      document.getElementById(element).classList.remove("hilang");
    }
  }
  if (widthnow <= 405) {
    heightBody = 2975;
    if (
      document.body.scrollTop > heightBody ||
      document.documentElement.scrollTop > heightBody
    ) {
      document.getElementById(element).classList.add("hilang");
    } else {
      document.getElementById(element).classList.remove("hilang");
    }
  }
}

function loading() {
  document.getElementById("foto").classList.remove("loading");
  document.getElementById("desc").style.marginRight = "2.5%";
  document.getElementById("desc").style.marginLeft = "3.5%";
}

function header() {
  const heightBody = 300;
  const element = "header";
  if (
    document.body.scrollTop > heightBody ||
    document.documentElement.scrollTop > heightBody
  ) {
    document.getElementById(element).className = "timbul";
  } else {
    document.getElementById(element).className = "";
  }
}

function button() {
  document.getElementById("top-1").classList.add("muncul");
  document.getElementById("top-2").classList.add("muncul");
  document.getElementById("top-3").classList.add("muncul");
  document.getElementById("top-4").classList.add("muncul");
  document.getElementById("top-5").classList.add("muncul");
  document.getElementById("pendek-x").classList.add("muncul");
  document.getElementById("pendek-equal").classList.remove("muncul");
  document.getElementById("box-header").classList.add("muncul");
  document.getElementById("header-bar").classList.add("muncul");
}
function button2() {
  document.getElementById("top-1").classList.remove("muncul");
  document.getElementById("top-2").classList.remove("muncul");
  document.getElementById("top-3").classList.remove("muncul");
  document.getElementById("top-4").classList.remove("muncul");
  document.getElementById("top-5").classList.remove("muncul");
  document.getElementById("pendek-x").classList.remove("muncul");
  document.getElementById("pendek-equal").classList.add("muncul");
  document.getElementById("box-header").classList.remove("muncul");
  document.getElementById("header-bar").classList.remove("muncul");
}

function update() {
  let widthBefore;
  let widthNow = window.innerWidth;
  if (widthBefore > widthNow && widthBefore > 950 && widthNow <= 950) {
    button2();
  }
  if (widthBefore < widthNow && widthBefore <= 950 && widthNow > 950) {
    if (window.pageYOffset > 300) {
      document.getElementById("header").className = "timbul";
    } else {
      document.getElementById("header").className = "";
    }
  }
  widthBefore = widthNow;
}
