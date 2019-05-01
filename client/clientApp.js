const socket = io('/app');
const messageForm = document.querySelector('#messageForm');
const messagesContainer = document.querySelector('#messages');

socket.on('message:pushed', handleMessagePush);
messageForm.addEventListener('submit', handleMessagesFormSubmit);

function handleMessagePush(message) {
    const user = JSON.parse(localStorage.getItem('user'));
    const li = document.createElement('li');
    li.innerHTML = `${message.userName}: ${message.text}`;

    if (user.userName === message.userName) {
        li.classList.add('self-message');
    }

    messagesContainer.append(li);
}

function handleMessagesFormSubmit(evnt) {
    evnt.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const inputElement = evnt.target.querySelector('input[name="message"]');

    socket.emit('massage:push', {
        text: inputElement.value,
        userName: user.userName
    });

    inputElement.value = '';
}
