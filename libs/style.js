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

  if (window.pageYOffset > 200) {
    categoryItem.classList.add("is-sticky");
    headerSearch.classList.add("is-sticky");
    this.document.getElementById("categories__menu").style.top = "0px";
    this.document.getElementById("header__search").style.top = "0px";
  } else {
    categoryItem.classList.remove("is-sticky");
    headerSearch.classList.remove("is-sticky");
    this.document.getElementById("categories__menu").style.top = "0px";
    this.document.getElementById("header__search").style.top = "0px";
  }
});
