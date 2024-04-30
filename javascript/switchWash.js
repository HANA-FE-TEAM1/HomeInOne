const washingMachineSwitch0 = document.getElementById('washing-power')

function updateSwitchState(switchElement, storageKey) {
    switchElement.checked = localStorage.getItem(storageKey) === 'true';
}

window.addEventListener('DOMContentLoaded', () => {
    updateSwitchState(washingMachineSwitch0, 'power2');
});
function washingOn() {
    localStorage.setItem('power2', washingMachineSwitch0.checked.toString());
}

window.addEventListener('storage', (event) => {
    if (event.key === 'power0') {
        updateSwitchState(humidifierSwitch0, 'power0');
    } else if (event.key === 'power1') {
        updateSwitchState(refridgeratorSwitch0, 'power1');
    } else if (event.key === 'power2') {
        updateSwitchState(washingMachineSwitch0, 'power2');
    } else if (event.key === 'power3') {
        updateSwitchState(airconSwitch0, 'power3');
    }
});