// schedule table start
function showSchedule(day) {
    var tables = document.querySelectorAll('.schedule_tab');
    for (var i = 0; i < tables.length; i++) {
        tables[i].classList.add('hidden');
    }
    var selectedTable = document.getElementById('schedule_' + day);
    if (selectedTable) {
        selectedTable.classList.remove('hidden');
    }

    // Ascunde intro-ul
    var intro = document.querySelector('.schedule__intro');
    if (intro) {
        intro.classList.add('hidden');
    }

    // Adaugă clasa selected_day pe ziua selectată
    var days = document.querySelectorAll('.tab_item');
    for (var i = 0; i < days.length; i++) {
        days[i].classList.remove('selected_day');
    }
    var selectedDay = document.querySelector('.tab_item[data-day="' + day + '"]');
    if (selectedDay) {
        selectedDay.classList.add('selected_day');
    }
}
// schedule table end
// star rating start
document.addEventListener("DOMContentLoaded", function () {
    const ratingContainers = document.querySelectorAll('.row .rating');

    ratingContainers.forEach(container => {
        container.addEventListener('click', (event) => {
            const stars = container.querySelectorAll('.star-icon');
            const clickedStar = event.target;

            if (!clickedStar.classList.contains('star-icon')) {
                return; // Ignoră clicurile în afara stelelor
            }

            const clickedIndex = Array.from(stars).indexOf(clickedStar);

            stars.forEach((star, index) => {
                if (index <= clickedIndex) {
                    star.classList.add('selected');
                } else {
                    star.classList.remove('selected');
                }
            });
        });
    });
});
// star rating end
// Scroll Back To Top Button start
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // mybutton.style.display = "block";
    } else {
        // mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Scroll Back To Top Button end

var headerLinks = document.querySelectorAll('.header_link');

// Parcurgeți fiecare link din meniu
headerLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Obțineți ID-ul secțiunii corespunzătoare
        var targetId = link.getAttribute('href').substring(1);

        // Obțineți secțiunea corespunzătoare
        var targetSection = document.getElementById(targetId);

        // Derulați pagina către secțiunea corespunzătoare cu animație smooth
        window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
    });
});


//desenul
document.addEventListener("DOMContentLoaded", function () {
    var scrollUpButton = document.getElementById("myBtn");

    scrollUpButton.addEventListener("click", function () {
        let targetHeader = document.getElementById('header');
        window.scrollTo({ top: targetHeader.offsetTop, behavior: 'smooth' });
    });

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    });
});
