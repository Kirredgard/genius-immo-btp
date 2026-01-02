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

// Fade-up au scroll
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-up");

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const delay = entry.target.dataset.delay || 0;

            setTimeout(() => {
                entry.target.classList.add("show");
            }, delay);

            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));
});
// Scroll automatique des sections mini-cards-scroll
document.addEventListener("DOMContentLoaded", () => {
    const scrollSections = document.querySelectorAll(".mini-cards-scroll");

    scrollSections.forEach(section => {
        let scrollAmount = 0;
        let scrollMax = section.scrollWidth - section.clientWidth;

        setInterval(() => {
            scrollAmount += 1; // vitesse de défilement
            if(scrollAmount > scrollMax) scrollAmount = 0;
            section.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }, 30); // ajuste le temps pour plus ou moins rapide
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const scrollSections = document.querySelectorAll(".mini-cards-scroll");

    scrollSections.forEach(section => {
        const inner = document.createElement("div");
        inner.classList.add("mini-cards-scroll-inner");

        // Dupliquer les cartes pour un défilement infini
        section.querySelectorAll(".mini-card").forEach(card => {
            inner.appendChild(card.cloneNode(true));
        });
        section.querySelectorAll(".mini-card").forEach(card => {
            inner.appendChild(card.cloneNode(true));
        });

        section.innerHTML = ""; // vider l'ancien contenu
        section.appendChild(inner);
    });
});
// Fade-up automatique au scroll
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.mini-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fade-up', 'show');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.classList.add('fade-up'); // Ajoute la classe fade-up de base
        observer.observe(el);
    });
});
// Fade-up automatique au scroll
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.mini-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fade-up', 'show');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.classList.add('fade-up'); // Ajoute la classe fade-up de base
        observer.observe(el);
    });
});

const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("projectModal");

const modalTitle = document.getElementById("modalTitle");
const modalLocation = document.getElementById("modalLocation");
const modalSurface = document.getElementById("modalSurface");
const modalDescription = document.getElementById("modalDescription");
const modalMainImage = document.getElementById("modalMainImage");
const modalThumbs = document.getElementById("modalThumbs");
const modalStatus = document.getElementById("modalStatus");

cards.forEach(card => {
    card.addEventListener("click", () => {

        modalTitle.textContent = card.dataset.title;
        modalLocation.textContent = card.dataset.location;
        modalSurface.textContent = card.dataset.surface;
        modalDescription.textContent = card.dataset.description;

        // BADGE
        modalStatus.textContent = card.dataset.status;
        modalStatus.className = "modal-badge " + 
            (card.dataset.status === "Livré" ? "delivered" : "ongoing");

        // GALERIE
        modalThumbs.innerHTML = "";
        const images = card.dataset.images.split(",");

        modalMainImage.src = images[0];

        images.forEach((img, index) => {
            const thumb = document.createElement("img");
            thumb.src = img;
            if(index === 0) thumb.classList.add("active");

            thumb.addEventListener("click", () => {
                document.querySelectorAll(".modal-thumbs img")
                    .forEach(i => i.classList.remove("active"));
                thumb.classList.add("active");
                modalMainImage.src = img;
            });

            modalThumbs.appendChild(thumb);
        });

        modal.classList.add("active");
    });
});

// Fermeture
document.querySelector(".modal-close").onclick = () => {
    modal.classList.remove("active");
};

modal.onclick = e => {
    if(e.target === modal) modal.classList.remove("active");
};

// COMPTEUR ANIMÉ
const counters = document.querySelectorAll('.stat-number');
let counterStarted = false;

function startCounters() {
    if(counterStarted) return;

    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const increment = target / 80;

        const updateCounter = () => {
            count += increment;
            if(count < target) {
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + "+";
            }
        };
        updateCounter();
    });

    counterStarted = true;
}

// Déclenchement au scroll
window.addEventListener("scroll", () => {
    const section = document.querySelector(".stats-section");
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(sectionTop < screenHeight - 100) {
        startCounters();
    }
});
// COMPTEUR ANIMÉ
const counters = document.querySelectorAll('.stat-number');
let counterStarted = false;

function startCounters() {
    if(counterStarted) return;

    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const increment = target / 80;

        const updateCounter = () => {
            count += increment;
            if(count < target) {
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + "+";
            }
        };
        updateCounter();
    });

    counterStarted = true;
}

// Déclenchement au scroll
window.addEventListener("scroll", () => {
    const section = document.querySelector(".stats-section");
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(sectionTop < screenHeight - 100) {
        startCounters();
    }
});
// SCRIPT PAGE PROJET

