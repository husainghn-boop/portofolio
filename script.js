// DARK MODE
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Cek preferensi user sebelumnya
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Mode Terang';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Mode Terang';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Mode Gelap';
    }
});

// ANIMASI MENGETIK
const typingText = document.getElementById('typing-text');
const words = ["Mahasiswa IT", "Web Developer", "Network Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1500; // Berhenti sejenak saat kata lengkap
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Jalankan animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', typeEffect);

// VALIDASI FORM
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman
    
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    // Reset status pesan
    statusMsg.textContent = "";

    // Validasi Sederhana
    if (nama === "" || email === "" || pesan === "") {
        statusMsg.style.color = "#ef4444"; // Merah
        statusMsg.textContent = "⚠️ Harap isi semua kolom form!";
        return;
    }

    if (!email.includes('@')) {
        statusMsg.style.color = "#ef4444";
        statusMsg.textContent = "⚠️ Masukkan format email yang benar!";
        return;
    }

    // Jika berhasil
    statusMsg.style.color = "#10b981"; // Hijau
    statusMsg.textContent = "✅ Terima kasih, pesan Anda berhasil terkirim!";
    
    // Reset form setelah sukses
    contactForm.reset();
});