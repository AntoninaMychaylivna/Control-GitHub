const themeToggle = document.getElementById('themeToggle');
    const themeSwitcher = document.getElementById('themeSwitcher');

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            // Вибрана темна тема
            themeSwitcher.classList.add('dark-theme');
        } else {
            // Вибрана світла тема
            themeSwitcher.classList.remove('dark-theme');
        }
    });