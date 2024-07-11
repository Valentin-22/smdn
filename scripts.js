document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.faq-item');
    const sidebarMenu = document.querySelector('.sidebar-menu');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
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

            // Hide sidebar menu after clicking a link on mobile
            if (window.innerWidth <= 768) {
                sidebarMenu.style.display = 'none';
                sidebarToggle.querySelector('i').classList.remove('fa-arrow-up');
                sidebarToggle.querySelector('i').classList.add('fa-arrow-down');
            }
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

    // Sidebar toggle function
    sidebarToggle.addEventListener('click', () => {
        if (sidebarMenu.style.display === 'block') {
            sidebarMenu.style.display = 'none';
            sidebarToggle.querySelector('i').classList.remove('fa-arrow-up');
            sidebarToggle.querySelector('i').classList.add('fa-arrow-down');
        } else {
            sidebarMenu.style.display = 'block';
            sidebarToggle.querySelector('i').classList.remove('fa-arrow-down');
            sidebarToggle.querySelector('i').classList.add('fa-arrow-up');
        }
    });
});
