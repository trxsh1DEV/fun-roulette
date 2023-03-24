const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spin-btn');
const rand = (max, min) => Math.floor(Math.random() * (max - min) + min) * 9;
let valueRotation = rand(360, 45) + 360;
const pointer = document.querySelector('.selector');
const t = document.querySelectorAll('.numb');
// let currentRotate = 0;
// let test = Math.ceil(Math.random() * 360);

spinBtn.addEventListener('click', () => {
    // wheel.style.transform = "rotate("+ valueRotation + "deg)";
    wheel.style.transform = `rotate(${valueRotation}deg)`;
    // currentRotate += valueRotation;
    // console.log('a', valueRotation);
    // console.log('rotação atual','rotação roleta', valueRotation);
    let convertRotate = Math.round(valueRotation / 45);
    console.log('casas puladas', convertRotate);
    console.log(valueRotation);
    valueRotation += rand(720, 405);
    if(convertRotate > 0){
        // console.log(t[0].getAttribute('data-id').valueOf())
        // console.log(t[0].firstElementChild.textContent);
        while(convertRotate >= 8){
            convertRotate = convertRotate - 8;
        }
        console.log(convertRotate);
        // convertRotate = Number(convertRotate);
        t.forEach((item) => {
            console.log(item.firstElementChild);
        })
        console.log(convertRotate, t[convertRotate]);
        setTimeout(() => {
            t[convertRotate].classList.add('active');
        }, 5000)
        // console.log(t[18].firstElementChild.textContent);
    }
});
