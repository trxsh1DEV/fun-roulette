const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spin-btn');
// let valueRotation = Math.round((Math.random() * 3000));
// let valueRotation = Math.floor(Math.random() * (360 - 1) + 1);
const rand = (max, min) => Math.floor(Math.random() * (max - min) + min) * 9;
let valueRotation = rand(360, 45);
const pointer = document.querySelector('.selector');
const t = document.querySelectorAll('.numb');
// let currentRotate = 0;
// let test = Math.ceil(Math.random() * 360);

spinBtn.addEventListener('click', () => {
    // wheel.style.transform = "rotate("+ valueRotation + "deg)";
    wheel.style.transform = `rotate(${valueRotation}deg)`;
    // currentRotate += valueRotation;
    console.log('a', valueRotation);
    console.log('rotação atual','rotação roleta', valueRotation);
    let convertRotate = valueRotation / 45;
    console.log('/ 45', convertRotate,'casas puladas', Math.round(convertRotate));
    valueRotation += rand(720, 405);
    // console.log(t[0].firstElementChild.textContent);
    // if(currentRotate <= 90){
    //     // console.log(t[0].getAttribute('data-id').valueOf())
    //     // console.log(t[0].firstElementChild.textContent);
    //     return
    // }
    // const rand = (max, min) => Math.floor(Math.random() * (max - min) + min);
    // const rand = Math.floor(Math.random() * (360 - 1) + 1);
    // console.log(rand);
    // console.log(valueRotation);
})
