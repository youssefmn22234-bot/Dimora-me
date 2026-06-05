document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    // التأكد من وجود العناصر قبل تنفيذ أي شيء
    if (container && registerBtn && loginBtn) {
        
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
        
    } else {
        console.warn("واحد أو أكثر من العناصر (container, registerBtn, loginBtn) غير موجود في الـ HTML.");
    }
});
// كود "اللمعة" الجديد
const registerBtn = document.getElementById('registerBtn');
const registerInputs = document.querySelectorAll('.form-box.register input');

function updateButtonState() {
    let allFilled = true;
    registerInputs.forEach(input => {
        if (input.value === "") allFilled = false;
    });

    if (allFilled) {
        registerBtn.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.5)"; // تأثير اللمعة
        registerBtn.style.transform = "scale(1.02)";
    } else {
        registerBtn.style.boxShadow = "none";
        registerBtn.style.transform = "scale(1)";
    }
}

registerInputs.forEach(input => {
    input.addEventListener('input', updateButtonState);
});
