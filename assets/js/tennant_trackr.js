// variable that selects main element
const main = document.querySelector('main');
const logOutButton = document.getElementById('logOutButton');
// const hide = document.getElementById('hide');
const submit = document.getElementById('submit');

// TODO: hide tennant checkbox, only show unchecked tennant cards??

// variable for log out button

//logOutButton.addEventListener('click', function() {
//   window.location.href = 'index.html';
// });


// build element and append to DOM
function renderTennantList() {
    let tennants = getTennantInfo();
    let tennantList = document.getElementById('tennantList');
    tennantList.innerHTML = `
        <thead>
            <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Pets</th>
                <th scope="col">Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>

            </tr>
        </tbody>`;
    tennants.forEach(function (tennant) {
        let tennantCard = document.createElement('tr');
        tennantCard.setAttribute('class', 'tennantCard');
        tennantCard.innerHTML = `
            <td>${tennant.name}</td>
            <td>${tennant.last}</td>
            <td>${tennant.phone}</td>
            <td>${tennant.email}</td>
            <td>${tennant.pet}</td>
            <td>${tennant.notes}</td>
        `;
        tennantList.appendChild(tennantCard);
    });
}

// render tennant list function
console.log(document.querySelector('form'));
submit.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted');
const tenantModal = document.getElementById('tenantModal');

    // Get all form values
    let name = document.getElementById('name').value;
    let last = document.getElementById('last').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let pet = document.getElementById('pet').value;
    let notes = document.getElementById('notes').value;

    

    // Perform form validation
    if (name === '' || last === '' ||  phone === '' || email === '' || pet === '' || notes === '') {
        alert('Please enter information in all fields');
        return;
    }

    // Save tennant info
    let tennant = {
        name: name,
        last: last,
        phone: phone,
        email: email,
        pet: pet,
        notes: notes,

    };
    saveTennantInfo(tennant);
    $('#tenantModal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    renderTennantList();
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

// add tenant button 


// redirect page function

let redirectUrl = '';
function redirectPage() {
    if (backButton) {
        backButton.addEventListener('click', function () {
           redirectPage('index.html');
        });
    }
}

// changes