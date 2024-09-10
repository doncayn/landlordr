// This is the base javascript file
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginWindow = document.querySelector('form');
const alertElement = document.querySelector('#alert');

console.log(alertElement);

let loginInfo= [];
let mode= 'light';



// Puts our information in local storage
const storeLS= function(loginData){
    //pushes user input into an array
   loginInfo.push(loginData);
   console.log('Login data in local storage:', loginInfo);
   //stringifies and saves to local storage
   localStorage.setItem('loginData',JSON.stringify(loginInfo));

}


// Reads from local storage and returns the data
const readLS= function(){
    loginInfo= JSON.parse(localStorage.getItem('loginData'));
    return(loginInfo);
}


// This is the redirect function
let redirectURL = '';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};

// TODO: Create a function that accepts information from the login event and redirects to the tenantTrackr page on "successful" Login
const handleLogin = function () {

console.log(usernameInput);
console.log(passwordInput);

    if (!usernameInput.value || !passwordInput.value) {
        alertElement.removeAttribute('hidden');
    }
    else {
        const loginData = {
            username: usernameInput.value.trim(),
            password: passwordInput.value.trim(),
        };
        storeLS(loginData);
        redirectPage('./tennant_trackr.html');
    }


};

// // Function to trigger handleLogin function to go
// loginWindow.addEventListener('click', function (event) {
//     event.preventDefault();
//     handleLogin();
// });

readLS();
