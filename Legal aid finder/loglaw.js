document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validate form data
        if (email === "" || password === "") {
            alert("Both fields are required.");
            return;
        }

        // Prepare login data
        const loginData = {
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3000/api/lawyers/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const result = await response.json();
            console.log('Login result:', result);

            if (response.ok) {
                alert('Login successful');
                // Save the token to localStorage or state
                localStorage.setItem('token', result.token);
                console.log('Token:', result.token); // Log the token to the console
                // Redirect to lawyer dashboard or another page
                window.location.href = 'lawyerdash.html';
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred while logging in');
        }
    });
});