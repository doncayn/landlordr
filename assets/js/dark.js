const container= document.querySelector('html');
const darkModeButton = document.querySelector('togglr');

let mode = 'light';

darkModeButton.addEventListener('click', function() {
  if (mode === 'light'){
    mode= 'dark';
    container.setAttribute('class', 'dark');
    darkModeButton.textContent = '🌚';
  }
  else{
    mode= 'light';
    container.setAttribute('class','light');
    darkModeButton.textContent= '🌞';
    }
});