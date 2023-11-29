/////////////// BASE /////////////////

document.addEventListener('DOMContentLoaded', function () {
    var opMenus = document.querySelectorAll('.op-menu');

    opMenus.forEach(function (opMenu) {
        opMenu.addEventListener('click', function () {
            // Remove 'clicked' class from all op-menus
            opMenus.forEach(function (menu) {
                menu.classList.remove('clicked');
            });

            // Add 'clicked' class to the clicked op-menu
            opMenu.classList.add('clicked');
        });
    });
});


/////// PSICOLOGO /////////

const totalDates = 5;
let currentStartIndex = 0;
const currentDateElement = document.getElementById("currentDate");
const dateRowElement = document.getElementById("dateRow");
const dayRowElement = document.getElementById("dayRow");

function updateDates() {
  const displayedDates = getDisplayedDates();
  dateRowElement.innerHTML = displayedDates.map(date => `<div>${date}</div>`).join("");
}

function updateDaysOfWeek() {
  const today = new Date();
  const daysOfWeek = [];

  for (let i = 0; i < 5; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    daysOfWeek.push(dayOfWeek);
  }

  dayRowElement.innerHTML = daysOfWeek.map(day => `<div>${day}</div>`).join("");
}

function getDisplayedDates() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const displayedDates = [];

  for (let i = 0; i < totalDates; i++) {
    const date = new Date(currentYear, currentMonth, 1 + currentStartIndex + i);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
    displayedDates.push(formattedDate);
  }
  return displayedDates;
}

function nextDates() {
  currentStartIndex += totalDates;
  updateDates();
  updateDaysOfWeek();
}

function prevDates() {
  currentStartIndex -= totalDates;
  if (currentStartIndex < 0) {
    currentStartIndex = 0;
  }
  updateDates();
  updateDaysOfWeek();
}

// Initial update
updateDates();
updateDaysOfWeek();

// trian