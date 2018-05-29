// const status = document.getElementById('status');
// const messages = document.getElementById('messages');
// const form = document.getElementById('form');
// const input = document.getElementById('input');

// const socket = new WebSocket('ws://localhost:3000');

// function setStatus(value) {
//   status.innerHTML = value
// }

// function printMessage(value) {
//   const li = document.createElement('li');
//   li.innerHTML = value;
//   messages.appendChild(li);
// }

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   socket.send(input.value);
//   input.value = '';
// })

// socket.onopen = () => {
//   setStatus('ONLINE')
// }

// socket.onclose = () => {
//   setStatus('DISCONNECTED')
// }



// socket.onmessage = response => printMessage(response.data)