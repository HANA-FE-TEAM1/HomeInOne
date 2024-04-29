
// 각 스위치에 대응하는 로컬 스토리지의 값을 가져와서 체크 여부를 설정.
const airconSwitch0 = document.getElementById('aircon-power')
const humidifierSwitch0 = document.getElementById('humid-power')
// const humidifierSwitch = document.querySelector('#container>.switch-container>.switch>#humid-power')
const refridgeratorSwitch0 = document.getElementById('refridge-power')
const washingMachineSwitch0 = document.getElementById('washing-power')

window.addEventListener('DOMContentLoaded', () => {
    airconSwitch0.checked = localStorage.getItem('power3') === 'true';
    humidifierSwitch0.checked = localStorage.getItem('power0') === 'true';
    refridgeratorSwitch0.checked = localStorage.getItem('power1') === 'true';
    washingMachineSwitch0.checked = localStorage.getItem('power2') === 'true';
});
function airconOn() {
    const power1 = airconSwitch0.checked ? 'true' : 'false';
    localStorage.setItem('power3', power1);
}
function humidOn() {
    const power2 = humidifierSwitch0.checked ? 'true' : 'false';
    localStorage.setItem('power0', power2);
}
function refridgeOn() {
    const power3 = refridgeratorSwitch0.checked ? 'true' : 'false';
    localStorage.setItem('power1', power3);
}
function washingOn() {
    const power4 = washingMachineSwitch0.checked ? 'true' : 'false';
    localStorage.setItem('power2', power4);
}
