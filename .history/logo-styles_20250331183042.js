<script>
document.addEventListener("DOMContentLoaded", function () {
    // Select all logo list items
    const logos = document.querySelectorAll(".logo__drawings-list li");

    logos.forEach(logo => {
        logo.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        logo.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
</script>