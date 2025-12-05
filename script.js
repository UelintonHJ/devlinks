const btn = document.getElementById('toggleTheme');
btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
});