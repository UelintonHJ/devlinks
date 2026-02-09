const btn = document.getElementById('toggleTheme');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light');
} else {
    document.body.classList.remove('light');
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('light');

const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
localStorage.setItem('theme', currentTheme);
});