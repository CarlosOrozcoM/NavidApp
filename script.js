const actualDate = new Date();
const actualYear = actualDate.getFullYear();
const christmasDate = new Date(actualYear, 11,25);

function updateCouter() {

    const dateToday = new Date();
    var distance = christmasDate - dateToday;

    if (distance < 0) {
        christmasDate.setFullYear(actualYear + 1);
        distance = christmasDate - dateToday;
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("daysCount").textContent =  days;
    document.getElementById("days").textContent =  (days !==1 ? " dias":" día");

    document.getElementById("hoursCount").textContent = hours;
    document.getElementById("hours").textContent = (hours !==1 ? " horas":" hora");

    document.getElementById("minutesCount").textContent =  minutes;
    document.getElementById("minutes").textContent = (minutes !==1 ? " mins":" min");

    document.getElementById("secondsCount").textContent =  seconds;
    document.getElementById("seconds").textContent =  (seconds !==1 ? " segs":" seg");

}

updateCouter();
setInterval(updateCouter,1000);

//--------------- Snow Animation -------------------------
function createSnow(layerId, count, size) {
    const layer = document.getElementById(layerId);
    let shadows = "";

    for (let i = 0; i < count; i++) {
        // Generamos coordenadas aleatorias de 0 a 100
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        
        // Vamos acumulando las sombras en un string
        shadows += `${x}vw ${y}vh 2px white${i === count - 1 ? "" : ","}`;
    }

    // Aplicamos los estilos CSS generados
    layer.style.width = size + "px";
    layer.style.height = size + "px";
    layer.style.boxShadow = shadows;
}

createSnow("layer1", 50, 8);
createSnow("layer2", 15, 20);

//-------------------- Music ------------------------------
function playChristmasSong() {
    const audio = document.querySelector("audio");
    audio.volume = 0.1;

    document.body.addEventListener('click', () => {
        audio.play();
    }, { once: true })
   
}

playChristmasSong();


/*-------------------------------------------------------- 
//
// 
//
*/ 