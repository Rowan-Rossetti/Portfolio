document.addEventListener('DOMContentLoaded', () => {

    const year = document.getElementById('year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    function typeWriterEffect(id, text, speed = 80) {

        const element = document.getElementById(id);

        if (!element) return;

        element.textContent = "";

        let i = 0;

        function write() {

            if (i < text.length) {

                element.textContent += text.charAt(i);
                i++;

                setTimeout(write, speed);

            }

        }

        write();

    }

    // Accueil
    typeWriterEffect(
        'typing',
        'Développeur Web Front-End Junior',
        60
    );

    typeWriterEffect(
        'typing-home',
        'Rowan Rossetti',
        80
    );

    // À propos
    typeWriterEffect(
        'typing-about',
        'Rowan Rossetti',
        80
    );

    // Contact
    typeWriterEffect(
        'typing-contact',
        'Contactez-moi',
        80
    );

    // Projets
    typeWriterEffect(
        'typing-title',
        'Mes projets',
        80
    );

    // Apparition progressive au scroll
    const reveals = document.querySelectorAll('.reveal');

    function revealElements() {

        reveals.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                element.classList.add('active');

            }

        });

    }

    window.addEventListener('scroll', revealElements);

    revealElements();

});