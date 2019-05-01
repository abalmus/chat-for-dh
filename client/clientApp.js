const socket = io('/app');
const messageForm = document.querySelector('#messageForm');
const messagesContainer = document.querySelector('#messages');

socket.on('message:pushed', handleMessagePush);

messageForm.addEventListener('submit', handleMessagesFormSubmit);

function handleMessagePush(message) {
    const li = document.createElement('li');
    li.innerHTML = `${message.username}: ${message.text}`;
    messagesContainer.append(li);
}

function handleMessagesFormSubmit(evnt) {
    evnt.preventDefault();

    const { target } = evnt;
    const inputElement = target.querySelector('input[name="message"]');

    socket.emit('massage:push', { 
        text: inputElement.value, 
        username: 'inserted value'
    });

    inputElement.value = '';
}