document.addEventListener("DOMContentLoaded", function() {

    // GALERIE PROJET
    const mainImage = document.querySelector(".project-single-gallery > img");
    const thumbnails = document.querySelectorAll(".gallery-thumbs img");

    if(mainImage && thumbnails.length > 0){
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener("click", function() {
                // Changer l'image principale
                mainImage.src = this.src;

                // Mettre en surbrillance la miniature active
                thumbnails.forEach(img => img.style.opacity = "0.7");
                this.style.opacity = "1";
            });
        });

        // Initialiser la première miniature en surbrillance
        thumbnails[0].style.opacity = "1";
    }

    // OPTIONNEL : Défilement automatique miniatures (scroll horizontal)
    const thumbsContainer = document.querySelector(".gallery-thumbs");
    if(thumbsContainer){
        let scrollAmount = 0;
        setInterval(() => {
            scrollAmount += 1; // vitesse
            if(scrollAmount >= thumbsContainer.scrollWidth - thumbsContainer.clientWidth){
                scrollAmount = 0;
            }
            thumbsContainer.scrollLeft = scrollAmount;
        }, 20); // plus petit = plus rapide
    }

});
// LIGHTBOX GALERIE
document.addEventListener("DOMContentLoaded", function(){

    const images = document.querySelectorAll(".lightbox-trigger");
    let currentIndex = 0;

    // Création de l'overlay
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox-overlay");
    overlay.innerHTML = `
        <span class="lightbox-close"><i class="fa-solid fa-xmark"></i></span>
        <span class="lightbox-prev"><i class="fa-solid fa-chevron-left"></i></span>
        <img src="" alt="Projet en plein écran">
        <span class="lightbox-next"><i class="fa-solid fa-chevron-right"></i></span>
    `;
    document.body.appendChild(overlay);

    const overlayImg = overlay.querySelector("img");
    const closeBtn = overlay.querySelector(".lightbox-close");
    const prevBtn = overlay.querySelector(".lightbox-prev");
    const nextBtn = overlay.querySelector(".lightbox-next");

    function showLightbox(index){
        currentIndex = index;
        overlayImg.src = images[currentIndex].src;
        overlay.classList.add("active");
    }

    function hideLightbox(){
        overlay.classList.remove("active");
    }

    function showNext(){
        currentIndex = (currentIndex + 1) % images.length;
        overlayImg.src = images[currentIndex].src;
    }

    function showPrev(){
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        overlayImg.src = images[currentIndex].src;
    }

    images.forEach((img, idx) => {
        img.addEventListener("click", () => showLightbox(idx));
    });

    closeBtn.addEventListener("click", hideLightbox);
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // Fermer en cliquant hors de l'image
    overlay.addEventListener("click", (e) => {
        if(e.target === overlay) hideLightbox();
    });

    // Navigation clavier
    document.addEventListener("keydown", (e)=>{
        if(!overlay.classList.contains("active")) return;
        if(e.key === "ArrowRight") showNext();
        if(e.key === "ArrowLeft") showPrev();
        if(e.key === "Escape") hideLightbox();
    });

});
document.addEventListener("DOMContentLoaded", function(){

    // --- LIGHTBOX ---
    const images = document.querySelectorAll(".lightbox-trigger");
    let currentIndex = 0;

    const overlay = document.createElement("div");
    overlay.classList.add("lightbox-overlay");
    overlay.innerHTML = `
        <span class="lightbox-close"><i class="fa-solid fa-xmark"></i></span>
        <span class="lightbox-prev"><i class="fa-solid fa-chevron-left"></i></span>
        <img src="" alt="Projet en plein écran">
        <span class="lightbox-next"><i class="fa-solid fa-chevron-right"></i></span>
    `;
    document.body.appendChild(overlay);

    const overlayImg = overlay.querySelector("img");
    const closeBtn = overlay.querySelector(".lightbox-close");
    const prevBtn = overlay.querySelector(".lightbox-prev");
    const nextBtn = overlay.querySelector(".lightbox-next");

    function showLightbox(index){
        currentIndex = index;
        overlayImg.src = images[currentIndex].src;
        overlay.classList.add("active");
    }

    function hideLightbox(){
        overlay.classList.remove("active");
    }

    function showNext(){
        currentIndex = (currentIndex + 1) % images.length;
        overlayImg.src = images[currentIndex].src;
    }

    function showPrev(){
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        overlayImg.src = images[currentIndex].src;
    }

    images.forEach((img, idx) => {
        img.addEventListener("click", () => showLightbox(idx));
    });

    closeBtn.addEventListener("click", hideLightbox);
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    overlay.addEventListener("click", (e) => {
        if(e.target === overlay) hideLightbox();
    });

    document.addEventListener("keydown", (e)=>{
        if(!overlay.classList.contains("active")) return;
        if(e.key === "ArrowRight") showNext();
        if(e.key === "ArrowLeft") showPrev();
        if(e.key === "Escape") hideLightbox();
    });

    // --- ANIMATION DES MINIATURES (défilement continu) ---
    const thumbs = document.querySelector(".gallery-thumbs");
    let scrollAmount = 0;
    if(thumbs){
        setInterval(() => {
            scrollAmount += 0.3; // vitesse défilement
            if(scrollAmount >= thumbs.scrollWidth / 2) scrollAmount = 0;
            thumbs.style.transform = `translateX(-${scrollAmount}px)`;
        }, 20);
    }

});
