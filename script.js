document.addEventListener("DOMContentLoaded", function () {
const btnYes = document.querySelector(".yes-button");
const btnNo = document.querySelector(".no-button");

if (btnYes && btnNo) {
btnYes.addEventListener("click", handleYes);
btnNo.addEventListener("click", handleNo);
} else {
console.error("Tombol tidak ditemukan! Periksa class .yes-button dan .no-button.");
}
});

function handleYes() {
window.location.href = "yes_page.html"; // Ubah ke halaman yang sesuai
}

const prompts = [
"Are you sure?",
"Really sure??",
"Are you positive?",
"dindaa please...",
"Just think about it!",
"If you say no, I will be really sad...",
"I will be very sad...",
"I will be very very very sad...",
"Ok fine, I will stop asking...",
"Just kidding, say yes please! ❤️"
];

let promptIndex = 0;
let yesFontSize = 16; // Ukuran awal tombol Yes

function handleNo() {
const btnNo = document.querySelector(".no-button");
const btnYes = document.querySelector(".yes-button");

if (btnNo && btnYes) {
// Ubah teks tombol No
btnNo.textContent = prompts[promptIndex];
promptIndex = (promptIndex + 1) % prompts.length;

// Pindahkan tombol No ke posisi acak
const maxWidth = window.innerWidth - btnNo.clientWidth;
const maxHeight = window.innerHeight - btnNo.clientHeight;
const randomX = Math.floor(Math.random() * maxWidth);
const randomY = Math.floor(Math.random() * maxHeight);

btnNo.style.position = "absolute"; // Pastikan tombol bisa bergerak
btnNo.style.left = `${randomX}px`;
btnNo.style.top = `${randomY}px`;

// Perbesar tombol Yes setiap kali tombol No ditekan
yesFontSize *= 1.2; // Ukuran bertambah 20% setiap klik
btnYes.style.fontSize = `${yesFontSize}px`;
}
}