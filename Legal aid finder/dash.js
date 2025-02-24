
const lawyers = [
    { id: 1, name: 'Aishat Idowu', specialty: 'Family Law', location: 'Lagos', phone: '081-2362-2372' },
    { id: 2, name: 'Deborah Jimoh', specialty: 'Criminal Law', location: 'Ibadan', phone: '090-654-3210' },
    { id: 3, name: 'Trust Ada', specialty: 'Corporate Law', location: 'Abuja', phone: '091-789-1230' },
    { id: 4, name: 'Akinrolo Mariam', specialty: 'Immigration Law', location: 'Lagos', phone: '070-654-9870' },
];


function displayLawyers(lawyersToDisplay) {
    const lawyerListContainer = document.getElementById('lawyerList');
    lawyerListContainer.innerHTML = ''; 

    lawyersToDisplay.forEach(lawyer => {
        const lawyerCard = document.createElement('div');
        lawyerCard.className = 'lawyer-card';

        const lawyerInfo = document.createElement('div');
        lawyerInfo.className = 'info';
        lawyerInfo.innerHTML = `
            <h4>${lawyer.name}</h4>
            <p>Specialty: ${lawyer.specialty}</p>
            <p>Location: ${lawyer.location}</p>
            <p>Phone: ${lawyer.phone}</p>
        `;
        
        const connectButton = document.createElement('button');
        connectButton.textContent = 'Connect';
        connectButton.onclick = function() {
            alert(`You are connecting with ${lawyer.name}.`);
        };

        lawyerCard.appendChild(lawyerInfo);
        lawyerCard.appendChild(connectButton);
        lawyerListContainer.appendChild(lawyerCard);
    });
}

function searchLawyers() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    if (!searchInput) {
        displayLawyers(lawyers);
        return;
    }

    const filteredLawyers = lawyers.filter(lawyer => lawyer.specialty.toLowerCase().includes(searchInput));
    displayLawyers(filteredLawyers);
}

window.onload = function() {
    displayLawyers(lawyers);
};
