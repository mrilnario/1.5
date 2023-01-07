function showMore() {
  var text = document.getElementById("text");
  var showMore = document.getElementsByClassName("show_more");
  var img = document.getElementById("img");
  var trigger = document.getElementById("trigger");

  document.querySelector(".brands").classList.toggle("brands_full");
  document.querySelector(".logo").classList.toggle("logo_big");

  if (trigger.style.display === "none") {
    trigger.style.display = "inline";
    text.innerHTML = "Показать все";
    showMore[0].style.width = "125px";
    img.style.rotate = "0deg";
  } else {
    trigger.style.display = "none";
    text.innerHTML = "Скрыть";
    showMore[0].style.width = "82px";
    img.style.rotate = "180deg";
  }
}
