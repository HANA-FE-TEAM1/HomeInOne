const airconSwitch = document.getElementById('aircon-power')
const humidifierSwitch = document.getElementById('humid-power')
const refridgeratorSwitch = document.getElementById('refridge-power')
const washingMachineSwitch = document.getElementById('washing-power')

// 각 스위치에 대응하는 로컬 스토리지의 값을 가져와서 체크 여부를 설정.
window.addEventListener('DOMContentLoaded', () => {
    airconSwitch.checked = localStorage.getItem('power3') === 'true';
    humidifierSwitch.checked = localStorage.getItem('power0') === 'true';
    refridgeratorSwitch.checked = localStorage.getItem('power1') === 'true';
    washingMachineSwitch.checked = localStorage.getItem('power2') === 'true';
});
airconSwitch.addEventListener('click', (e) => {
    const power1 = airconSwitch.checked ? 'true' : 'false';
    localStorage.setItem('power3', power1);
})
humidifierSwitch.addEventListener('click', (e) => {
    const power2 = humidifierSwitch.checked ? 'true' : 'false';
    localStorage.setItem('power0', power2);
})
refridgeratorSwitch.addEventListener('click', (e) => {
    const power3 = refridgeratorSwitch.checked ? 'true' : 'false';
    localStorage.setItem('power1', power3);
})
washingMachineSwitch.addEventListener('click', (e) => {
    const power4 = washingMachineSwitch.checked ? 'true' : 'false';
    localStorage.setItem('power2', power4);
})

