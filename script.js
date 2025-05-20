let images = document.querySelectorAll(".gallery-div img");
let modal = document.getElementById("imageModal");
let modalImg = document.getElementById("modalImage");
let currentIndex = 0;

function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  currentIndex = Array.from(images).indexOf(img);
}

function closeModal() {
  modal.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}
