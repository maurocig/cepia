export default function changeImage(gridItemId, delay) {
  setTimeout(function () {
    document.getElementById(gridItemId).style.backgroundImage =
      `/public/images/${images[index % images.length]}`;
    index++;
    changeImage(gridItemId, delay);
  }, delay);
}
