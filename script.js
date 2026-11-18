// Elementos principales de la galería
const mainImage = document.querySelector("#main-image");
const mainCaption = document.querySelector("#main-caption");
const thumbnails = document.querySelectorAll(".gallery-thumb");

// Cambia la imagen al pulsar una miniatura
thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.dataset.image;
        mainImage.alt = thumb.dataset.alt;
        mainCaption.textContent = thumb.dataset.caption;
    });
});

// Elementos de la ventana del vídeo
const videoModal = document.querySelector("#video-modal");
const openVideo = document.querySelector("#open-video");
const closeVideo = document.querySelector("#close-video");
const modalVideo = document.querySelector("#modal-video");

// Abre la ventana y reproduce el vídeo
openVideo.addEventListener("click", () => {
    videoModal.classList.add("active");
    videoModal.setAttribute("aria-hidden", "false");
    modalVideo.play();
});

// Cierra la ventana y para el vídeo
function closeVideoModal() {
    videoModal.classList.remove("active");
    videoModal.setAttribute("aria-hidden", "true");
    modalVideo.pause();
    modalVideo.currentTime = 0;
}

closeVideo.addEventListener("click", closeVideoModal);

// Cierra al pulsar fuera del vídeo
videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
        closeVideoModal();
    }
});

// Cierra con la tecla Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && videoModal.classList.contains("active")) {
        closeVideoModal();
    }
});