const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');

function setMenu(open) {
    nav.classList.toggle('nav--open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Zavřít menu' : 'Otevřít menu');
}

toggle.addEventListener('click', () => {
    setMenu(!nav.classList.contains('nav--open'));
});

document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setMenu(false);
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    defaults: { duration: 1, ease: "power3.out" }
});

tl.from(".hero", {
    "--bg-scale": 1.25,
    duration: 2.5,
    ease: "power2.out"
}, 0)
    .from(".hero .eyebrow", {
        y: 20,
        autoAlpha: 0
    }, 0.2)
    .from(".hero__title", {
        y: 40,
        autoAlpha: 0,
        scale: 0.95,
        filter: "blur(12px)",
        letterSpacing: "2rem",
        duration: 1.4
    }, 0.4)
    .from(".hero__lead", {
        y: 20,
        autoAlpha: 0
    }, "-=0.8")
    .from(".hero__cta > *", {
        y: 20,
        autoAlpha: 0,
        stagger: 0.15
    }, "-=0.6")
    .from(".stat_value", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2, ease: "power3.inOut"
    }, "-=0.8");

gsap.to(".hero__title", {
    yPercent: 40,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});