const appointmentDateInput = document.getElementById('appointmentDate');
const calendarPopup = document.getElementById('calendarPopup');

const minTime = '09:00';
const maxTime = '17:00';

appointmentDateInput.setAttribute('min', getDateTimeString(minTime));
appointmentDateInput.setAttribute('max', getDateTimeString(maxTime));

function getDateTimeString(time) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}T${time}`;
}

appointmentDateInput.addEventListener('focus', function() {
    calendarPopup.style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (!calendarPopup.contains(event.target) && event.target !== appointmentDateInput) {
        calendarPopup.style.display = 'none';
    }
});