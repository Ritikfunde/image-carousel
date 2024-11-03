document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-items");
    const carouselItems = document.querySelectorAll('.carousel-item'); // Use querySelectorAll for multiple items
    const prevBtn = document.querySelector(".carousel-control.prev");
    const nextBtn = document.querySelector(".carousel-control.next");
    const itemLength = carouselItems.length;
    const firstItemClone = carouselItems[0].cloneNode(true);
    const lastItemClone = carouselItems[itemLength - 1].cloneNode(true);

    carousel.appendChild(firstItemClone);
    carousel.insertBefore(lastItemClone, carouselItems[0]);

    let currentIndex = 1; 
    const renderItem = (visibleIndex) => {
        currentIndex = visibleIndex;

        carousel.style.transition = "0.2s ease";
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        
        document.addEventListener('transitionend', () => {
            if (currentIndex === 0) {
                currentIndex = itemLength - 2;
            } else if (currentIndex === itemLength - 1) {
                currentIndex = 1;
            }

            if (currentIndex === 1 || currentIndex === itemLength - 2) {
                carousel.style.transition = "none";
            }
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`; 
    };

    prevBtn.addEventListener("click", () => {
        let nextIndex = currentIndex - 1;
        if (nextIndex < 0) nextIndex = itemLength - 1;
        renderItem(nextIndex);
    });

    nextBtn.addEventListener("click", () => { 
        let nextIndex = currentIndex + 1;
        if (nextIndex >= itemLength) nextIndex = 0;
        renderItem(nextIndex);
    });

    renderItem(currentIndex);
});
