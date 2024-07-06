document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.see-more').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const description = link.closest('.description');
            const shortDescription = description.querySelector('.short-description');
            const fullDescription = description.querySelector('.full-description');
            
            if (shortDescription.style.display === 'none') {
                shortDescription.style.display = 'block';
                fullDescription.style.display = 'none';
                link.textContent = 'розгорнути';
            } else {
                shortDescription.style.display = 'none';
                fullDescription.style.display = 'block';
                link.textContent = '';
            }
        });
    });
});