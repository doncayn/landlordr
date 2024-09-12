$(document).ready(function () {
  const darkModeButton = document.getElementById('togglr');
  const container = document.body;
  const brgr = document.getElementById('brgr');

  let mode = localStorage.getItem('dark_mode');

  // If dark mode is enabled in localStorage, apply the dark mode classes
  if (mode === 'dark') {
    container.classList.add('dark');
    brgr.classList.add('navbar-dark');
    brgr.classList.remove('navbar-light');
    darkModeButton.checked = true; // Ensure the checkbox is checked if dark mode is active
  } else {
    container.classList.remove('dark');
    brgr.classList.add('navbar-light');
    brgr.classList.remove('navbar-dark');
    darkModeButton.checked = false; // Ensure the checkbox is unchecked if light mode is active
  }

  // Attach event listener for Bootstrap Toggle checkbox
  $(darkModeButton).change(function () {
    console.log('Event triggered, checked:', darkModeButton.checked);
    if (darkModeButton.checked) {
      container.classList.add('dark');
      brgr.classList.add('navbar-dark')
      brgr.classList.remove('navbar-light')
      mode = 'dark';
      localStorage.setItem('dark_mode', 'dark')

    } else {
      container.classList.remove('dark');
      brgr.classList.add('navbar-light')
      brgr.classList.remove('navbar-dark')
      mode = 'light';
      localStorage.setItem('dark_mode', 'light')
    }
  });
});

