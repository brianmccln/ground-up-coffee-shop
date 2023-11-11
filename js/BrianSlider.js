class BrianSlider {

    constructor(objArr, slider) {

        this.objArr = objArr;
        this.len = objArr.length; // total number of slides
        this.i = -1; // index of objArr
        this.slider = document.querySelector(slider); // ul
        this.prevBtn = document.querySelector('#prev');
        this.prevBtn.addEventListener('click', this.prev.bind(this));
        this.nextBtn = document.querySelector('#next');
        this.nextBtn.addEventListener('click', this.next.bind(this));
        this.autoBtn = document.querySelector('#auto-play');
        this.autoBtn.addEventListener('click', this.auto.bind(this));
        this.leftPos = 0; // slider start position
        this.sound = new Audio();
        this.autoPlay = false;
    }

    auto() {
        console.log('auto() AUTO');
        if(!this.autoPlay) { 
            this.autoBtn.textContent = 'STOP';
            this.next();
        } else {
            this.autoBtn.textContent = 'AUTO';
        }
        this.autoPlay = !this.autoPlay;
        console.log('auto() STOP');
        console.log(' this.autoPlay:', this.autoPlay);
    }

    load() {
        this.objArr.forEach(obj => {
            this.slider.innerHTML += `<li class="slide">
            <img src="./images/coffee-history/${obj.img}" alt="${obj.alt}">
            <div>${obj.year} AD: ${obj.capt}</div></li>`;
        });        
    }

    prev() {
        if(this.i > 0) this.i--; // if i is not already 0, subtract 1
        let dist = 0; // slider distance moved
        let intrvl = setInterval(() => {
            if(dist <= 405 && this.leftPos <= 0) {
                dist += 15;
                this.leftPos += 15;
                this.slider.style.left = this.leftPos + "px";
                if(this.objArr[this.i].mp3) {
                    this.sound.pause();
                    this.sound.src = `./audio/${this.objArr[this.i].snd}`;
                    this.sound.play();
                }
            } else {
               clearInterval(intrvl); 
            }
        }, 15);
        if(this.objArr[this.i].snd) {
            this.sound.src = `./audio/${this.objArr[this.i].snd}`;
            this.sound.play();
        }
    }

    next() {
        let dist = 0;
        this.i++;
        if(this.i == this.len) {
            this.i = 1;
            this.leftPos = 0;
            this.slider.style.left = this.leftPos + "px";
        }
        let intrvl = setInterval(() => {
            if(this.i > 1 && dist <= 405 && this.leftPos >= -((this.len-1)*405-110)) {
                dist += 15;
                this.leftPos -= 15; 
                this.slider.style.left = this.leftPos + "px";
            } else {
                clearInterval(intrvl); 
            }
        }, 15); 
        if(this.objArr[this.i].snd) { // if snd not null, there's a sound file
            this.sound.src = `./audio/${this.objArr[this.i].snd}`;
            this.sound.play();
            console.log('this.autoPlay:', this.autoPlay);
            this.sound.onended = () => { // when the sound ends
                if(this.autoPlay) { // if autoPlay is true
                    console.log('sound ended');
                    this.next(); // call the next() function again, recursively
                }
            };
        } 
    }

}