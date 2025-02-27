document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('You are not logged in');
        window.location.href = 'loglaw.html';
        return;
    }

    let decodedToken;
    try {
        // Decode the JWT token to extract the lawyer's ID
        decodedToken = jwt_decode(token);
        console.log('Decoded Token:', decodedToken); // Add logging to debug
    } catch (error) {
        console.error('Invalid token specified:', error);
        alert('Invalid token. Please log in again.');
        window.location.href = 'loglaw.html';
        return;
    }

    const lawyerId = decodedToken.id; // Assuming the token contains the lawyer's ID as 'id'

    const profileInfo = document.getElementById('profileInfo');
    const logoutButton = document.getElementById('logoutButton');

    // Fetch and display lawyer information by ID
    const loadLawyerInfo = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/lawyers/${lawyerId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const result = await response.json();
            if (response.ok) {
                profileInfo.innerHTML = `
                    <p>Name: ${result.name}</p>
                    <p>Email: ${result.email}</p>
                    <p>Niche: ${result.niche}</p>
                    <p>Bio: ${result.bio}</p>
                    <p>Profile Picture: <img src="${result.profilepic}" alt="Profile Picture"></p>
                `;
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error loading lawyer information:', error);
            alert('An error occurred while loading the lawyer information');
        }
    };

    // Logout function
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'loglaw.html';
    });

    loadLawyerInfo();
});