document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const niche = document.getElementById('niche').value;
        const bio = document.getElementById('bio').value;
        const profilepic = document.getElementById('profilepic').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate form data
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Validate that all fields are filled in
        if (name === "" || email === "" || niche === "" || bio === "" || password === "" || confirmPassword === "") {
            alert("All fields are required.");
            return;
        }

        // Prepare lawyer data
        const lawyerData = {
            name: name,
            email: email,
            niche: niche,
            bio: bio,
            profilepic: profilepic,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3000/api/lawyers/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(lawyerData)
            });

            const result = await response.json();
            console.log('Lawyer registration result:', result);

            if (response.ok) {
                alert('Lawyer registered successfully');
                // Redirect to login page or another page
                window.location.href = 'loglaw.html';
            } else {
                alert(`Error: ${result.msg}`);
            }
        } catch (error) {
            console.error('Error registering lawyer:', error);
            alert('An error occurred while registering the lawyer');
        }
    });
});