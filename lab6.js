document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('selfRating');
    const ratingValue = document.getElementById('ratingValue');

    slider.addEventListener('input', () => {
        ratingValue.textContent = `${slider.value}%`;
    });
});
