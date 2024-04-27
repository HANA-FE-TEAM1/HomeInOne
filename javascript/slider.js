
// const buttonRipple = document.querySelector('.ripple-button');

// buttonRipple.addEventListener('click', function(e) {
//     buttonRipple.classList.toggle("dark-mode");
//     console.log('클릭됨');

//     let x = e.clientX - e.target.offsetLeft;
//     let y = e.clientY - e.target.offsetTop;

//     let ripple = document.createElement('div');
//     ripple.className = 'click-ripple';

//     ripple.style.left = x + 'px';
//     ripple.style.top = y + 'px';
//     this.appendChild(ripple);

//     setTimeout(() => {
//         ripple.remove()
//     }, 1000);
// })


const powerSwitch1 = document.getElementById('power1')
addEventListener('click', (e) => {
    const power = powerSwitch1.checked ? 'On' : 'Off';
    console.log(power);
})
const powerSwitch2 = document.getElementById('power1')
addEventListener('click', (e) => {
    const power = powerSwitch2.checked ? 'On' : 'Off';
    console.log(power);
})
const powerSwitch3 = document.getElementById('power1')
addEventListener('click', (e) => {
    const power = powerSwitch3.checked ? 'On' : 'Off';
    console.log(power);
})
const powerSwitch4 = document.getElementById('power1')
addEventListener('click', (e) => {
    const power = powerSwitch4.checked ? 'On' : 'Off';
    console.log(power);
})

const addButton = document.getElementById('plus-button')
addButton.addEventListener('click', (e) => {
    
})