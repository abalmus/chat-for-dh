const settingsForm = document.querySelector('#settingsForm');
settingsForm.addEventListener('submit', handleSettingsFormSubmit);

function handleSettingsFormSubmit(evnt) {
    evnt.preventDefault();
    
    const userNameElement = evnt.target.querySelector('input[name="userName"]');
    const interfaceColorElement = evnt.target.querySelector('input[name="interfaceColor"]:checked');
    const timeFormatElement = evnt.target.querySelector('input[name="timeFormat"]:checked');
    const ctrlEnterElement = evnt.target.querySelector('input[name="ctrlEnter"]:checked');
    const languageElement = evnt.target.querySelector('select[name="language"]');

    fetch('/settings/save', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: userNameElement.value,
            settings: {
                interfaceColor: interfaceColorElement.value,
                timeFormat: timeFormatElement.value,
                ctrlEnter: ctrlEnterElement.value,
                language: languageElement.value
            }
        })
    }).then(response => response.json()).then(data => {
        if (data && data.id) {
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = '/';
        }
    });
}
