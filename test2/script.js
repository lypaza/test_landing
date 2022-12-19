const wp1 = document.querySelector(".wallpaper_1");
wp1.addEventListener('click', animationCard1);
function animationCard1() {
  if (getComputedStyle(wp1).zIndex < 10) {
    wp1.style.animationName = "AAA";
  } else {
    wp1.style.animationName = "BBB";
  }
}

const wp2 = document.querySelector(".wallpaper_2");
wp2.addEventListener('click', animationCard2);
function animationCard2() {
  if (getComputedStyle(wp2).zIndex < 10) {
    wp2.style.animationName = "CCC";
  } else {
    wp2.style.animationName = "DDD";
  }
}

const wp3 = document.querySelector(".wallpaper_3");
wp3.addEventListener('click', animationCard3);
function animationCard3() {
  if (getComputedStyle(wp3).zIndex < 10) {
    wp3.style.animationName = "EEE";
  } else {
    wp3.style.animationName = "FFF";
  }
}

const wp4 = document.querySelector(".wallpaper_4");
wp4.addEventListener('click', animationCard4);
function animationCard4() {
  if (getComputedStyle(wp4).zIndex < 10) {
    wp4.style.animationName = "GGG";
  } else {
    wp4.style.animationName = "HHH";
  }
}

const wp5 = document.querySelector(".wallpaper_5");
wp5.addEventListener('click', animationCard5);
function animationCard5() {
  if (getComputedStyle(wp5).zIndex < 10) {
    wp5.style.animationName = "III";
  } else {
    wp5.style.animationName = "JJJ";
  }
}





