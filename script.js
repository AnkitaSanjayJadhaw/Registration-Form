document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('com-password');
    const email = document.querySelector('input[type="email"]');
    const resetButton = document.querySelector('.reset-btn');

    // Correcting the typo in the type attribute for the email input
    if(email) email.type = 'email';


    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match.");
            return; // Stop the form submission
        }

        // You can add more validation here if needed

        // If everything's okay, proceed with form submission
        // For demonstration, we'll just show an alert
        alert("Form submitted successfully!");

        // If you want to actually submit the form to a server,
        // you would typically use AJAX here or simply not prevent the default
        // form submission behavior if you're not doing any client-side validation.
    });

    resetButton.addEventListener('click', function (e) {
        // Confirm before resetting the form
        const isConfirmed = confirm("Are you sure you want to reset the form?");
        if (!isConfirmed) {
            e.preventDefault(); // Prevent form reset
        }
    });
});
