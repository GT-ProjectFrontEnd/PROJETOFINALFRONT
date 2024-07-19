// script.js
document.addEventListener('DOMContentLoaded', function() {
    const quantityInputs = document.querySelectorAll('.quantity');
    const subtotalSpan = document.getElementById('subtotal');
    const totalSpan = document.getElementById('total');
    const continueButton = document.getElementById('continue');

    // Function to calculate and update the total
    function updateTotal() {
        let subtotal = 0;
        quantityInputs.forEach(input => {
            subtotal += parseInt(input.value) * 219;
        });
        subtotalSpan.textContent = 'R$ ' + subtotal.toFixed(2);
        totalSpan.textContent = 'R$ ' + (subtotal - 30).toFixed(2);
    }

    // Event listener for quantity changes
    quantityInputs.forEach(input => {
        input.addEventListener('change', updateTotal);
    });

    // Event listener for "Continue" button
    continueButton.addEventListener('click', function() {
        // Handle button click, e.g., redirect to checkout page
        console.log('Continue button clicked!');
    });

    // Initial total calculation
    updateTotal();
});