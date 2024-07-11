document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.faq-item');
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.footer-sidebar-toggle .sidebar-toggle');
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

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                sidebarToggle.classList.remove('active');
            }
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop + offset*2;
        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && (section.offsetTop + section.clientHeight) > scrollPosition) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        sidebarToggle.classList.toggle('active');
    });
});
