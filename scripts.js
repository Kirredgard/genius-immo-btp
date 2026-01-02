// Scroll animations
const elements = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
},{threshold:0.25});
elements.forEach(el => observer.observe(el));

// Formulaire
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Merci pour votre demande. Notre équipe vous contactera rapidement.");
});
