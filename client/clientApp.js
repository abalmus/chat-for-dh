const messageForm = document.querySelector('#messageForm');

messageForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(evnt) {
    evnt.preventDefault();
    const { target } = evnt;
    const inputElement = target.querySelector('input[name="message"]');

    console.log(inputElement.value);
}
