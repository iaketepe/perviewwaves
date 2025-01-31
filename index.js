
const serviceExpertOptions = {
        "Service1": [
            { value: "Expert1", text: "Dr. Smith (Psychotherapy)" },
            { value: "Expert2", text: "Dr. Johnson (Psychotherapy)" }
        ],
        "Service1G": [
            { value: "Expert1", text: "Dr. Smith (Psychotherapy)" },
            { value: "Expert3", text: "Dr. Jackie (Psychotherapy)" },
            { value: "Expert4", text: "Dr. Treto (Psychotherapy)" }
        ],
        "Service2": [
            { value: "Expert5", text: "Dr. Brown (Psychological Assessment)" }
        ],
        "Service3": [
            { value: "Expert6", text: "Dr. Green (Career Counselling)" },
            { value: "Expert7", text: "Dr. Gumbo (Career Counselling)" }
        ],
        "Service4": [
            { value: "Expert8", text: "Dr. Taylor (Neurodegenerative Research)" }
        ]
}


function updateServiceExperts() {
    const requestedService = document.getElementById("requestedService").value;
    const serviceExperts = document.getElementById("serviceExperts");

    serviceExperts.innerHTML = '<option value="">-</option>';


    if (serviceExpertOptions[requestedService]) {
        serviceExperts.innerHTML = '';
        serviceExpertOptions[requestedService].forEach(expert => {
            const option = document.createElement("option");
            option.value = expert.value;
            option.textContent = expert.text;
            serviceExperts.appendChild(option);
        });
    }
    
}


function updatePractitionerCard() {
    const selectedExpert = document.getElementById("serviceExperts").value;
    if (selectedExpert) {
        // Slide to the carousel item with the corresponding id
        const carousel = document.getElementById("Expert-Card-Slider");
        const expertCard = document.getElementById(selectedExpert);

        // Ensure the expert card exists before trying to navigate
        if (expertCard) {
            // Activate the correct card by targeting its ID
            const carouselInstance = new bootstrap.Carousel(carousel);
            carouselInstance.to(expertCard.index);  // `index` can be used if needed for precise control
        }
    }
}