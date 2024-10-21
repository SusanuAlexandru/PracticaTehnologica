
const openButtons = document.querySelectorAll('.openPopup');
const closeButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const overlay = document.querySelector('.overlay');


function openPopup() {
    popup.style.display = 'block';
    overlay.style.display = 'block'; 
}


function closePopup() {
    popup.style.display = 'none'; 
    overlay.style.display = 'none'; 
}


openButtons.forEach(button => {
    button.addEventListener('click', openPopup);
});


closeButton.addEventListener('click', closePopup);


overlay.addEventListener('click', closePopup);



const calculatePriceButton = document.getElementById('calculatePrice');
const priceResult = document.getElementById('priceResult');
const estimatedPrice = document.getElementById('estimatedPrice');
const startDateInput = document.getElementById('startDate');
const startTimeInput = document.getElementById('startTime');
const endDateInput = document.getElementById('endDate');
const endTimeInput = document.getElementById('endTime');
const insuranceForm = document.getElementById('insuranceForm');
const locationForm = document.getElementById('locationForm');


function calculatePrice() {
    
    const startDate = new Date(startDateInput.value + 'T' + startTimeInput.value);
    const endDate = new Date(endDateInput.value + 'T' + endTimeInput.value);
    const insuranceType = insuranceForm.querySelector('input[name="insurance"]:checked').value;
    const location = locationForm.querySelector('input[name="location"]:checked').value;

    
    const timeDiff = (endDate - startDate) / (1000 * 60 * 60);

    
    let basePricePerHour = 10;
    let totalPrice = timeDiff * basePricePerHour;

    
    if (insuranceType === 'Casco') {
        totalPrice *= 1.2; 
    }

    
    estimatedPrice.textContent = totalPrice.toFixed(2) + '$'; 

    
    priceResult.style.display = 'block';
}


calculatePriceButton.addEventListener('click', calculatePrice);
