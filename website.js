<script>
        const showDetailsButton = document.getElementById('showDetailsButton');
        const carDetails = document.getElementById('carDetails');

        showDetailsButton.addEventListener('click', function () {
            if (carDetails.style.display === 'none') {
                carDetails.style.display = 'block';
                showDetailsButton.textContent = 'Hide Details';
            } else {
                carDetails.style.display = 'none';
                showDetailsButton.textContent = 'Show More Details';
            }
        });
    </script>
