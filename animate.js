    document.addEventListener("DOMContentLoaded", function () {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        });

        const elementsToAnimate = document.querySelectorAll('.animate-on-show');
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    });
