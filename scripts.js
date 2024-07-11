document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.faq-item');
    const offset = 20;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition + offset && (section.offsetTop + section.clientHeight) > scrollPosition + offset) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
