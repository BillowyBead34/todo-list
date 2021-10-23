const errorContainer = document.getElementById('ErrorContainer');

window.onload = () => {
  localStorage.removeItem('User');
  errorContainer.innerHTML = '';
};

document.getElementById('SignInBtn').addEventListener('click', () => {
  const data = document.getElementById('NameTxt').value;
  const name = data.trim();
  // Check the input of the user
  if (name == '') {
    errorContainer.innerHTML = 'Please enter your name';
    return;
  } else if (name.length < 4) {
    errorContainer.innerHTML = 'The name must be more thar 3 chars';
    return;
  } else if (name.length > 14) {
    errorContainer.innerHTML = 'The name must be between 4 and 14 chars';
    return;
  } else {
    errorContainer.innerHTML = '';
  }
  localStorage.setItem('User', name);
  window.location.href = './todo.html';
});

document.getElementById('continueBtn').addEventListener('click', () => {
  localStorage.removeItem('User');
  window.location.href = './todo.html';
});
