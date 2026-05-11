// 1. Gérer le changement d'apparence de la barre de navigation au scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // Si on descend de plus de 50 pixels, on ajoute la classe 'scrolled'
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Animations au défilement (Intersection Observer API)
// Cette technique professionnelle est ultra-légère et très performante

// On sélectionne tous les éléments qui ont la classe "reveal"
const reveals = document.querySelectorAll('.reveal');

// On configure l'observateur
const revealOptions = {
    threshold: 0.15, // L'animation se déclenche quand 15% de l'élément est visible
    rootMargin: "0px 0px -50px 0px" // Décale légèrement le point de déclenchement
};

const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        // Si l'élément entre dans l'écran
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // On lui ajoute la classe active qui déclenche le CSS
            observer.unobserve(entry.target); // On arrête de l'observer une fois animé pour économiser la mémoire
        }
    });
}, revealOptions);

// On applique l'observateur à chaque élément "reveal"
reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});