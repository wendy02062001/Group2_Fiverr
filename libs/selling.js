// community for mobile

let communityOverlayData = document.querySelector(".community__overlay_data");
let communityOverlay = document.querySelector(".community__overlay");
let sliderContent = document.querySelector(".community__content");

let btnCloseCommunityOverlay = document.querySelector(
  ".close__community_overlay"
);

btnCloseCommunityOverlay.addEventListener("click", () => {
  sliderContent.classList.remove("blur");
  communityOverlay.classList.remove("active");
});

function getDataOverlay(p) {
  let data = {
    designer: `
        <div class="col-6">
            <p>4 Categories in Graphics & Design</p>
        </div>
        <div class="col-6">
            <p>11,913 Buyers in 136 Countries</p>
        </div>`,
    developer: `
        <div class="col-4">
            <p>1 Categories in Programming & Tech</p>
        </div>
        <div class="col-4">
            <p>2 Categories in Digital marketing</p>
        </div>
        <div class="col-4">
            <p>22,305 Buyers in 156 Countries</p>
        </div>`,
    writer: `
        <div class="col-6">
            <p>2 Categories in Writing & Translation</p>
        </div>
        <div class="col-6">
            <p>46 Buyers in 13 Countries</p>
        </div>`,
    editor: `
        <div class="col-6">
            <p>1 Categories in Video & Animation</p>
        </div>
        <div class="col-6">
            <p>6,917 Buyers in 101 Countries</p>
        </div>`,
    musician: `
        <div class="col-6">
            <p>2 Categories in Music & Audio</p>
        </div>
        <div class="col-6">
            <p>978 Buyers in 66 Countries</p>
        </div>`,
    voiceover: `
        <div class="col-6">
            <p>1 Categories in Music & Audio</p>
        </div>
        <div class="col-6">
            <p>5,845 Buyers in 119 Countries</p>
        </div>`,
    social: `
        <div class="col-4">
            <p>3 Categories in Digital marketing</p>
        </div>
        <div class="col-4">
            <p>2 Categories in Graphics & Design</p>
        </div>
        <div class="col-4">
            <p>3,159 Buyers in 92 Countries</p>
        </div>`,
  };

  communityOverlayData.innerHTML = data[p];
  sliderContent.classList.add("blur");
  communityOverlay.classList.add("active");
}

// Education Modal

let tagaPopupModal = document.querySelector(".education__video_popup");
let videoModal = document.querySelector(".modal__education_video");

let btnCloseModalEducation = document.querySelector(".modal__education_close");

tagaPopupModal.addEventListener("click", () => {
  videoModal.play();
});

btnCloseModalEducation.addEventListener("click", () => {
  videoModal.pause();
});

// question and answer

let qandaItems = document.getElementsByClassName("qanda__item");

for (var i = 0; i < qandaItems.length; i++) {
  qandaItems[i].onclick = function () {
    // content show
    this.lastElementChild.classList.toggle("show");

    // xoay thẻ i
    this.firstElementChild.lastElementChild.classList.toggle("show");
  };
}

function toggleButton() {
  $(document).ready(function () {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $("#overlay").toggleClass("showOverlay");
      $("body").css("overflow-y", "hidden");
    });

    $("#overlay").click(function () {
      $("#overlay").removeClass("showOverlay");
      $("#wrapper").removeClass("toggled");
      $("body").css("overflow-y", "auto");
    });
  });
}
