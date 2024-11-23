// script.js

function exploreEvents() {
    // Redirect to the Explore Events page
    window.location.href = "explore-events.html";
}

// Sample data for events
const events = [
    {
        title: "Hackathon 2024",
        date: "2024-12-01T10:00",
        campus: "downtown",
        organization: "coding-club",
        perks: ["free-food", "networking"],
    },
    {
        title: "Dance Showcase",
        date: "2024-11-29T18:00",
        campus: "alpharetta",
        organization: "dance-crew",
        perks: ["swag"],
    },
    {
        title: "Student Government Meeting",
        date: "2024-11-25T15:00",
        campus: "downtown",
        organization: "student-gov",
        perks: ["networking"],
    },
];

// Render events dynamically
function renderEvents(filteredEvents) {
    const container = document.getElementById("events-container");
    container.innerHTML = ""; // Clear existing events
    filteredEvents.forEach((event) => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${new Date(event.date).toLocaleString()}</p>
            <p><strong>Campus:</strong> ${event.campus}</p>
            <p><strong>Organization:</strong> ${event.organization}</p>
            <p><strong>Perks:</strong> ${event.perks.join(", ")}</p>
        `;
        container.appendChild(card);
    });
}

// Apply filters
function applyFilters() {
    const campusFilters = Array.from(
        document.getElementById("campus").selectedOptions
    ).map((option) => option.value);
    const orgFilters = Array.from(
        document.getElementById("organization").selectedOptions
    ).map((option) => option.value);
    const perksFilters = Array.from(
        document.getElementById("perks").selectedOptions
    ).map((option) => option.value);

    const filteredEvents = events.filter((event) => {
        const campusMatch = !campusFilters.length || campusFilters.includes(event.campus);
        const orgMatch = !orgFilters.length || orgFilters.includes(event.organization);
        const perksMatch = !perksFilters.length || perksFilters.some((perk) => event.perks.includes(perk));
        return campusMatch && orgMatch && perksMatch;
    });

    renderEvents(filteredEvents);
}

// Initial render
renderEvents(events);

// Attach filter button click event
document.getElementById("apply-filters").addEventListener("click", applyFilters);


function joinClubs() {
    // Redirect to the Join a Club page
    window.location.href = "join-club.html";
}



// Sample volunteer opportunities data
const volunteerData = [
    {
        name: "Paws for a Cause",
        description: "Volunteer with animal rescue teams to help foster and adopt pets.",
        campus: "downtown",
        organization: "paws-for-a-cause",
        date: "2024-12-01"
    },
    {
        name: "Community Clean-Up",
        description: "Join the community clean-up initiative at Alpharetta campus.",
        campus: "alpharetta",
        organization: "community-service",
        date: "2024-12-02"
    },
    {
        name: "Food Bank Volunteer",
        description: "Help organize and distribute food at the GSU food bank.",
        campus: "downtown",
        organization: "community-service",
        date: "2024-12-05"
    }
];

// Function to display volunteer opportunities based on filters
function displayVolunteerOpportunities() {
    const campusFilter = Array.from(document.getElementById('campus').selectedOptions).map(option => option.value);
    const orgFilter = Array.from(document.getElementById('organization').selectedOptions).map(option => option.value);

    const filteredData = volunteerData.filter(volunteer => {
        const matchesCampus = campusFilter.length === 0 || campusFilter.includes(volunteer.campus);
        const matchesOrg = orgFilter.length === 0 || orgFilter.includes(volunteer.organization);
        return matchesCampus && matchesOrg;
    });

    const volunteerContainer = document.getElementById('volunteer-container');
    volunteerContainer.innerHTML = ''; // Clear previous results

    filteredData.forEach(volunteer => {
        const volunteerCard = document.createElement('div');
        volunteerCard.classList.add('volunteer-card');
        volunteerCard.innerHTML = `
            <h3>${volunteer.name}</h3>
            <p>${volunteer.description}</p>
            <p><strong>Location:</strong> ${volunteer.campus}</p>
            <p><strong>Date:</strong> ${new Date(volunteer.date).toLocaleDateString()}</p>
        `;
        volunteerContainer.appendChild(volunteerCard);
    });
}

// Event listener to apply filters when the button is clicked
document.getElementById('apply-filters').addEventListener('click', displayVolunteerOpportunities);

// Display all opportunities initially
displayVolunteerOpportunities();


