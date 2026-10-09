document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
​if (username === 'Loveyou' && password === 'bubu') {
window.location.href = 'welcome.html';
} else {
alert('Incorrect username or password!');
}
});