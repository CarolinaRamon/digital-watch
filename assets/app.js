
const time = document.querySelector('#time');

let watch = () => {
    let date = new Date();
    currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    time.textContent = currentTime;
}

setInterval(watch, 1000);


const switchElement = document.querySelector('.switch');

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});