<!-- JavaScript for Slideshow and Fact Cards -->
<script>
    // Slideshow Script
    let slideIndex = 0;
    showSlides();

    function plusSlides(n) {
        slideIndex += n;
        showSlides();
    }

    function showSlides() {
        const slides = document.querySelectorAll('.slide');
        if (slideIndex >= slides.length) {slideIndex = 0}
        if (slideIndex < 0) {slideIndex = slides.length - 1}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    // Drop-down Fact Cards Script
    const cardHeaders = document.querySelectorAll('.card-header');

    cardHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
</script>
</body>
</html>



