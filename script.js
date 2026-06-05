document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const registerBtn = document.getElementById('registerBtn');
    const regInputs = document.querySelectorAll('.form-box.register input');

    // منطق اللمعة (هنستخدم الكلاس مش الـ style)
    function updateButtonState() {
        if (!registerBtn) return;
        
        let allFilled = true;
        regInputs.forEach(input => {
            if (input.value.trim() === "") allFilled = false;
        });

        if (allFilled) {
            registerBtn.classList.add('glowing'); // إضافة الكلاس
        } else {
            registerBtn.classList.remove('glowing'); // مسح الكلاس
        }
    }

    regInputs.forEach(input => {
        input.addEventListener('input', updateButtonState);
    });
});
