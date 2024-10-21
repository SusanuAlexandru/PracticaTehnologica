const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="fa fa-star checked"></span>';
        } else {
            stars += '<span class="fa fa-star"></span>';
        }
    }
    return stars;
}

// Function to create card HTML
function createCarCard(car) {
    return `
        <div class="card">
            <img src="${car.image}" class="card-img-top" alt="${car.title}">
            <div class="card-bodyi">
                <div>
                    <h5 class="card-title">${car.title}</h5>
                </div>
                <div>
                    <p>${car.year}</p>
                </div>
            </div>
            <h6>Caracteristici:</h6>
            <ul>
                ${car.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <div class="m-auto">
                ${generateStars(car.rating)}
            </div>
            <hr>
            <div class="car">
                <div>
                    <p><b>${car.price}</b> / ${car.frequency}</p>
                </div>
                <div>
                    <button class="openPopup btn btn-primary">Inchiriez</button>
                </div>
            </div>
        </div>
    `;
}

// Fetch and display car data
fetch('cars.json')
    .then(response => response.json())
    .then(cars => {
        const carContainer = document.getElementById('carr-container');
        cars.forEach(car => {
            carContainer.innerHTML += createCarCard(car);
        });
    });