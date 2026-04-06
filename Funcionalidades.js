const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.add('translate-y-0');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('translate-y-4');
        }
    });
}, observerOptions);

document.querySelectorAll('.flex-1').forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
    observer.observe(el);
});