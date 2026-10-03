
// 1. Hiển thị năm hiện tại
document.getElementById("year").textContent =
    new Date().getFullYear();


// 2. Chức năng đổi giao diện sáng / tối
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "☾";
    }
});


// 3. Menu trên điện thoại
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Đóng menu khi chọn một mục
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// 4. Hiệu ứng thanh kỹ năng
const skillSection = document.getElementById("ablilities");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            document.querySelectorAll(".progress-bar").forEach(function (bar) {
                bar.style.width = bar.dataset.width;
            });

            observer.disconnect();
        }
    });
}, { threshold: 0.2 });

observer.observe(skillSection);


// 5. Xử lý biểu mẫu liên hệ
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    document.getElementById("formMessage").textContent =
        "Cảm ơn " + name + "! Lời nhắn của bạn đã được ghi nhận trên trang demo.";

    contactForm.reset();
});
