const socket = io('/app');
const messageForm = document.querySelector('#messageForm');
const messagesContainer = document.querySelector('#messages');

socket.on('message:pushed', handleMessagePush);
messageForm.addEventListener('submit', handleMessagesFormSubmit);

function handleMessagePush(message) {
    const user = JSON.parse(localStorage.getItem('user'));
    const isSelf = user.userName === message.userName;
    const time = new Date(message.time);
    const li = document.createElement('li');
    const divMessage = document.createElement('div');
    const divInfo = document.createElement('div');

    divMessage.innerHTML = message.text;
    divMessage.classList.add('message');
    
    divInfo.innerHTML = `${message.userName} - ${time.getHours()}:${time.getMinutes()}`;
    divInfo.classList.add('message-info');

    isSelf && li.classList.add('self-message');

    li.append(divMessage);
    li.append(divInfo);

    messagesContainer.append(li);
    scrallContainer();
}

function handleMessagesFormSubmit(evnt) {
    evnt.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    const inputElement = evnt.target.querySelector('textarea[name="message"]');

    socket.emit('massage:push', {
        text: inputElement.value,
        userName: user.userName
    });

    scrallContainer();
    inputElement.value = '';
}

function scrallContainer() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

scrallContainer();