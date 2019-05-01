const socket = io('/app');
const messageForm = document.querySelector('#messageForm');
const messagesContainer = document.querySelector('#messages');

socket.on('message:pushed', handleMessagePush);

messageForm.addEventListener('submit', handleMessagesFormSubmit);

function handleMessagePush(message) {
    const li = document.createElement('li');
    li.innerHTML = `${message.userName}: ${message.text}`;
    messagesContainer.append(li);
}

function handleMessagesFormSubmit(evnt) {
    evnt.preventDefault();

    const { target } = evnt;
    const inputElement = target.querySelector('input[name="message"]');
    const user = JSON.parse(localStorage.getItem('user'));

    socket.emit('massage:push', { 
        text: inputElement.value,
        userName: user.userName
    });

    inputElement.value = '';
}
