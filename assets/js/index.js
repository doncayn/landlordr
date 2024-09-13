// This is the base javascript file
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginWindow = document.querySelector('form');
const alertElement = document.querySelector('#alert');
const downloadPress = document.querySelector('#download');
const blogPress = document.querySelector('#blog');
const freePress = document.querySelector('#free');
const trialPress = document.querySelector('#trial');

console.log(alertElement);

let mode= 'light';



// Puts our information in local storage
const storeLS= function(loginData){
    //pushes user input into an array
    let loginInfo= readLS() || [];

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

// Bonus Bits (not MVP)
// Adds alert window with message for user when download button is pressed
downloadPress.addEventListener('click',function(event){
    event.preventDefault();
    window.alert('Resources are being downloaded to your local device. Please wait a moment.');
    console.log('Resources are being downloaded to your local device. Please wait a moment.');
});

// Adds alert window with message for user when blog button is pressed
blogPress.addEventListener('click',function(event){
    event.preventDefault();
    window.alert('The blog is currently under construction. Please forgive our fairy dust.');
    console.log('The blog is currently under construction. Please forgive our fairy dust.');
});

// Adds alert window with message for user when 'sign up for free' button is pressed
freePress.addEventListener('click',function(event){
    event.preventDefault();
    window.alert('The free version, huh? Well everyone has to start somewhere, I guess.');
    console.log('The free version, huh? Well everyone has to start somewhere, I guess.');
});

// // Adds alert window with message for user when 'start free trial' button is pressed
trialPress.addEventListener('click',function(event){
    event.preventDefault();
    window.alert(`That's more like it. A person with your gumption will go far here.`);
    console.log(`That's more like it. A person with your gumption will go far here.`);
});