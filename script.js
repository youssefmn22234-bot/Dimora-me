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
