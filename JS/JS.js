// JavaScript básico para el formulario
document.querySelector('.form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te responderé lo antes posible.');
    this.reset();
});

// Efecto de aparición suave al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Aplicar a las secciones
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});