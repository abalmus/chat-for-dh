const settingsForm = document.querySelector('#settingsForm');
settingsForm.addEventListener('submit', handleSettingsFormSubmit);

function handleSettingsFormSubmit(evnt) {
    evnt.preventDefault();
    
    const userNameElement = evnt.target.querySelector('input[name="userName"]');

    fetch('/settings/save', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: userNameElement.value
        })
    }).then(response => response.json()).then(data => {
        if (data && data.id) {
            window.location.href = '/';
        }
    });
}
