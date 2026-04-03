

document.addEventListener('DOMContentLoaded', function() {

    // --- 1. NAVBAR & SCROLL EFFECT ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. MOBILE MENU TOGGLE ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu'); // Sesuaikan dengan ID di HTML Anda

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animasi icon toggle (jika pakai FontAwesome)
            const icon = mobileMenuToggle.querySelector('i');
            if(icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // --- 3. ANIMATE ON SCROLL (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => observer.observe(element));

    




});

document.addEventListener("DOMContentLoaded", function() {
        const slides = document.querySelectorAll('.slide-item');
        let currentSlide = 0;
        const slideInterval = 5000; // Waktu ganti foto (5000ms = 5 detik)

        function nextSlide() {
            // Hapus kelas active dari foto saat ini
            slides[currentSlide].classList.remove('active');
            
            // Pindah ke index berikutnya (kembali ke 0 jika sudah di akhir)
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Tambahkan kelas active ke foto baru
            slides[currentSlide].classList.add('active');
        }

        // Jalankan fungsi nextSlide setiap interval waktu
        setInterval(nextSlide, slideInterval);
    });
    
// --- 5. CARD TOGGLE LOGIC (Motto/Hobi) ---
function handleToggle(btn) {
    const type = btn.getAttribute('data-type');
    const message = btn.getAttribute('data-text');
    const cardInfo = btn.closest('.card-info');
    
    if (!cardInfo) return;

    const displayText = cardInfo.querySelector('.display-text');
    const allButtons = cardInfo.querySelectorAll('.btn-toggle');

    if (btn.classList.contains('active') && displayText.innerHTML.includes(message)) return;

    // Switch class active
    allButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Animasi Fade
    displayText.style.opacity = '0';
    displayText.style.transform = 'translateY(5px)';

    setTimeout(() => {
        displayText.innerHTML = `<strong>${type.toUpperCase()}:</strong> ${message}`;
        displayText.style.opacity = '1';
        displayText.style.transform = 'translateY(0)';
    }, 200);
}
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
});

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("open");
});


document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});