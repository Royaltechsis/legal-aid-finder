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
            const response = await fetch('http://localhost:3000/api/auth/login', {
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
                // Redirect based on role
                if (result.role === 'Admin') {
                    window.location.href = 'admindashboard.html';
                } else {
                    window.location.href = 'dash.html';
                }
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred while logging in');
        }
    });
});