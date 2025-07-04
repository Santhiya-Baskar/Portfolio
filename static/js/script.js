document.querySelectorAll('.resume_header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        const icon = header.querySelector('.resume_icon');
        icon.textContent = content.classList.contains('active') ? '-' : '+';
    });
});

document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('.nav_link').forEach(l => l.classList.remove('active_link'));
        link.classList.add('active_link');
    });
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});