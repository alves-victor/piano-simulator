
let sound = new Audio("src/sounds/a.wav");
let mappedKeys = [];

const pianoKeys = document.querySelectorAll(".piano-keys .key");

function playSound(key){
    sound.src = `src/sounds/${key}.wav`;
    sound.play();
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