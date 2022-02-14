const finishBtn = document.getElementById("finishBtn");
const color = document.getElementsByClassName('color');

finishBtn.addEventListener('click', () => {
    for (let i = 0; i < color.length; i++) {
        color[i].classList.toggle("full")
    }
})