function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const docBody = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const bntStop = document.querySelector('[data-stop]');
const timer = {
    instance: null,
    isActive: false,
    startChangeColor() {
        btnStart.disabled = true;
        bntStop.disabled = false;
        this.isActive = true;
        this.instance = setInterval(()=>{
            docBody.style.backgroundColor = getRandomHexColor();
        }, 1000);
    },
    stopChangeColor() {
        if (this.isActive) {
            this.isActive = false;
            btnStart.disabled = false;
            bntStop.disabled = true;
            clearInterval(this.instance);
        }
    }
};

btnStart.addEventListener('click', () => timer.startChangeColor());
bntStop.addEventListener('click', () => timer.stopChangeColor());
