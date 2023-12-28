
let sound = new Audio("src/sounds/a.wav");
let mappedKeys = [];

const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volume = document.querySelector(".volume input");
const keyToggle = document.querySelector(".keys-toggle input");

function playSound(key){
    sound.src = `src/sounds/${key}.wav`;
    sound.play();
}

function handleVolume(event){
    sound.volume = event.target.value;
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playSound(key.dataset.key));

    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (event) => {
    if(mappedKeys.includes(event.key)){
        playSound(event.key);

        const keyPressed = document.querySelector(`[data-key=${event.key}]`);
        keyPressed.classList.add("active");

        setTimeout(() => {
            keyPressed.classList.remove("active");
        }, 200);
    }
});

function showHideKeys(){
    pianoKeys.forEach(key => {
        key.classList.toggle("hide");
    })
}

volume.addEventListener("input", handleVolume);
keyToggle.addEventListener("click", showHideKeys);