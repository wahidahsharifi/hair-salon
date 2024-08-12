// gallery
const img = document.querySelectorAll(".album > img");
const album = document.querySelector(".album");
img.forEach((x) => {
   x.addEventListener("click", () => {
      x.classList.add("active");
      album.classList.add("clicked");
   });
   // x.addEventListener('mouseout', () => {
   //    x.classList.remove('active')
   // })
});
