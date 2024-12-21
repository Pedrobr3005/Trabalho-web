document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('hred')).scrollIntroView({
            behavior: 'smooth'
        });
    });
});

const toggleThemeButtom = document.createElement('buttom');
toggleThemeButtom.textContent = 'Alterar Tema';
toggleThemeButtom.style.position = 'fixed';
toggleThemeButtom.style.top = '20px';
toggleThemeButtom.style.right = '20px';
toggleThemeButtom.style.padding = '10px 20px';
toggleThemeButtom.style.cursor = 'pointer';
toggleThemeButtom.style.backgroundColor = '#00d1ff';
toggleThemeButtom.style.color = '#121212';
toggleThemeButtom.style.border = 'none';
toggleThemeButtom.style.borderEndEndRadius = '5px';

document.body;appendChild(toggleThemeButtom);

toggleThemeButtom.addEventListener('click', () => {
    document.body.classList.toggle('ligth-theme');
});