// gallery
const img = document.querySelectorAll(".album > img");
const album = document.querySelector(".album");
const body = document.querySelector("body");
img.forEach((image) => {
   image.addEventListener("click", (e) => {
      e.stopPropagation();
      if (image.classList.contains("active")) {
         removeClick();
      } else {
         image.classList.add("active");
         album.classList.add("clicked");
         body.classList.add("body");
         console.log(e.target.src);
         album.background = 'url(img/Gallery-01.jpg)'
      }
   });
   album.addEventListener("click", (e) => {
      e.stopPropagation();
      removeClick();
   });
   function removeClick() {
      image.classList.remove("active");
      album.classList.remove("clicked");
      body.classList.remove("body");
   }
});