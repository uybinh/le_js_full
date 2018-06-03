function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs img");
  let mainImage = document.querySelector("#gallery-photo img");
  let mainImageTitle = document.querySelector("#gallery-info :first-child");
  let mainImageDescription = document.querySelector("#gallery-info :last-child");

  thumbnails.forEach(function(thumbnail){
    thumbnail.addEventListener("click", function(event){
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newImageTitle = thumbnail.dataset.title;
      let newImageDescription = thumbnail.dataset.description;
      mainImage.setAttribute("src", newImageSrc);
      mainImageTitle.textContent = newImageTitle;
      mainImageDescription.textContent = newImageDescription;
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  activateGallery();
});