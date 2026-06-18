document.addEventListener('DOMContentLoaded', () => {

    const year = document.getElementById('year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Animation machine à écrire - Accueil
    const typing = document.getElementById('typing');

    if (typing) {

        const text = "Développeur Web Front-End Junior";
        let i = 0;

        function typeWriter() {

            if (i < text.length) {

                typing.textContent += text.charAt(i);
                i++;

                setTimeout(typeWriter, 60);

            }

        }

        typeWriter();

    }

    // Animation machine à écrire - Projets
    const typingTitle = document.getElementById('typing-title');

    if (typingTitle) {

        const text = "Mes projets";
        let i = 0;

        function typeWriterProjects() {

            if (i < text.length) {

                typingTitle.textContent += text.charAt(i);
                i++;

                setTimeout(typeWriterProjects, 80);

            }

        }

        typeWriterProjects();

    }

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