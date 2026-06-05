document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const registerBtn = document.getElementById('registerBtn'); // المرجع الموحد للزرار
    const loginBtn = document.querySelector('.login-btn');
    const registerInputs = document.querySelectorAll('.form-box.register input');

    // 1. منطق الحركة (Toggle)
    if (container && registerBtn && loginBtn) {
        // ملاحظة: اتأكد إن الكلاس اللي بتدوس عليه فعلاً اسمه register-btn
        // في الـ HTML بتاعك الزرار اسمه class="btn register-btn" فده تمام
        document.querySelector('.register-btn').addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    }

    // 2. منطق اللمعة (Glow Effect)
    function updateButtonState() {
        let allFilled = true;
        registerInputs.forEach(input => {
            if (input.value.trim() === "") allFilled = false;
        });

        if (allFilled) {
            registerBtn.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.5)";
            registerBtn.style.transform = "scale(1.02)";
        } else {
            registerBtn.style.boxShadow = "none";
            registerBtn.style.transform = "scale(1)";
        }
    }

    registerInputs.forEach(input => {
        input.addEventListener('input', updateButtonState);
    });
});
