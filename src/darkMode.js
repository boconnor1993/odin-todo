document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    const applyDarkMode = (enable) => {
        document.body.classList.toggle('dark-mode', enable);
        document.querySelectorAll('.modal-content, .filter-modal-content, .todo-card')
            .forEach(el => el.classList.toggle('dark-mode', enable));
        darkModeIcon.classList.replace(enable ? 'bx-moon' : 'bx-sun', enable ? 'bx-sun' : 'bx-moon');
    };

    const loadDarkModePreference = () => {
        const darkModeSetting = localStorage.getItem('darkMode') === 'enabled';
        applyDarkMode(darkModeSetting);
    };

    darkModeToggle.addEventListener('click', () => {
        const darkModeEnabled = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
        applyDarkMode(darkModeEnabled);
    });

    loadDarkModePreference();
});
