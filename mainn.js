// mainn.js

const guides = [
    {
        name: "Алдын-оол Монгуш",
        specialty: "Эксперт по культуре и горловому пению",
        experience: "10 лет",
        rating: 5,
        image: "images/алдыноол.webp"
    },
    {
        name: "Чейнеш Сарыглар",
        specialty: "Горные походы и треккинг",
        experience: "7 лет",
        rating: 4,
        image: "images/чейнеш.webp"
    },
    {
        name: "Сергек Хомушку",
        specialty: "Конные туры и оленеводство",
        experience: "12 лет",
        rating: 5,
        image: "images/сергек.webp"
    },
    {
        name: "Айырана Донгак",
        specialty: "Археология и история Тувы",
        experience: "8 лет",
        rating: 4,
        image: "images/айырана.jpg"
    }
];

function loadAllTours() {
    const container = document.getElementById('tours-container');
    if (!container) return;
    
    container.innerHTML = tours.map(tour => `
        <div class="tour-card">
            <div class="tour-img">
                <img src="${tour.image}" alt="${tour.title}">
            </div>
            <div class="tour-info">
                <h3>${tour.title}</h3>
                <p>${tour.description}</p>
                <p class="tour-price">${tour.price}</p>
                <a href="contact.html?tour=${tour.id}" class="btn">Забронировать</a>
            </div>
        </div>
    `).join('');
}
