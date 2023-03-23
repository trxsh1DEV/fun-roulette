let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spin-btn');
let valueRotation = Math.round((Math.random() * 2000) + 500);
// let test = Math.ceil(Math.random() * 360);

spinBtn.addEventListener('click', () => {
    // wheel.style.transform = "rotate("+ valueRotation + "deg)";
    wheel.style.transform = `rotate(${valueRotation}deg)`;
    valueRotation += Math.round((Math.random() * 2000) + 500);
    // console.log(wheel.style.transform);
    // console.log(valueRotation);
})
