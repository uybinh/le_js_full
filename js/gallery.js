function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs img");
  let mainImage = document.querySelector("#gallery-photo img");
  let mainImageTitle = document.querySelector("#gallery-info :first-child");
  let mainImageDescription = document.querySelector("#gallery-info :last-child");

  thumbnails.forEach(function(thumbnail){
    let largeVersion = new Image();
    largeVersion.src = thumbnail.dataset.largeVersion;

    thumbnail.addEventListener("click", function(event){
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
      mainImageTitle.textContent = thumbnail.dataset.title;
      mainImageDescription.textContent = thumbnail.dataset.description;

      let currentImageDiv = document.querySelector(".gallery-thumbs .current");
      currentImageDiv.classList.remove("current");
      thumbnail.parentNode.classList.add("current");
    });
  });


}

document.addEventListener("DOMContentLoaded", function() {
  activateGallery();
});