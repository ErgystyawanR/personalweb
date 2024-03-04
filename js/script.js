function animateHeader() {
  const header = document.querySelector(".header-section");
  header.style.animationPlayState = "running";
}

window.addEventListener("DOMContentLoaded", animateHeader);

function moveUp(element) {
  element.classList.add("moved-up"); // Tambahkan kelas "moved-up" saat gambar diklik
  setTimeout(() => {
    element.classList.remove("moved-up"); // Hapus kelas "moved-up" setelah beberapa detik
  }, 300); // Ubah angka ini sesuai dengan kebutuhan Anda
}
