// دالة لتبديل الفئة 'active' على العنصر nav
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active'); // إضافة/إزالة الفئة active لعرض/إخفاء القائمة
}

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const messageInput = document.getElementById("message");

// دالة التحقق العامة
function validateInput(input, condition) {
    if (condition) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
    return condition;
}

// التحقق أثناء الكتابة
nameInput.addEventListener("input", () => {
    validateInput(nameInput, nameInput.value.trim().length >= 3);
});

emailInput.addEventListener("input", () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateInput(emailInput, pattern.test(emailInput.value));
});

addressInput.addEventListener("input", () => {
    validateInput(addressInput, addressInput.value.trim().length >= 5);
});

messageInput.addEventListener("input", () => {
    validateInput(messageInput, messageInput.value.trim().length >= 10);
});

// التحقق عند الإرسال
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = validateInput(nameInput, nameInput.value.trim().length >= 3);
    const isEmailValid = validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value));
    const isAddressValid = validateInput(addressInput, addressInput.value.trim().length >= 5);
    const isMessageValid = validateInput(messageInput, messageInput.value.trim().length >= 10);

    if (isNameValid && isEmailValid && isAddressValid && isMessageValid) {
        alert("Form submitted successfully!");
        form.reset();
        document.querySelectorAll("input, textarea").forEach(input => input.classList.remove("valid", "invalid"));
    } else {
        alert("Please fill all fields correctly.");
    }
});
