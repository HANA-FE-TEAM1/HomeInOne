const airconSwitch = document.getElementById('power1')
const humidifierSwitch = document.getElementById('power2')
const refridgeratorSwitch = document.getElementById('power3')
const washingMachineSwitch = document.getElementById('power4')

function updateLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function updateSwitchState(switchElement, storageKey) {
    switchElement.checked = localStorage.getItem(storageKey) === 'true';
}

// 각 스위치에 대응하는 로컬 스토리지의 값을 가져와서 체크 여부를 설정.
window.addEventListener('DOMContentLoaded', () => {
    updateSwitchState(airconSwitch, 'power3');
    updateSwitchState(humidifierSwitch, 'power0');
    updateSwitchState(refridgeratorSwitch, 'power1');
    updateSwitchState(washingMachineSwitch, 'power2');
});

airconSwitch.addEventListener('change', () => {
    updateLocalStorage('power3', airconSwitch.checked.toString());
});
humidifierSwitch.addEventListener('change', () => {
    updateLocalStorage('power0', humidifierSwitch.checked.toString());
});

refridgeratorSwitch.addEventListener('change', () => {
    updateLocalStorage('power1', refridgeratorSwitch.checked.toString());
});

washingMachineSwitch.addEventListener('change', () => {
    updateLocalStorage('power2', washingMachineSwitch.checked.toString());
});

window.addEventListener('storage', (event) => {
    if (event.key === 'power0') {
        updateSwitchState(humidifierSwitch, 'power0');
    } else if (event.key === 'power1') {
        updateSwitchState(refridgeratorSwitch, 'power1');
    } else if (event.key === 'power2') {
        updateSwitchState(washingMachineSwitch, 'power2');
    } else if (event.key === 'power3') {
        updateSwitchState(airconSwitch, 'power3');
    }
});