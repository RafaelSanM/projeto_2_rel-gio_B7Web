// pegando os elementos no html
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90; // 90graus para colocar o ponteiro contando de cima pois ele inicia nos 15 por causa do CSS ver class .p (transform-origin: left -- eixo dele deve ser do lado esquerdo e nao no meio)
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;

    // if(time < 10) {
    //     return '0'+time;
    // } else {
    //     return time;
    // }
} // essa função corrige o formato de horario quando a hora ou o minuto ou o segundo é menor que 10. Por exemplo: 12hs30min05s sem a função ficaria 12hs30min5s (sem o zero, ou seja, incorreto o formato)

setInterval(updateClock, 1000);
updateClock();