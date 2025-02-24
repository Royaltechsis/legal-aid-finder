
function toggleContent() {
    const extraContent = document.getElementById('extraContent');
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
    } else {
        extraContent.style.display = 'none';
    }
}

const lawyers = [
    { name: "Deborah Jimoh", specialization: "Criminal Law", location: "Lagos", phone: "+1 123 456 7890", email: "deborahJ@law.com" },
    { name: "Aishat Idowu", specialization: "Family Law", location: "Lagos", phone: "+1 987 654 3210", email: "Aishatidowu@law.com" },
    { name: "Akinrolo Mariam", specialization: "Immigration Law", location: "Lagos", phone: "+1 555 888 1234", email: "mariamakinrolo@law.com" },
    { name: "Raliat Bello", specialization: "Housing Law", location: "Lagos", phone: "+1 999 777 5555", email: "belloR@law.com" }
];

const testimonials = [
    { text: "This platform helped me find the perfect lawyer for my case quickly. Highly recommended!", author: "Jeffery.", location: " Edo Nigeria" },
    { text: "Thanks to Justice Seeker, I was able to connect with an amazing attorney who guided me through my legal battle.", author: "Oluwabumni.", location: "Lagos, Nigeria" },
    { text: "The process was so easy! I found a lawyer in no time, and I felt confident with their expertise.", author: "Kechi.", location: "Lagos, Nigeria" },
    { text: "Justice Seeker made it easy for me to find legal help. The lawyers here are top-notch professionals!", author: "Wealth M.", location: "Canada" }
];


function displayLawyerListings() {
    const lawyersContainer = document.getElementById("lawyers-list");
    lawyers.forEach(lawyer => {
        const lawyerElement = document.createElement("div");
        lawyerElement.classList.add("lawyer-item");
        lawyerElement.innerHTML = `
            <h3>${lawyer.name}</h3>
            <p><strong>Specialization:</strong> ${lawyer.specialization}</p>
            <p><strong>Location:</strong> ${lawyer.location}</p>
            <p><strong>Phone:</strong> ${lawyer.phone}</p>
            <p><strong>Email:</strong> <a href="mailto:${lawyer.email}">${lawyer.email}</a></p>
            <button class="btn">Contact</button>
        `;
        lawyersContainer.appendChild(lawyerElement);
    });
}


function displayTestimonials() {
    const testimonialsContainer = document.getElementById("testimonials-container");
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement("div");
        testimonialCard.classList.add("testimonial-card");
        testimonialCard.innerHTML = `
            <p>"${testimonial.text}"</p>
            <div class="author">${testimonial.author}</div>
            <div class="location">${testimonial.location}</div>
        `;
        testimonialsContainer.appendChild(testimonialCard);
    });
}

displayLawyerListings();
displayTestimonials();
