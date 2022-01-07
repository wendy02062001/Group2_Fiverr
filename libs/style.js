window.addEventListener("scroll", function () {
  let mainHeader = document.getElementById("main-header");

  if (window.pageYOffset > 0) {
    mainHeader.classList.add("is-sticky");
  } else {
    mainHeader.classList.remove("is-sticky");
  }
});

//  Categories menu scroll
window.addEventListener("scroll", function () {
  let categoryItem = document.getElementById("categories__menu");
  let headerSearch = document.getElementById("header__search");
  let joinBtn = document.getElementById("join-Btn");
  if (window.pageYOffset > 200) {
    categoryItem.classList.add("is-sticky");
    headerSearch.classList.add("is-sticky");
    joinBtn.classList.add("is-sticky");
    this.document.getElementById("categories__menu").style.top = "0px";
    this.document.getElementById("header__search").style.top = "0px";
    this.document.getElementById("join-Btn").style.top = "0px";
  } else {
    categoryItem.classList.remove("is-sticky");
    headerSearch.classList.remove("is-sticky");
    joinBtn.classList.remove("is-sticky");
    this.document.getElementById("categories__menu").style.top = "0px";
    this.document.getElementById("header__search").style.top = "0px";
    this.document.getElementById("join-Btn").style.top = "0px";
  }
});
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
      $("html").css("overflow-y", "auto");
    });
  });
}
jQuery(".nav-footer h4").click(function () {
  jQuery(this).parent(".nav").toggleClass("open");
});
