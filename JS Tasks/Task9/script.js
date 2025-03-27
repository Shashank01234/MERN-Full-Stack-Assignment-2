// Array to store users (in addition to localStorage)
let users = [];

// Event listener for registration form
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const usersTableBody = document.getElementById('usersTableBody');

    // Load users from localStorage on page load
    loadUsers();

    // Registration form submission
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const user = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                contact: document.getElementById('contact').value,
                address: document.getElementById('address').value
            };

            // Add user to array and localStorage
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            // Reset form
            registrationForm.reset();

            // Redirect to view users page
            window.location.href = 'view.html';
        });
    }

    // Populate users table if on view page
    if (usersTableBody) {
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            `;
            usersTableBody.appendChild(row);
        });
    }

    // Function to load users from localStorage
    function loadUsers() {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            users = JSON.parse(storedUsers);
        }
    }
});