document.addEventListener('DOMContentLoaded', () => {
    // 1. تعريف العناصر
    const container = document.querySelector('.container');
    const registerBtn = document.getElementById('registerBtn'); // الزرار اللي ضفنا له ID
    const loginBtnToggle = document.querySelector('.toggle-panel.toggle-right .btn'); // زرار اللوجين اللي جوه التوجل
    const registerBtnToggle = document.querySelector('.toggle-panel.toggle-left .btn'); // زرار الريجستر اللي جوه التوجل
    const inputs = document.querySelectorAll('input');

    // 2. إصلاح حركة الـ Toggle (إضافة كلاس active)
    if (container) {
        if (registerBtnToggle) {
            registerBtnToggle.addEventListener('click', () => container.classList.add("active"));
        }
        if (loginBtnToggle) {
            loginBtnToggle.addEventListener('click', () => container.classList.remove("active"));
        }
    }

    // 3. إصلاح اللمعة وتغير الألوان
    function updateButtonState() {
        if (!registerBtn) return;
        
        // فحص لو الخانات اللي جوه الـ Register مليانة
        let allFilled = true;
        const regInputs = document.querySelectorAll('.form-box.register input');
        regInputs.forEach(input => {
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

    inputs.forEach(input => {
        input.addEventListener('input', updateButtonState);
    });
});
