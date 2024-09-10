// variable that selects main element
const main = document.querySelector('main');
const logOutButton = document.getElementById('logOutButton');
const hide = document.getElementById('hide');

// TODO: hide tennant checkbox, only show unchecked tennant cards

// variable for log out button
// render back button function

// build element and append to DOM

// no tennants message

// render tennant list function

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get all form values
    var name = document.getElementById('first').value;
    var name = document.getElementById('last').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var property = document.getElementById('property').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var rent = document.getElementById('rent').value;
    var deposit = document.getElementById('deposit').value;
    var pet = document.getElementById('pet').value;
    var vehicle = document.getElementById('vehicle').value;
    var addOcuppants = document.getElementById('addOcuppants').value;
    var notes = document.getElementById('notes').value;

    

    // Perform form validation
    if (first === '' || last === '' || dob === '' || phone === '' || email === '' || property === '' || startDate === '' || endDate === '' || rent === '' || deposit === '' || pet === '' || vehicle === '') {
        alert('Please enter information in all fields');
        return;
    }

    // Save tennant info
    var tennant = {
        name: name,
        last: last,
        dob: dob,
        phone: phone,
        email: email,
        property: property,
        startDate: startDate,
        endDate: endDate,
        rent: rent,
        deposit: deposit,
        pet: pet,
        vehicle: vehicle,
        addOcuppants: addOcuppants,
        notes: notes,

    };
    saveTennantInfo(tennant);

    // Perform further processing or submit the form
    // ...
});


// call render tennant list function

renderTennantList();

// save and retrieve tennant info from local storage

function saveTennantInfo(tennant) {
    var tennants = JSON.parse(localStorage.getItem('tennants')) || [];
    tennants.push(tennant);
    localStorage.setItem('tennants', JSON.stringify(tennants));
}  

function getTennantInfo() {
    return JSON.parse(localStorage.getItem('tennants')) || [];
}   // ^^


// reditect page function

let redDirectUrl = '';
function redDirectPage() {
    if (backButton) {
        backButton.addEventListener('click', function () {
           redirectPage('index.html');
        });
    }
}

// changes