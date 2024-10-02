function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        menuIcon.style.display = 'none'; 
        closeIcon.style.display = 'block'; 
    } else {
        menu.style.display = 'none'; 
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const lazyBackgrounds = document.querySelectorAll(".lazy-background");

    if ("IntersectionObserver" in window) {
        const backgroundObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyBackground = entry.target;
                    const bgUrl = lazyBackground.getAttribute("data-bg");
                    
                    lazyBackground.style.backgroundImage = `url('${bgUrl}')`;
                    
                    lazyBackground.classList.add("lazy-loaded");

                    backgroundObserver.unobserve(lazyBackground);
                }
            });
        });

        lazyBackgrounds.forEach(bg => {
            backgroundObserver.observe(bg);
        });
    }
});