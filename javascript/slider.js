// const myDevice = localStorage.getItem()
// if (myDevice == '냉장고') {

// }

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

const powerSwitch = document.getElementById('power')
addEventListener('click', (e) => {
    const power = powerSwitch.checked ? 'On' : 'Off';
    console.log(power);
})