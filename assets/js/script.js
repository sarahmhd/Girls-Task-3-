// global variables
// HEADER //
let headerList = document.querySelectorAll(".main-list li");
// VIDEO //
let mainVideo = document.querySelector(".main-video video");
let mainVideoTitle = document.querySelector(".main-video .title");
let videosList = document.querySelectorAll(".vids .vid");
let videosListSpan = document.querySelectorAll(".vids .vid span");
// STATS //
let statsNums = document.querySelectorAll(".stats .col-content h5");

/////////////////////// VIDEO SECTION ////////////////////
window.addEventListener("load", () => {
  videosListSpan.forEach((spa, idx) => {
    let spanHour = Math.floor(+videosList[idx].children[0].duration / 60);
    let spanMin = Math.floor(+videosList[idx].children[0].duration % 60);
    let spanSec = Math.floor(
      ((+videosList[idx].children[0].duration % 60) -
        (+videosList[idx].children[0].duration % 60)) *
        100
    );
    if (spanHour < 10) {
      spanHour = `0${spanHour}`;
    }
    if (spanMin < 10) {
      spanMin = `0${spanMin}`;
    }
    console.log(spanHour, spanMin, spanSec);
    videosList[idx].children[2].innerHTML = `${spanHour}:${spanMin}:${spanSec}`;
  });
});
videosList.forEach((vid) => {
  vid.addEventListener("click", () => {
    remoeActiveClass(videosList);
    vid.classList.add("active");
    let src = vid.children[0].getAttribute("src");
    let tit = vid.children[1].innerHTML;
    mainVideo.src = src;
    mainVideoTitle.innerHTML = tit;
  });
});

headerList.forEach((li) => {
  li.addEventListener("click", () => {
    remoeActiveClass(headerList);
    li.classList.add("active");
  });
});

///// STATS SECTION //////
window.onscroll = () => {
  // console.log(window.scrollY);
  if ((window.scrollY >= 11000) & (window.scrollY <= 11099)) {
    scrolling();
  }
};
function scrolling() {
  let start = 0;
  statsNums.forEach((num) => {
    let end = parseInt(num.getAttribute("data-target"));
    let cnt = Math.ceil(end / 200);
    function countValues() {
      if (start < end) {
        start += cnt;
        num.textContent = Math.ceil(start);
        setTimeout(countValues, 2);
      } else {
        num.textContent = end;
      }
    }
    countValues();
  });
}
///// REMOVE ACTIVE CLASS FUNCTION //////
function remoeActiveClass(list) {
  list.forEach((li) => {
    li.classList.remove("active");
  });
}
